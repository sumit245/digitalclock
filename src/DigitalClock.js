import React, { useState, useEffect } from 'react'
import moment from "moment"

export default function DigitalClock() {
    const [timeNow, setTimeNow] = useState(0)

    const count = () => {
        const time = moment().format('HH:mm:ss')
        setTimeNow(time)
    }
    useEffect(() => {
      count()
    }, [timeNow])
    

    return (
        <div>
            <span>{timeNow}</span>
        </div>
    )
}
