import React, { useState } from 'react'
import { cities } from '../data'

export default function Autocomplete() {
    const [city, setCity] = useState([])
    const [cityName, setCityName] = useState("")
    const onChangeText = (target) => {
        const { name, value } = target
        if (value === "") setCity([])
        const suggestions = cities.filter((city) => city.toLowerCase().includes(value.toLowerCase()))
        // const suggestions= array.filter((item)=>item.toLowerCase().includes(value.toLowerCase()))4
        // A=1
        // B='1'
        // A==B A===B
        setCity(suggestions)
        setCityName(value)
    }
    return (
        <div>
            <input
                onChange={({ target }) => onChangeText(target)}
                placeholder="Search a city"
                value={cityName}
                name="city"
            />
            {
                city.map((item, index) => (
                    <div
                        style={{ visibility: city.length > 0 ? 'visible' : 'hidden' }}
                        key={index}
                        onClick={() => setCityName(item)}
                    >
                        {item}
                    </div>
                ))
            }
        </div>
    )
}
