import React from 'react'
import styles from './Logo.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <section className={styles.container_Logo}>
      <Link href='/'>
        <Image
          width={200}
          height={100}
          priority
          alt='korivo'
          className={styles.ImageLogo}
          src='/KRV.png'
        />
      </Link>
    </section>
  )
}
