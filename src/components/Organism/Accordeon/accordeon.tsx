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
  onChange: string;
  text?: string;
  withLabel?: boolean;
  fontSize?: "fontSizeSmall" | "fontSizeMedium" | "fontSizeLarge";
  border?: boolean;
  size?: "small" | "medium" | "large";
  multiple: boolean
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
  multiple,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordeon = (index: number, indexClick: string) => {
    if (multiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter(i => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes[0] === index ? [] : [index]);
    }
    onChange(indexClick, openIndexes);
  };


  return (
  <div className={`accordeon-container border-${border} ${size}`}>
    {withLabel && <label className={fontSize}>{text}</label>}
    <br/>
    {data.map((item, index) => (
      <><div key={index} className="accordeon-item">
        <div
          className={`accordeon-header ${openIndexes.includes(index) ? 'open' : ''} ${size}`}
          onClick={() => toggleAccordeon(index, item.value)}
        >
          {item.title}
        </div>
        {openIndexes.includes(index) && (
          <><br /><div className={`accordeon-content ${size}`}>{item.body}</div></>
        )}
      </div><br /></>
    ))}
  </div>
  );
};

export default Accordeon;
function setOpenIndexes(arg0: number[]) {
  throw new Error("Function not implemented.");
}

