import styles from '../../styles/About.module.css'
import clsx from 'clsx'

export default function Card(props) {
  const {children, height='70vh', width='100%'} = props

  return (
    <div className={clsx(styles.card)} style={{height, width}} {...props}>
      {children}
    </div>
  )
}