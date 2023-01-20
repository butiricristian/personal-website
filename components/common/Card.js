import styles from '../../styles/Card.module.css'
import clsx from 'clsx'

export default function Card(props) {
  const {children, width='100%', maxWidth='1200px'} = props

  return (
    <div className={clsx(styles.card)} style={{width, maxWidth, ...props.style}}>
      {children}
    </div>
  )
}