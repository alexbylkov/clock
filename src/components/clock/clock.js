import React from 'react'
import s from './clock.module.sass'
import sec from '../../assets/sec.svg'
import hour from '../../assets/hour.svg'
import min from '../../assets/min.svg'

const Clock = ({timeText, timeDeg}) => (
    <>
        <div className={s.clock}>
            <img src={hour} alt='hour' style={{transform: `rotate(${timeDeg.hour}deg)`}}/>
            <img src={min} alt='min' style={{transform: `rotate(${timeDeg.min}deg)`}}/>
            <img src={sec} alt='sec' style={{transform: `rotate(${timeDeg.sec}deg)`}}/>
        </div>
        <div className={s.time}>{timeText}</div>
    </>
)

export default Clock