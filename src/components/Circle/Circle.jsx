const Circle = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color || "black",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Circle;
