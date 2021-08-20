import React from 'react';
import styles from './InitialSection.module.css';
import work from '../../images/work.svg';

const InitialSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textContainer}>
                <h1>More than just shorter links</h1>
                <p>Build your brand´s recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <div className={styles.imgContainer}>
                <img src={work} alt='work'/>
            </div>
        </section>
    )
}

export default InitialSection;
