import styles from '../../styles/Overlay.module.css'

export default function Overlay({showOverlay, setShowOverlay, onClick, zIndex=100}) {
  const handleClick = () => {
    setShowOverlay(false)
    onClick && onClick()
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleClick}
      style={{
        backgroundColor: showOverlay ? "rgba(0, 0, 0, 0.8)" : "transparent",
        zIndex: zIndex,
        visibility: showOverlay ? "visible" : "hidden",
      }}
    ></div>
  )
}