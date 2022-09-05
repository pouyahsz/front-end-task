import React from 'react';
import styles from '../styles/cardStyle.module.scss';
import trophy from '../assets/trophy.svg';
import gamepad from '../assets/gamepad.svg';
import group from '../assets/group.svg';
import coffee from '../assets/coffee.svg';
import Icon from './icon';


const SecondLayer = ({ visibility, info }) => {
    const informations = [
        {
            title: "AWARDS",
            url: trophy,
            amount: info.awards

        },
        {
            title: "MATCHES",
            url: gamepad,
            amount: info.matches

        },
        {
            title: "PALS",
            url: group,
            amount: info.pals

        },
        {
            title: "COFFEE",
            url: coffee,
            amount: info.coffee

        },
    ]

    return (
        <div className={`${styles["second-layer"]} ${!visibility && styles.hidden}`} style={{background:info.color}}>
            <div className={styles.container}>
                <div className={styles["second-Layer-title"]}>
                    <h3>Jane Doe</h3>
                </div>
                <div className={styles.specifications}>
                    <p>Group Name</p>
                    <p>Joined January 2019</p>
                </div>
                <div className={styles.specifications}>
                    <p>Position/Role</p>
                    <p>City, Country</p>
                </div>
                <div className={styles.informations}>
                    {informations.map((element, id) => <Icon key={id} title={element.title} url={element.url} amount={element.amount} />)}
                </div>
            </div>
        </div>
    )
}

export default SecondLayer;