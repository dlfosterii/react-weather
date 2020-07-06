import React from 'react';
import styles from './DayCard.module.css';

export default function DayCard(props) {
    console.log(props)
    return (

        <div className={styles.card}>
            <div className={styles.day}>{new Date((props.forecast.dt + props.city.timezone) * 1000).toLocaleDateString(undefined, { weekday: 'long' })}</div>
            <div className={styles.time}>{new Date((props.forecast.dt + props.city.timezone) * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            <div>
                <img className={styles.image} src={`http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`} />
                <div className={styles.desc}>{props.forecast.weather[0].description}</div>
            </div>
            <div className={styles.temp}>{Math.round(props.forecast.main.temp)} F</div>
        </div>

    )
}
