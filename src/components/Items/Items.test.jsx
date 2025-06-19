import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Items from "./Items";

vi.mock("react-router-dom", () => {
  const actual = vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: () => ({
      cart: [
        { id: 1, title: "Item 1", price: 10, image: "img.jpg", number: 1 },
      ],
      setCart: vi.fn(),
    }),
  };
});

describe("Items component", () => {
  it("renders the item title", () => {
    render(<Items />);
    expect(screen.getByText("Item 1")).toBeDefined();
  });
});
