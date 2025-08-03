import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Logo } from "../../components/Logo/Logo";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export const Header: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 1, title: 'Что ждёт', href: '#history' },
        { id: 2, title: 'Маршрут', href: '#route' },
        { id: 3, title: 'Бинго', href: '#bingo' },
        { id: 4, title: 'FAQs', href: '#FAQs' }
    ];

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        handleScroll(e, href);
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    const handleScroll = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.header_scrolled : ''}`} role="banner">
                <div className={styles.header__container}>
                    <div className={styles.header__logo}>
                        <a href="/public" aria-label="На главную страницу">
                            <Logo width={95} height={27} />
                        </a>
                    </div>

                    {!isMobile && (
                        <nav className={styles.header__nav} aria-label="Основная навигация">
                            <ul className={styles.header__navList} role="list">
                                {navItems.map((item) => (
                                    <li key={item.id} className={styles.header__navItem}>
                                        <a
                                            href={item.href}
                                            className={styles.header__navLink}
                                            aria-current={item.href === '#history' ? 'page' : undefined}
                                            onClick={(e) => handleScroll(e, item.href)}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {isMobile && (
                        <button
                            className={`${styles.header__burger} ${isSidebarOpen ? styles.header__burger_open : ''}`}
                            aria-label="Меню"
                            aria-expanded={isSidebarOpen}
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <span className={styles.header__burgerLine}></span>
                            <span className={styles.header__burgerLine}></span>
                            <span className={styles.header__burgerLine}></span>
                        </button>
                    )}
                </div>
            </header>

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                navItems={navItems}
                handleNavClick={handleNavClick}
            />
        </>
    );
};
