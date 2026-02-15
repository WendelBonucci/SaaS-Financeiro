"use client"
import { useEffect } from 'react'
import styles from './Reviews.module.css'
import { FaStar } from "react-icons/fa"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Reviews() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    const reviews = [
        {
            id: 1,
            image: '/logtayo.jpeg',
            title: 'ByTayo - Tavóra',
            subtitle: 'Loja de Roupas Femininas',
            text: 'Adquiri o pacote Basic para a minha loja e, desde então, tenho muito mais controle do negócio, principalmente das vendas e do estoque. Como minha loja online realiza vendas todos os dias, é essencial acompanhar constantemente a análise de estoque e desempenho das vendas, e o sistema tem facilitado muito esse processo.'
        },
        {
            id: 2,
            image: '/chelogo.jpeg',
            title: 'Cheiva Cake´s - Confeitaria',
            subtitle: 'Confeitaria e Doces',
            text: 'Utilizo o Korivo para gerenciar toda a minha movimentação financeira e acompanhar dashboards e relatórios detalhados sobre receitas, despesas e investimentos, com análises quinzenais. Também consigo controlar minhas contas a pagar e a receber, o que facilita muito a organização e evita esquecimentos.'
        },
        {
            id: 3,
            image: '/rlfutlog.png',
            title: 'LR FutStore',
            subtitle: 'Loja On-line Esportiva',
            text: 'Adquiri o pacote Basic para a minha loja e, desde então, tenho muito mais controle do negócio, principalmente das vendas e do estoque. Como minha loja online realiza vendas todos os dias, é essencial acompanhar constantemente a análise de estoque e desempenho das vendas, e o sistema tem facilitado muito esse processo.'
        },
    ]

    return (
        <section className={styles.ReviewsContainer}>
            <div className={styles.boxTitle}>
                <div className={styles.boxStar} role="img" aria-label="5 estrelas">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <h2 className={styles.titleReviews}>
                    O <span className={styles.colorAlt}>Korivo</span> ajuda milhares de empreendedores a simplificar e organizar seus negócios de forma prática e eficiente.
                </h2>
            </div>

            <div className={styles.containerCards}>
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className={styles.Cards}
                    >
                        <div className={styles.topCard}>
                            <div className={styles.logo}>
                                <img
                                    src={review.image}
                                    alt={`Logo ${review.title}`}
                                    loading="lazy"
                                />
                            </div>

                            <div className={styles.textsCards}>
                                <h3>{review.title}</h3>
                                <p className={styles.subtitle}>{review.subtitle}</p>
                            </div>
                        </div>
                        <div className={styles.contentBottomCard}>
                            <p>{review.text}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}