import React from 'react';
import styles from './AfterDam.module.scss';
import forestImage from '../../assets/images/forest.png';

export const AfterDam = () => {
    return (
        <section
            id='history'
            className={styles.afterDam}
            aria-labelledby="after-dam-heading"
            itemScope
            itemType="https://schema.org/CreativeWork"
        >
            <div className={styles.afterDam__container}>
                <header className={styles.afterDam__header}>
                    <h2 id="after-dam-heading" className={styles.afterDam__title} itemProp="headline">
                        Что ждёт за плотинкой
                    </h2>
                </header>

                <figure className={styles.afterDam__imageWrapper} aria-labelledby="image-caption">
                    <img
                        src={forestImage}
                        alt="Вид на межгалактические порты за плотиной"
                        className={styles.afterDam__image}
                        loading="lazy"
                        itemProp="image"
                    />
                </figure>

                <div className={styles.afterDam__content} itemProp="text">
                    <p className={styles.afterDam__text}>
                        Межгалактические порты и бесконечные просторы вселенной
                    </p>
                </div>
            </div>
        </section>
    );
};
