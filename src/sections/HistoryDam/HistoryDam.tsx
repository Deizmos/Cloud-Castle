import React, { useState, useEffect } from 'react';
import styles from './HistoryDam.module.scss';
import { Illustration } from "../../components/Illustration";

export const HistoryDam = () => {
    const [imageSize, setImageSize] = useState({
        width: '694',
        height: '618'
    });

    useEffect(() => {
        const calculateSize = () => {
            const screenWidth = window.innerWidth;
            let width, height;

            if (screenWidth < 760) {
                width = 348;
                height = 300;
            } else if (screenWidth >= 768 && screenWidth < 1440) {
                width = Math.min(694, Math.floor(screenWidth * 0.35));
                height = Math.floor(width * (618 / 694));
            } else {
                width = 694;
                height = 618;
            }

            setImageSize({
                width: width.toString(),
                height: height.toString()
            });
        };

        calculateSize();

        let timeoutId: number;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(calculateSize, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section
            className={styles.historyDam}
            aria-labelledby="history-dam-heading"
            itemScope
            itemType="https://schema.org/HistoricalSite"
        >
            <div className={styles.historyDam__container}>
                <article className={styles.historyDam__content} itemProp="description">
                    <div>
                        <h2 id="history-dam-heading" className={styles.historyDam__title} itemProp="name">
                            Плотинка лесная отборная со вкусом подземного ручейка
                        </h2>
                    </div>

                    <div className={styles.historyDam__text}>
                        <p itemProp="abstract">
                            Заводская плотина в Екатеринбурге была построена в 1723 году из уральской лиственницы,
                            которая не гниет в воде, а со временем лишь каменеет и становится крепче.
                            В создании плотинки принял деятельное участие российский военный инженер
                            <span itemProp="creator" itemScope itemType="https://schema.org/Person">
                                <span itemProp="name"> В. И. де Геннин</span>.
                            </span>
                        </p>

                        <p itemProp="temporal">
                            <time dateTime="1723">1723 год</time>: С этого места началось всё строительство города.
                            Одновременно стали возводить крепость, защищающую будущий завод от набегов башкир,
                            на чьих землях он и строился.
                        </p>
                    </div>
                </article>

                <figure className={styles.historyDam__illustration}>
                    <Illustration
                        width={imageSize.width}
                        height={imageSize.height}
                        aria-hidden="true"
                    />
                </figure>
            </div>

            <meta itemProp="dateCreated" content="1723" />
        </section>
    );
};
