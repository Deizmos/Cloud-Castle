import React from 'react';
import styles from './BingoCard.module.scss';

type BingoCardProps = {
    id: number;
    title: string;
    description: string;
    image: string;
    isFlipped: boolean;
    onClick: (id: number) => void;
};

export const BingoCard: React.FC<BingoCardProps> = ({
                                                        id,
                                                        title,
                                                        description,
                                                        image,
                                                        isFlipped,
                                                        onClick,
                                                    }) => {
    return (
        <div
            className={`${styles.bingoCard} ${isFlipped ? styles.bingoCard_flipped : ''}`}
            onClick={() => onClick(id)}
            aria-label={title}
            role="button"
            tabIndex={0}
        >
            <div className={styles.bingoCard__front}>
                <div
                    className={styles.bingoCard__image}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <span className={styles.bingoCard__title}>{title}</span>
                </div>
            </div>
            <div className={styles.bingoCard__back}>
                <p className={styles.bingoCard__description}>{description}</p>
            </div>
        </div>
    );
};
