import React from 'react';
import styles from '../styles/cardStyle.module.scss';

const Icon = ({title, url, amount}) => {
    return (
        <div className={styles.item}>
            <h5>{title}</h5>
            <img src={url} alt={title} />
            <span>{amount}</span>
        </div>
    )
}

export default Icon;