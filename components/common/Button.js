import styles from "../../styles/Button.module.css";
import clsx from "clsx";

export default function Button(props) {
  const { type="filled" } = props;
  if (type === "filled") return <ButtonFilled {...props} />;
  if (type === "text") return <ButtonText {...props} />;
}

function ButtonFilled(props) {
  const { to = "#", style, color = "primary", size = "md", children, onClick } = props;

  return (
    <button
      href={to}
      style={style}
      className={clsx(styles.btn, styles[color], styles[size])}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ButtonText(props) {
  const {
    to = "#",
    style,
    color = "primary",
    size = "md",
    children,
    onClick,
    active,
  } = props;

  return (
    <button
      href={to}
      style={style}
      className={clsx(styles.btnText, styles[color], styles[size], {
        [styles.active]: active,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
