import styles from '../../styles/Button.module.css'
import clsx from 'clsx'

export default function Button(props) {
  const {to="#", style, type='primary', size='md', children} = props
  console.log(type, size)

  return (
    <button href={to} style={style} className={clsx(styles.btn, styles[type], styles[size])}>
      {children}
    </button>
  )
}