import React from 'react';
import styles from './DayCard.module.css';

export default function DayCard(props) {
    console.log(props.data.city)
    // const { icon } = props.data.list[0].weather[0]

    return (
        <div>
            {props.data.city && <h1>{props.data.city.name}</h1>}
            <div className={styles.card}>
                {props.data.list && <div className={styles.day}>{new Date((props.data.list[0].dt + props.data.city.timezone) * 1000).toLocaleDateString(undefined, { weekday: 'long' })}</div>}
                {props.data.list && <div className={styles.time}>{new Date((props.data.list[0].dt + props.data.city.timezone) * 1000).toLocaleTimeString('en-US')}</div>}
                {props.data.list && <img className={styles.image} src={`http://openweathermap.org/img/wn/${props.data.list[0].weather[0].icon}@2x.png`} />}
                <div className={styles.temps}>
                    {props.data.list && <div className={styles.temp}>{props.data.list[0].main.temp}</div>}

                </div>
            </div>
        </div>
    )
}
