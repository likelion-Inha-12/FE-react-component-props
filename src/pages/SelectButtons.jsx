import { useState } from "react";
import Button from "../components/Button/Button";

const SelectButtons = () => {
  const [id, setId] = useState("");

  const handleClick = (id) => {
    setId(id);
  };

  return (
    <div className="selectBtns">
      <Button
        isSelected={id === "primary"}
        onClick={() => handleClick("primary")}
      >
        Primary
      </Button>
      <Button
        isSelected={id === "secondary"}
        onClick={() => handleClick("secondary")}
      >
        Secondary
      </Button>
      <Button
        isSelected={id === "default"}
        onClick={() => handleClick("default")}
      >
        Default
      </Button>
    </div>
  );
};

export default SelectButtons;
