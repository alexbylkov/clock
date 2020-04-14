import React from 'react'
import sec from '../../assets/sec.svg'
import hour from '../../assets/hour.svg'
import min from '../../assets/min.svg'

const Clock = ({timeText, timeDeg}) => (
    <>
        <div className="clock">
            <img src={hour} alt='hour' style={{transform: `rotate(${timeDeg.hour}deg)`}}/>
            <img src={min} alt='min' style={{transform: `rotate(${timeDeg.min}deg)`}}/>
            <img src={sec} alt='sec' style={{transform: `rotate(${timeDeg.sec}deg)`}}/>
        </div>
        <div className="time">{timeText}</div>
    </>
)

export default Clock