import { getUsers } from "./users";

const originalApiUrl = process.env.API_URL;
const fetchMock = jest.fn();

describe("getUsers", () => {
  beforeEach(() => {
    fetchMock.mockReset();
    global.fetch = fetchMock;
    process.env.API_URL = "https://api.example.com/";
  });

  afterAll(() => {
    process.env.API_URL = originalApiUrl;
  });

  it("fetches, validates, and sanitizes users", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => [
        {
          id: 1,
          name: "Vinicius Weber",
          email: "vini@example.com",
          phone: 123456,
        },
      ],
    });

    await expect(getUsers()).resolves.toEqual({
      users: [
        {
          id: 1,
          name: "Vinicius Weber",
          email: "vini@example.com",
        },
      ],
    });

    expect(fetchMock).toHaveBeenCalledWith("https://api.example.com/users", {
      next: {
        revalidate: 60,
        tags: ["users"],
      },
    });
  });

  it("returns a configuration error when API_URL is missing", async () => {
    delete process.env.API_URL;

    await expect(getUsers()).resolves.toEqual({
      users: [],
      error: "API_URL is not configured.",
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns an error for failed API responses", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(getUsers()).resolves.toEqual({
      users: [],
      error: "Could not load users. The API responded with 500.",
    });
  });

  it("skips invalid users from the API payload", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 1, name: "Vinicius Weber" }, { id: "bad" }],
    });

    await expect(getUsers()).resolves.toEqual({
      users: [{ id: 1, name: "Vinicius Weber" }],
      error: "Some user records were skipped because they were invalid.",
    });
  });

  it("returns an error for unexpected network failures", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation();
    fetchMock.mockRejectedValueOnce(new Error("Network failed"));

    await expect(getUsers()).resolves.toEqual({
      users: [],
      error: "Could not connect to the users API.",
    });

    consoleError.mockRestore();
  });
});
