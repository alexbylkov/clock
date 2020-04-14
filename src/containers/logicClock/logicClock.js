import React, {useState, useEffect} from 'react'
import Clock from '../../components/clock/clock'
import {connect} from 'react-redux'

const LogicClock = ({clockId, itemClock}) => {
	const {timeRegion, regionId} = itemClock

    const [nowClock, setCounClock] = useState({})
    const [region, setRegion] = useState(7)

    useEffect(() => {
		if (timeRegion && clockId === regionId) {
			setRegion(timeRegion)
		}
    }, [clockId, timeRegion, regionId])

    useEffect(() => {
      	const idx = setInterval(() => {
			let date = new Date()
			const hourUTC = date.getUTCHours()
			date.setHours(hourUTC + region)
			setCounClock({
				hour: date.getHours(),
				min: date.getMinutes(),
				sec: date.getSeconds(),
				timeText: date.toLocaleTimeString()
			})
      	}, 1000)
      return () => clearInterval(idx)
    }, [region])

    const timeDeg = {
        hour: 30 * (nowClock.hour + (1/60) * nowClock.min),
        min: 6 * (nowClock.min + (1/60) * nowClock.sec), 
        sec: 6 * nowClock.sec
    }
    return <Clock timeText={nowClock.timeText} timeDeg={timeDeg}/>
}

const mapStateToProps = (state) => {
  return {
    itemClock: state.itemClock
  }
}

export default connect(mapStateToProps)(LogicClock)