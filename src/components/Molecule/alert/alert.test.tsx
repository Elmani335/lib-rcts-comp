// components/Molecule/alert/alert.test.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert from "./alert";

describe("Alert", () => {
  test("renders alert with message", () => {
    const { getByText } = render(
      <Alert type="info" message="This is an alert message." />
    );
    expect(getByText("This is an alert message.")).toBeInTheDocument();
  });

  test("calls onClose handler when close button is clicked", () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <Alert
        type="info"
        message="This is an alert message."
        onClose={handleClose}
        autoClose={false}
        buttonText="Close"
      />
    );
    fireEvent.click(getByText("Close"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("auto closes after duration", () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    render(
      <Alert
        type="info"
        message="This is an alert message."
        onClose={handleClose}
        autoClose={true}
        duration={3000}
      />
    );
    jest.advanceTimersByTime(3000);
    expect(handleClose).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });
});
