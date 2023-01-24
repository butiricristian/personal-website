import styles from '../../styles/CloseButton.module.css'

export default function CloseButton({ onClick }) {
  return (
    <div className={styles.closeButton} onClick={onClick}>
      <svg width="24" height="24" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2.82843" y1="3" x2="46.669" y2="46.8406" stroke="#333333" stroke-width="6" stroke-linecap="round"/>
        <line x1="47" y1="2.82843" x2="3.15938" y2="46.669" stroke="#333333" stroke-width="6" stroke-linecap="round"/>
      </svg>
    </div>
  )
}