import React from 'react'

export default function DayCard(props) {
    console.log(props.data.city)

    return (
        <div>
            {props.data.city && <h1>{props.data.city.name}</h1>}
        </div>
    )
}
