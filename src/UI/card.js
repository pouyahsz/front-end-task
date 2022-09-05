import React, { useState } from 'react';
import CardFrame from './cardFrame';
import styles from '../styles/cardStyle.module.scss';

import user from '../assets/user.svg'
import FirstLayer from './firstLayer';
import SecondLayer from './secondLayer';
const Card = ({ data }) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const secondLayerInfo = {
        title:data.title,
        awards: data.awards,
        matches: data.matches,
        pals: data.pals,
        coffee: data.coffee,
        color:data.color
    }
    const visibilityHandler = () => {
        setShowMoreInfo((prev) => !prev)
    }
    return (
        <CardFrame onEvent={visibilityHandler}>
            <div className={styles.user} style={{background:data.color}}>
                <div className={styles.badg}>
                    <p>LEVEL {data.level}</p>
                </div>
                <div className={styles.prfile}>
                    <img src={user} alt="user" />
                </div>
                <div className={styles.badg}>
                    <p>{data.points} POINTS</p>
                </div>
            </div>
            <div className={styles.details}>
                <FirstLayer name={data.title} description={data.description} />
                <SecondLayer visibility={showMoreInfo} info={secondLayerInfo} />
            </div>
        </CardFrame>
    )
}

export default Card;