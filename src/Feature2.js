import React, { useState } from 'react'

export default function Feature2() {
    const [radius, setRadius] = useState(100)

    const changeRadius = () => {
        setRadius(radius + 40)
    }
    const decreaseRadius = () => {
        setRadius(radius - 40)
    }
    return (
        <div style={{
            height: radius,
            width: radius,
            borderRadius: radius / 2,
            borderWidth: 10,
            borderColor: 'black',
            borderStyle: 'solid',
            display: 'block',
            backgroundColor: 'gray'
        }}>
            <button type="button" onClick={changeRadius}>Increase</button>
            <button type="button" onClick={decreaseRadius}>Decrease</button>
        </div>
    )
}
