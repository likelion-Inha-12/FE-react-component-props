import "./Button.css";

const Button = ({ isSelected, onClick, children }) => {
  return (
    <button
      style={{
        backgroundColor: isSelected && "pink",
      }}
      onClick={onClick}
      className="btn"
    >
      {children}
    </button>
  );
};

export default Button;
