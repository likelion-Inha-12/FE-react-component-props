const SupportingText = ({ isError, children }) => {
  return (
    <span
      style={{
        color: isError ? "red" : "black",
      }}
    >
      {children}
    </span>
  );
};

export default SupportingText;
