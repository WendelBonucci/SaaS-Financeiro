"use client"
import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './SideBar.module.css';
import Link from 'next/link';
import { Fix } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SideBar() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  })

  const [isOpen, setIsOpen] = useState();
  const sideBarRef = useRef(null);
  const ButtonRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        isOpen &&
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target) &&
        ButtonRef.current &&
        !ButtonRef.current.contains(e.target)
      ) {
        closeMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutSide)
    return () => document.removeEventListener("mousedown", handleClickOutSide)
  }, [isOpen, setIsOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, []);

  const dt_links = [
    { label: 'Serviço', href: '' },
    { label: 'Soluções', href: '' },
    { label: 'Base', href: '' },
    { label: 'Valores', href: '' },
    { label: 'Contato', href: '' },
  ]

  return (
    <section className={styles.sideBar}>
      <button
        className={`${styles.Menu} ${isOpen ? styles.Active : ''}`}
        ref={ButtonRef}
        onClick={toggleMenu}
        aria-label='Abrir Menu'
      >
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
      </button>

      <div
        className={`${styles.Overlay} ${isOpen ? styles.overlayActive : ''}`}
        onClick={closeMenu}
        aria-hidden='true'
      >
        <aside
          className={`${styles.containerSideBar} ${isOpen ? styles.openBox : ''}`}
          ref={sideBarRef}
          aria-label='Menu Lateral'
        >
          <div className={styles.containerNav}>
            <nav className={styles.Navigation}>
              {dt_links.map((link, index) => {
                <Link
                  key={index}
                  className={styles.navLink}
                  href={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              })}
            </nav>
          </div>
        </aside>
      </div>
    </section>
  )
}
