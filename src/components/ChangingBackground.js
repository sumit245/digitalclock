import React, { useState, useEffect } from 'react'

const rainbow = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

export default function Feature1() {
    const [color, setColor] = useState('violet')
    const [index, setIndex] = useState(0)

    const timeCount = () => {
        setTimeout(() => changeColor(), 1000)
    }
    useEffect(() => {
        timeCount();
        //first part
        // function to describe the render either it may be data fetch, data submit to the server,
        // reload based on time etc
        // return () => {
        //     clearInterval(timeCount)
        //     // second part
        //     //cleanup
        // }
    }, [
        index
        //third part dependency
        //how the render will work
    ])

    //const [returnValue,setterFunction]=useState(initialValue)
    // const setColor=(color)=>{
    // return color
    // }
    // b=setColor('orange') console.log(b)
    // const [b,setColor]=useState('violet')

    const changeColor = () => {
        if (index < 6) {
            setIndex(index + 1)
            setColor(rainbow[index])
        } else {
            setIndex(0)
            setColor(rainbow[index])
        }
    }
    return (
        <div style={{ height: 400, width: 400, display: 'block', backgroundColor: color }}>
            <button type="button" onClick={changeColor}>Change color</button>
        </div>
    )
}

//useffect functionality=
//1. when data is updated component is rerendered
//2. when component is interacted then data can be updated

//    useEffect(() => {
        //timeCount();
        //first part
        // function to describe the render either it may be data fetch, data submit to the server,
        // reload based on time etc
        // return () => {
        //     clearInterval(timeCount)
        //     // second part
        //     //cleanup
        // }
 //   }, [
    //index
    //third part dependency
    //how the render will work
//])