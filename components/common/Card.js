import styles from '../../styles/Card.module.css'
import clsx from 'clsx'

export default function Card(props) {
  const {children, height='70vh', width='100%', maxWidth='1200px'} = props

  return (
    <div className={clsx(styles.card)} style={{height, width, maxWidth, ...props.style}}>
      {children}
    </div>
  )
}