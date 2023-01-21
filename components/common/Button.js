import styles from "../../styles/Button.module.css";
import clsx from "clsx";

export default function Button(props) {
  const { type="filled" } = props;
  if (type === "filled") return <ButtonFilled {...props} />;
  if (type === "text") return <ButtonText {...props} />;
}

function ButtonFilled(props) {
  const { href = "#", style, color = "primary", size = "md", children, onClick, className } = props;

  return (
    <button
      href={href}
      style={style}
      className={clsx(styles.btn, styles[color], styles[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ButtonText(props) {
  const {
    href = "javascript:void(0)",
    style,
    color = "primary",
    size = "md",
    children,
    onClick,
    active,
    className,
    underline
  } = props;

  const handleClick = (e) => {
    onClick && onClick()
  }

  return (
    <a
      href={href}
      style={style}
      className={clsx(styles.btnText, styles[color], styles[size], className, {
        [styles.active]: active,
        [styles.underline]: underline,
      })}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
