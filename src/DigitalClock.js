import React, { useState, useEffect } from 'react'

export default function DigitalClock() {
    const [timeNow, setTimeNow] = useState(0)
    
    return (
        <div>
            <span>{timeNow}</span>
        </div>
    )
}
