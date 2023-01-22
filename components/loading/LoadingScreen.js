import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from '../../styles/LoadingScreen.module.css';
import Signature from './Signature';

export default function LoadingScreen() {
  const [active, setActive] = useState(false);
  const [hideLoading, setHideLoading] = useState(false)

  useEffect(() => {
      setActive(true);

      const t = setTimeout(() => {
        setHideLoading(true)
      }, 3000)

      return () => {
        clearTimeout(t)
      }
  }, [])

  return (
    <div className={clsx(styles.container, {[styles.active]: hideLoading})}>
      <Signature className={clsx({active: active})}/>
    </div>
  )
}