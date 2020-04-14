import React from 'react'
import ItemTime from '../itemTime/itemTime'
import s from './app.module.sass'

const App = () => (
  <div className={s.app}>
    <ItemTime />
    <ItemTime />
  </div>
)


export default App
