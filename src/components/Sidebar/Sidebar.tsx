import React from 'react';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: {
        id: number;
        title: string;
        href: string;
    }[];
    handleNavClick: (e: React.MouseEvent, href: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
                                                    isOpen,
                                                    onClose,
                                                    navItems,
                                                    handleNavClick
                                                }) => {
    return (
        <>
            <div
                className={`${styles.sidebar} ${isOpen ? styles.sidebar_open : ''}`}
                aria-hidden={!isOpen}
            >
                <div className={styles.sidebar__content}>
                    <nav className={styles.sidebar__nav} aria-label="Мобильная навигация">
                        <ul className={styles.sidebar__navList}>
                            {navItems.map((item) => (
                                <li key={item.id} className={styles.sidebar__navItem}>
                                    <a
                                        href={item.href}
                                        className={styles.sidebar__navLink}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div
                className={`${styles.sidebar__overlay} ${isOpen ? styles.sidebar__overlay_open : ''}`}
                onClick={onClose}
                aria-hidden={!isOpen}
            />
        </>
    );
};
