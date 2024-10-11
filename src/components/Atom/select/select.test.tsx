// components/Atom/select/select.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RctsComptSelect from "./select";

describe("RctsComptSelect", () => {
  const options = [
    { value: "clio2", label: "Clio 2" },
    { value: "megane3", label: "Megane 3" },
    { value: "206", label: "206" },
    { value: "5008", label: "5008" },
    { value: "autre", label: "Autre" },
  ];

  test("renders select with options", () => {
    const { getByLabelText } = render(
      <RctsComptSelect
        id="selectTest"
        name="testSelect"
        data={options}
        withLabel
        text="Select Option"
      />
    );
    expect(getByLabelText("Select Option")).toBeInTheDocument();
  });

  test("calls onChange handler when option is selected", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <RctsComptSelect
        id="selectTest"
        name="testSelect"
        data={options}
        withLabel
        text="Select Option"
        onChange={handleChange}
      />
    );
    const select = getByLabelText("Select Option") as HTMLSelectElement;
    fireEvent.change(select, { target: { value: "megane3" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select.value).toBe("megane3");
  });
});
