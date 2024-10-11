import React, { ChangeEventHandler, useState } from "react";
import "./accordeon.css";

export type Option = {
  title: string;
  body: string;
  value: string;
};

export type AccordeonProps = {
  name: string;
  data: Option[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  text?: string;
  withLabel?: boolean;
  fontSize?: "fontSizeSmall" | "fontSizeMedium" | "fontSizeLarge";
  border?: boolean;
  size?: "small" | "medium" | "large";
};

const Accordeon: React.FC<AccordeonProps> = ({
  name,
  data,
  text,
  onChange,
  withLabel,
  fontSize,
  border,
  size,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`accordeon-container border-${border} ${size}`}>
      {withLabel && <label className={fontSize}>{text}</label>}
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </div>
          {openIndex === index && (
            <div className="accordion-content">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordeon;
