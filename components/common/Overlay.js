import styles from '../../styles/Overlay.module.css'

export default function Overlay({show, setShow}) {
  return (
    <div
      className={styles.overlay}
      onClick={() => setShow(false)}
      style={{
        backgroundColor: show ? "rgba(0, 0, 0, 0.8)" : "transparent",
        zIndex: show ? 100 : -1,
        display: show ? "block" : "hide",
      }}
    ></div>
  )
}