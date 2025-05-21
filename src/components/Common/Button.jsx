import styles from "./styles.module.css";

const Button = ({ onClick, btnText, btnType = "button", btnClass }) => {
  return (
    <button onClick={onClick} type={btnType} className={`${styles.btn} ${btnClass}`}>
      {btnText}
    </button>
  );
};

export default Button;
