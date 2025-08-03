import React, {useState} from 'react';
import styles from './FirstRoute.module.scss';
import {BasicItems} from "../../components/BasicItems";
import {Electives} from "../../components/Electives";
import {EveningProgram} from "../../components/EveningProgram";
import {useWindowSize} from "../../Hooks/useWindowSize";

export const FirstRoute = () => {
    const [activeCategory, setActiveCategory] = useState<'main' | 'elective' | 'evening'>('main');
    const { width } = useWindowSize();
    const isMobile = width <= 768;

    const ImageWidth = isMobile ? '192' : '300';
    const ImageHeight = isMobile ? '127' : '200';
    const cardsData = {
        main: [
            { id: 1, title: 'Физика', description: 'Шокирующая правда о преломлении света' },
            { id: 2, title: 'Литература', description: 'О чем молчат картины: великие художники' },
            { id: 3, title: 'Искусство', description: 'Пушкин наше всё!' },
            { id: 4, title: 'Математика', description: 'Шокирующая правда о преломлении света' },
            { id: 5, title: 'Химия', description: 'О чем молчат картины: великие художники' },
            { id: 6, title: 'История', description: 'Пушкин наше всё!' },
        ],
        elective: [
            { id: 7, title: 'Алгебра', description: 'Раздел математики как обобщение и расширение арифметики' },
            { id: 8, title: 'Ботаника', description: 'Наука о растениях' },
            { id: 9, title: 'Астрономия', description: 'Наука о Вселенной, изучающая небесные тела и системы' },
            { id: 10, title: 'Геометрия', description: 'Раздел математики, изучающий пространственные структуры' },
            { id: 11, title: 'Генетика', description: 'Раздел биологии, занимающийся изучением генов' },
            { id: 12, title: 'Электроника', description: 'Наука о взаимодействии электронов с электромагнитными полями' },
        ],
        evening: [
            { id: 13, title: 'Бойцовский клуб', description: 'Американский психологический триллер по мотивам романа Паланика' },
            { id: 14, title: 'Меланхолия', description: 'Драматический фильм с элементами фантастики Ларса фон Триера' },
            { id: 15, title: 'Короли Догтауна', description: 'Биографический драматический фильм Кэтрин Хардвик' },
            { id: 16, title: 'Матрица', description: 'Американская научно-фантастическая медиафраншиза в жанре киберпанк' },
            { id: 17, title: 'Эффект бабочки', description: 'Психологический триллер Эрика Бресса' },
            { id: 18, title: 'Дурное воспитание', description: 'Криминально-драматический фильм Педро Альмодовара' },
        ]
    };
    return (
        <section id='route' className={styles.firstRoute} aria-labelledby="first-route-heading">
            <div className={styles.firstRoute__container}>
                <div className={styles.firstRoute__header}>
                    <h2 id="first-route-heading" className={styles.firstRoute__title}>
                        В первый день вас ждет интересный маршрут
                    </h2>
                    <p className={styles.firstRoute__description}>
                        Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург, так прилежащие к нему районы Свердловской области.
                    </p>
                </div>
                <div className={styles.firstRoute__categories}>
                    <div
                        className={`${styles.firstRoute__category} ${activeCategory === 'main' ? styles.firstRoute__category_active : ''}`}
                        onClick={() => setActiveCategory('main')}
                    >
                        <figure className={styles.firstRoute__image} aria-labelledby="image-caption">
                            <BasicItems width={ImageWidth} height={ImageHeight} />
                        </figure>
                        <p className={styles.firstRoute__categoryTitle}>Основные предметы</p>
                    </div>
                    <div
                        className={`${styles.firstRoute__category} ${activeCategory === 'elective' ? styles.firstRoute__category_active : ''}`}
                        onClick={() => setActiveCategory('elective')}
                    >
                        <figure className={styles.firstRoute__image} aria-labelledby="image-caption">
                            <Electives width={ImageWidth} height={ImageHeight}/>
                        </figure>
                        <p className={styles.firstRoute__categoryTitle}>Факультативы</p>
                    </div>
                    <div
                        className={`${styles.firstRoute__category} ${activeCategory === 'evening' ? styles.firstRoute__category_active : ''}`}
                        onClick={() => setActiveCategory('evening')}
                    >
                        <figure className={styles.firstRoute__image} aria-labelledby="image-caption">
                            <EveningProgram width={ImageWidth} height={ImageHeight}/>
                        </figure>
                        <p className={styles.firstRoute__categoryTitle}>Вечерняя программа</p>
                    </div>
                </div>

                <div className={styles.firstRoute__grid}>
                    {cardsData[activeCategory].map((card) => (
                        <div key={card.id} className={styles.firstRoute__card}>
                            <h3 className={styles.firstRoute__cardTitle}>{card.title}</h3>
                            <p className={styles.firstRoute__cardDescription}>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
