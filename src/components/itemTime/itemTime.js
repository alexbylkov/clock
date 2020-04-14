import React from 'react'
import LogicClock from '../../containers/logicClock'
import LogicRegion from '../../containers/logicRegion'
import id from 'short-id'

const ItemTime = () => {
    const clockId = id.generate()
    return (
    <div className="item" >
        <LogicClock clockId={clockId} />
        <LogicRegion regionId={clockId} />
    </div>
)}

export default ItemTime