"use client"
import { useEffect } from 'react'
import styles from './Company.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos';
import 'aos/dist/aos.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Company() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
        })
    })

    const text = [
        {
            title: 'A desorganização está atrapalhando os resultados da sua empresa?',
            description: 'Não se preocupe mais! Com o Gestory, você tem controle total do estoque da sua empresa, cadastro de clientes, relatórios e dashboards interativos para acompanhar suas finanças, controlar receitas e despesas, além de gerenciar contas a pagar e a receber.',
            link: 'Dê o próximo passo!'
        }
    ]

    const slide = [
        {
            id: 1,
            image: '/slide-001.png',
            alt: 'slide--001'
        },
        {
            id: 2,
            image: '/slide-002.png',
            alt: 'slide--002'
        }
    ]

    return (
        <section className={styles.Company}>
            <div className={styles.CompanyAbout}>
                <div className={styles.contetLeft}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        className=''
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
                </div>
                <div className={styles.contentRight}>
                    {text.map((text, index) => (
                        <div
                            key={index}
                            className={''}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}>
                            <h1 className={styles.titleCompany}>{text.title}</h1>
                            <p className={styles.descriptionCompany}>{text.description}</p>
                            <Link href=''>{text.link}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
