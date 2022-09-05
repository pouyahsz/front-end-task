import React from 'react';
import styles from '../styles/cardStyle.module.scss';



const CardFrame = ({onEvent,children}) => {
    return (
        <div className={styles['card-frame']} onMouseEnter={onEvent} onMouseLeave={onEvent}>
            {children}
        </div>
    )
}

export default CardFrame;