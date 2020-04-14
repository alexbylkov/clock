import React from 'react'
import LogicClock from '../../containers/logicClock/logicClock'
import Region from '../../containers/region/region'
import s from './itemTime.module.sass'
import id from 'short-id'

const ItemTime = () => {
    const clockId = id.generate()
    return (
    <div className={s.item} >
        <LogicClock clockId={clockId} />
        <Region regionId={clockId} />
    </div>
)}

export default ItemTime