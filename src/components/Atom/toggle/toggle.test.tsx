// components/Atom/toggle/toggle.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Toggle from "./toggle";

describe("Toggle", () => {
  test("renders toggle switch", () => {
    const { getByRole } = render(<Toggle isOn={false} onToggle={() => {}} />);
    expect(getByRole("switch")).toBeInTheDocument();
  });

  test("calls onToggle handler when clicked", () => {
    const handleToggle = jest.fn();
    const { getByRole } = render(
      <Toggle isOn={false} onToggle={handleToggle} />
    );
    fireEvent.click(getByRole("switch"));
    expect(handleToggle).toHaveBeenCalledWith(true);
  });

  test("does not call onToggle when disabled", () => {
    const handleToggle = jest.fn();
    const { getByRole } = render(
      <Toggle isOn={false} onToggle={handleToggle} disabled />
    );
    fireEvent.click(getByRole("switch"));
    expect(handleToggle).not.toHaveBeenCalled();
  });
});
