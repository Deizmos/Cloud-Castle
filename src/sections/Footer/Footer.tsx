import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer} itemScope itemType="https://schema.org/WPFooter">
            <p className={styles.footer__text}>© 2024 CLOUD CASTLE</p>
        </footer>
    );
};
