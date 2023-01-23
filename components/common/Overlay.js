import styles from '../../styles/Overlay.module.css'
import { useAppContext } from '../context/state'

export default function Overlay() {
  const { showOverlay, setShowOverlay, showDrawer, setShowDrawer } = useAppContext()
  const show = showOverlay || showDrawer

  const handleClick = () => {
    setShowOverlay(false)
    setShowDrawer(false)
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleClick}
      style={{
        backgroundColor: show ? "rgba(0, 0, 0, 0.8)" : "transparent",
        zIndex: show ? 100 : -1,
        display: show ? "block" : "hide",
      }}
    ></div>
  )
}