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
    href = "",
    style,
    color = "primary",
    size = "md",
    children,
    onClick,
    active,
    className
  } = props;

  const handleClick = (e) => {
    if (!href) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <a
      href={href}
      style={style}
      className={clsx(styles.btnText, styles[color], styles[size], className, {
        [styles.active]: active,
      })}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
