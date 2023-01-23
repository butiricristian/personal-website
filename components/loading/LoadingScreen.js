import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "../../styles/LoadingScreen.module.css";
import { useAppContext } from "../context/state";
import Signature from "./Signature";

export default function LoadingScreen() {
  const [active, setActive] = useState(false);
  const { hideLoading, setHideLoading } = useAppContext();

  useEffect(() => {
    setActive(true);

    const t = setTimeout(() => {
      setHideLoading(true);
    }, 3000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  function dismissScreen() {
    setHideLoading(true);
  }

  return (
    <div
      className={clsx(styles.container, { [styles.active]: hideLoading })}
      onClick={dismissScreen}
    >
      <Signature className={clsx({ active: active })} />
    </div>
  );
}
