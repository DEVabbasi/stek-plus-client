import { render, screen, fireEvent } from "@testing-library/react";
import { BrandButton } from "@/components/ui/BrandButton";
import React from "react";

describe("BrandButton", () => {
  it("renders children correctly", () => {
    render(<BrandButton>Klik hier</BrandButton>);
    expect(screen.getByRole("button", { name: /klik hier/i })).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<BrandButton onClick={handleClick}>Klik</BrandButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is passed", () => {
    render(<BrandButton disabled>Disabled</BrandButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies fullWidth class when fullWidth prop is true", () => {
    render(<BrandButton fullWidth>Full</BrandButton>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });
});
