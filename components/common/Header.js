import styles from '../../styles/Header.module.css'
import Button from './Button'
import Image from 'next/image'
import logo from '../../public/Cristian B..svg'
import { useState, useEffect } from 'react'

export default function Header() {
  const links = [
    {title: 'Home', href: '#home'},
    {title: 'About', href: '#about'},
    {title: 'Career', href: '#career'},
    {title: 'Projects', href: '#projects'},
    {title: 'Testimonials', href: '#testimonials'},
  ]

  const navMapper = ({title, href}) => {
    return (
      <Button type="text" href={href} className={styles.navLink}>{title}</Button>
    )
  }

  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [yOffset]);

  async function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <nav className={styles.container} style={{top: visible ? 0 : '-100px'}}>
      <Image src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.separator} />
      <div className={styles.navContainer}>
        {links.map(navMapper)}
        <Button className={styles.contact}>Contact</Button>
      </div>
    </nav>
  )
}