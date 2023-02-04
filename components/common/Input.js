import { forwardRef } from "react";
import styles from "../../styles/Input.module.css";

const Input = forwardRef(({ value, onClick, onChange }, ref) => {
  return (
    <input
      type="text"
      className={styles.textInput}
      ref={ref}
      value={value}
      onClick={onClick}
      onChange={onChange}
    />
  );
});

export default Input