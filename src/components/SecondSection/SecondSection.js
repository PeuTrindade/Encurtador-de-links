import React from 'react';
import styles from './SecondSection.module.css';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';

const SecondSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.textArea}>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className={styles.boxContainer}>
                <div className={styles.box}>
                    <img src={icon1}/>
                    <h4>Brand Recognition</h4>
                    <p>Boost your brand recognition with each click.Generic links don´t mean a thing.Branded links help instil confidence in your content.</p>
                </div>
                <div className={styles.box}>
                    <img src={icon2}/>
                    <h4>Detailed Records</h4>
                    <p>Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className={styles.box}>
                    <img src={icon3}/>
                    <h4>Fully Customizable</h4>
                    <p>Improve brand awareness and content discoverability through customizable links,supercharging audience engagement.</p>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;
