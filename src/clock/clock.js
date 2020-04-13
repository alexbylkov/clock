import React, {useState, useEffect} from 'react'
import './clock.css'
import sec from '../assets/sec.svg'
import hour from '../assets/hour.svg'
import min from '../assets/min.svg'

const Clock = ({timeZone}) => {

    const [countClock, setCounClock] = useState({})
    
    useEffect(() => {
      const id = setInterval(() => {
        let date = new Date()
        setCounClock({
            hour: 30 * ((date.getHours() + timeZone) + (1/60) * date.getMinutes()),
            min: 6 * (date.getMinutes() + (1/60) * date.getSeconds()), 
            sec: 6 * date.getSeconds()
        })
      }, 1000)
      return () => clearInterval(id)
    }, [timeZone])

    return (
        <div className='clock'>
            <img src={hour} alt='hour' style={{transform: `rotate(${countClock.hour}deg)`}}/>
            <img src={min} alt='min' style={{transform: `rotate(${countClock.min}deg)`}}/>
            <img src={sec} alt='sec' style={{transform: `rotate(${countClock.sec}deg)`}}/>
        </div>
    )
}
export default Clock