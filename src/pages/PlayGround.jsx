import { useRef, useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const PlayGround = () => {
  const [isError, setIsError] = useState(false);
  const ref = useRef(null);

  const handleClick = () => {
    if (ref.current) {
      if (ref.current.value === "") {
        setIsError(true);
      } else {
        setIsError(false);
      }
    }
  };

  return (
    <div className="playground">
      <Input
        ref={ref}
        label="USER ID"
        placeholder="입력하세요"
        supportingText="아이디를 입력해주세요"
        isError={isError}
      />
      <Button onClick={handleClick}>Submit</Button>
    </div>
  );
};

export default PlayGround;
