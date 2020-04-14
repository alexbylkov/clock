import React from 'react'
import SelectRegion from '../../components/selectRegion/selectRegion'
import {regionZone} from '../../redux/action'
import {connect} from 'react-redux'

const Region = ({regionZone, regionId}) => {

    const setRegion = (value) => {
        const timeRegion = Number(value)
        regionZone({timeRegion, regionId})
    }

    return (
        <SelectRegion handleRegion={setRegion}/>
    )
}

export default connect(null, {regionZone})(Region)