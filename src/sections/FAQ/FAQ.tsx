import React, { useState } from 'react';
import styles from './FAQ.module.scss';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems = [
        {
            question: 'Что такое современный поиск?',
            answer: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности'
        },
        {
            question: 'Что такое современный поиск?',
            answer: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности'
        },
        {
            question: 'Что такое современный поиск?',
            answer: 'Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности'
        },
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id='FAQs' className={styles.faq} aria-labelledby="FAQ-heading">
            <div className={styles.faq__container}>
                <h2 id="FAQ-heading" className={styles.faq__title}>
                    Еще вопросы?
                </h2>

                <div className={styles.faq__accordion}>
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.faq__item} ${activeIndex === index ? styles.faq__item_active : ''}`}
                        >
                            <button
                                className={styles.faq__question}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                id={`faq-question-${index}`}
                            >
                                <span className={styles.faq__questionText}>{item.question}</span>
                                <span className={styles.faq__arrow}>
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                                         style={{color: '#c1f23c'}}>
                                        <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </button>

                            <div
                                id={`faq-answer-${index}`}
                                aria-labelledby={`faq-question-${index}`}
                                className={styles.faq__answer}
                                role="region"
                            >
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
