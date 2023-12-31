import "../UI/Button.css";

const Button = (props) => {
  return (
    <button
      className="btn btn-primary"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
