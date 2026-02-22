"use client"
import React from 'react'
import styles from './Values.module.css'
import Link from 'next/link'
import Cards from './components/cards-value/Cards'

export default function Values() {
    return (
        <main className={styles.Values}>
            <section className={styles.divContentValues}>
                
                <Cards />
            </section>
        </main>
    )
}
