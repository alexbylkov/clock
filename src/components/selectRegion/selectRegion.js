import React from 'react'
import {Select} from 'antd'
const {Option} = Select

const SelectRegion = ({handleRegion}) => (
    <Select 
    defaultValue="Красноярск" 
    style={{width: 200}} 
    onChange={e => handleRegion(e)} >
        <Option value="10">Владивосток</Option>
        <Option value="2">Калининград</Option>
        <Option value="7">Красноярск</Option>
        <Option value="3">Москва</Option>
    </Select>
)

export default SelectRegion