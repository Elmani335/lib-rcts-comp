// components/Atom/input/input.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RctsComptInput from "./input";

describe("RctsComptInput", () => {
  test("renders input with label", () => {
    const { getByLabelText } = render(
      <RctsComptInput
        type="text"
        withLabel
        text="Name"
        id="nameInput"
        name="name"
      />
    );
    expect(getByLabelText("Name")).toBeInTheDocument();
  });

  test("calls onChange handler when input value changes", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <RctsComptInput
        type="text"
        withLabel
        text="Name"
        id="nameInput"
        name="name"
        onChange={handleChange}
      />
    );
    const input = getByLabelText("Name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("John Doe");
  });

  test("renders required input", () => {
    const { getByLabelText } = render(
      <RctsComptInput
        type="text"
        withLabel
        text="Name"
        id="nameInput"
        name="name"
        required
      />
    );
    expect(getByLabelText("Name")).toBeRequired();
  });
});
