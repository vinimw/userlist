import { render, screen } from "@testing-library/react";
import { UserCard } from "./UserCard";

describe("UserCard", () => {
  it("renders user information", () => {
    render(
      <UserCard
        user={{
          id: 1,
          name: "Vinicius Weber",
          email: "vini@example.com",
          phone: "123456",
          website: "example.com",
        }}
      />
    );

    expect(screen.getByText("Vinicius Weber")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "vini@example.com" })).toHaveAttribute(
      "href",
      "mailto:vini@example.com"
    );
    expect(screen.getByRole("link", { name: "123456" })).toHaveAttribute(
      "href",
      "tel:123456"
    );
    expect(screen.getByRole("link", { name: "example.com" })).toHaveAttribute(
      "href",
      "https://example.com"
    );
  });

  it("renders user with no email", () => {
    render(
      <UserCard
        user={{
          id: 1,
          name: "Vinicius Weber",
          phone: "123456",
          website: "example.com",
        }}
      />
    );

    expect(screen.getByText("Vinicius Weber")).toBeInTheDocument();
    expect(screen.queryByText("Email")).not.toBeInTheDocument();
  });
});
