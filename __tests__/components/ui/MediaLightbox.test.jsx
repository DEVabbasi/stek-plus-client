import { render, screen, fireEvent } from "@testing-library/react";
import { MediaLightbox } from "@/components/ui/MediaLightbox";
import React from "react";

const mockImageItem = {
  type: "image",
  src: "/test-image.jpg",
  alt: "Test image",
};

describe("MediaLightbox", () => {
  it("renders nothing when item is null", () => {
    const { container } = render(<MediaLightbox item={null} onClose={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders dialog when item is provided", () => {
    render(<MediaLightbox item={mockImageItem} onClose={jest.fn()} />);
    // Depends on how MediaLightbox is implemented, usually it has a dialog role or specific text
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<MediaLightbox item={mockImageItem} onClose={onClose} />);
    // Finding the close button - assuming it has an aria-label or specific icon
    // For now using a broad search if the exact label is unknown, or assuming "Sluiten"
    const closeBtn = screen.getByLabelText(/sluiten/i) || screen.getAllByRole("button")[0];
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
