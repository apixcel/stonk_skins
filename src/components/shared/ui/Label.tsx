import fonts from "@/fonts";
import React from "react";

const Label = ({
  ...props
}: React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>) => {
  return (
    <label
      {...props}
      className={`${
        fonts.dm_sans.className
      } text-secondary text-[16px] font-[500] leading-[125%] tracking-[-0.096px] ${
        props.className || ""
      }`}
    >
      {props.children || ""}
    </label>
  );
};

export default Label;
