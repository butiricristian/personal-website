import styles from '../../styles/List.module.css'

export default function List(props) {
  const {items} = props

  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}