import React, { useState } from 'react';
import styles from './BingoSection.module.scss';
import {BingoCard} from "../../components/BingoCard";
import Physics from '../../assets/images/physics.png';
import Literature from '../../assets/images/literature.png';
import Chemistry from '../../assets/images/chemistry.png';
import Math from '../../assets/images/math.png';
import Art from '../../assets/images/art.png';
import History from '../../assets/images/history.png';

type BingoCards = {
    id: number;
    title: string;
    description: string;
    image: string;
};

export const BingoSection = () => {
    const [flippedCards, setFlippedCards] = useState<number[]>([]);

    const cards: BingoCards[] = [
        {
            id: 1,
            title: 'Физика',
            description: 'Фи́зика — область естествознания: наука о наиболее общих законах природы, о материи, её структуре, движении и правилах трансформации.',
            image: `${Physics}`
        },
        {
            id: 2,
            title: 'Литература',
            description: 'Литература — в широком смысле слова совокупность любых письменных текстов. Чаще всего под литературу понимают художественную литературу, то есть литературу как вид искусства.',
            image: `${Literature}`
        },
        {
            id: 3,
            title: 'Искусство',
            description: 'Иску́сство — одна из наиболее общих категорий эстетики, искусствознания и художественной практики.',
            image: `${Art}`
        },
        {
            id: 4,
            title: 'Математика',
            description: 'Матема́тика — точная формальная наука, первоначально исследовавшая количественные отношения и пространственные формы.',
            image: `${Math}`
        },
        {
            id: 5,
            title: 'Химия',
            description: 'Хи́мия — одна из важнейших и обширных областей естествознания, наука, изучающая вещества, также их состав и строение, их свойства, зависящие от состава и строения, их превращения, ведущие к изменению состава — химические реакции, а также',
            image: `${Chemistry}`
        },
        {
            id: 6,
            title: 'История',
            description: 'Исто́рия, историческая наука — наука, научная (академическая) дисциплина, предметом изучения которой является человеческое прошлое.',
            image: `${History}`
        }
    ];

    const handleCardClick = (id: number) => {
        if (flippedCards.includes(id)) {
            setFlippedCards(flippedCards.filter(cardId => cardId !== id));
        } else {
            setFlippedCards([...flippedCards, id]);
        }
    };

    return (
        <section id="bingo" className={styles.bingo} aria-labelledby="card-bingo-heading">
            <div className={styles.bingo__container}>
                <h2 id="card-bingo-heading" className={styles.bingo__title}>
                    Открой все карточки и собери свое бинго
                </h2>
                <div className={styles.bingo__cards}>
                    <div className={styles.bingo__row}>
                        {cards.map(card => (
                            <BingoCard
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                image={card.image}
                                isFlipped={flippedCards.includes(card.id)}
                                onClick={handleCardClick}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
