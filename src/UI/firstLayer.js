import React from 'react';
import styles from '../styles/cardStyle.module.scss';

const FirstLayer = ({name, description}) => {

    return (
        <div className={styles["first-layer"]}>
            <div className={styles["first-Layer-title"]}>
                <h3>{name}</h3>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
            <div className={styles["more-info"]}>
                <p>Mouse over the card for more info</p>
            </div>
        </div>
    )
}

export default FirstLayer;