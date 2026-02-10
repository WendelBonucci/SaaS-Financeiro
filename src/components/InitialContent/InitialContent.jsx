"use client"
import React from 'react'
import styles from './InitialContent.module.css'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'

export default function InitialContent() {
    const v_text = [
        {
            title: 'Korivo - Gestão Empresarial',
            text: 'Sistema moderno e automatizado de gerenciamento empresarial, com dashboards personalizados em tempo real para uma visão estratégica e eficiente do seu negócio.',
            link: 'Experimente grátis por 1 mês'
        }
    ]

    const slide = [
        {
            id: 1,
            image: '/slide-001.png',
            alt: 'image-01'
        },
        {
            id: 2,
            image: '/slide-002.png',
            alt: 'image-02'
        },

    ]

    return (
        <section className={styles.container_Carousel}>
            <section className={styles.description_Fixed}>
                {v_text.map((text, index) => (
                    <div key={index}>
                        <h1 className={styles.title_Description}>{text.title}</h1>
                        <p className={styles.text_Description}>{text.text}</p>
                        <Link href='' className={styles.link_Btn}>{text.link}</Link>
                    </div>
                ))}
            </section>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className={styles.carousel}
            >
                {slide.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slider_Carousel}>
                        <Image
                            width={300}
                            height={300}
                            src={item.image}
                            alt={item.alt}
                            priority={item.id === 1}
                            className={styles.image_Carousel}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
