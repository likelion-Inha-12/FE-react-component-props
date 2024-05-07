import { forwardRef } from "react";
import Label from "../Label/Label";
import SupportingText from "../SupportingText/SupportingText";

const Input = ({ label, supportingText, isError, placeholder }, ref) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      {label && <Label id={label}>{label}</Label>}
      <input
        placeholder={placeholder}
        ref={ref}
        className="input"
        style={{
          borderColor: isError && "red",
        }}
      />
      {supportingText && (
        <SupportingText isError={isError}>{supportingText}</SupportingText>
      )}
    </div>
  );
};

export default forwardRef(Input);
