// components/Atom/button/button.test.tsx

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RctsComptBtn from "./button";

describe("RctsComptBtn", () => {
  test("renders button with text", () => {
    const { getByText } = render(<RctsComptBtn text="Click Me!" />);
    expect(getByText("Click Me!")).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <RctsComptBtn text="Click Me!" onClick={handleClick} />
    );
    fireEvent.click(getByText("Click Me!"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disables the button when disabled prop is true", () => {
    const { getByText } = render(
      <RctsComptBtn text="Can't Click Me!" disabled />
    );
    expect(getByText("Can't Click Me!")).toBeDisabled();
  });

  test("shows loading text when loading prop is true", () => {
    const { getByText } = render(<RctsComptBtn text="Click Me!" loading />);
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  test("renders as a link when buttonType is 'link' and href is provided", () => {
    const { getByRole } = render(
      <RctsComptBtn
        text="Go to Page"
        buttonType="link"
        href="https://example.com"
      />
    );
    const linkElement = getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
    expect(linkElement).toHaveTextContent("Go to Page");
  });

  test("applies custom styles", () => {
    const { getByText } = render(
      <RctsComptBtn
        text="Styled Button"
        color="red"
        backgroundColor="blue"
        borderRadius="5px"
      />
    );
    const button = getByText("Styled Button");
    expect(button).toHaveStyle(`color: red`);
    expect(button).toHaveStyle(`background-color: blue`);
    expect(button).toHaveStyle(`border-radius: 5px`);
  });

  test("changes styles on hover", () => {
    const { getByText } = render(
      <RctsComptBtn
        text="Hover Me"
        backgroundColor="blue"
        hoverColor="yellow"
        boxShadow="none"
        hoverBoxShadow="0px 0px 10px #000"
      />
    );
    const button = getByText("Hover Me");

    // Before hover
    expect(button).toHaveStyle(`background-color: blue`);
    expect(button).toHaveStyle(`box-shadow: none`);

    // Simulate hover
    fireEvent.mouseEnter(button);

    // After hover
    expect(button).toHaveStyle(`background-color: yellow`);
    expect(button).toHaveStyle(`box-shadow: 0px 0px 10px #000`);

    // Simulate mouse leave
    fireEvent.mouseLeave(button);

    // After mouse leave
    expect(button).toHaveStyle(`background-color: blue`);
    expect(button).toHaveStyle(`box-shadow: none`);
  });
});
