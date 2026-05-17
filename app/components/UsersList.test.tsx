import { render, screen } from "@testing-library/react";
import { UsersList } from "./UsersList";

const users = [
  {
    id: 1,
    name: "Vinicius Weber",
    email: "vini@example.com",
    phone: "123456",
    website: "example.com",
  },
  {
    id: 2,
    name: "Ada Lovelace",
  },
];

describe("UsersList", () => {
  it("renders users and the profile count", () => {
    render(<UsersList users={users} />);

    expect(screen.getByRole("heading", { name: "Users" })).toBeInTheDocument();
    expect(screen.getByText("2 profiles")).toBeInTheDocument();
    expect(screen.getByText("Vinicius Weber")).toBeInTheDocument();
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument();
  });

  it("renders an empty state", () => {
    render(<UsersList users={[]} />);

    expect(screen.getByText("0 profiles")).toBeInTheDocument();
    expect(screen.getByText("No users found.")).toBeInTheDocument();
  });

  it("renders API errors without hiding valid users", () => {
    render(<UsersList error="Partial data loaded." users={users.slice(0, 1)} />);

    expect(screen.getByRole("status")).toHaveTextContent("Partial data loaded.");
    expect(screen.getByText("Vinicius Weber")).toBeInTheDocument();
  });
});
