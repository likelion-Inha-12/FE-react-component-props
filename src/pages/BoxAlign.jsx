import Box from "../components/Box/Box";
import Circle from "../components/Circle/Circle";

const BoxAlign = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <div>
      <Box boxColor="red" text="text1" />
      <Box boxColor="blue" text="text2" />
      <Box boxColor="green" text="text3" />
      <Box boxColor="pink" text="text4" />

      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {circleColorArr.map((color) => (
          <Circle key={color} color={color} />
        ))}
      </div>
    </div>
  );
};

export default BoxAlign;
