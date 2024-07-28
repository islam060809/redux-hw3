import React, { useState } from 'react'
import Hot from './components/Hot'
import Iced from './components/Iced'

const App = () => {
  const [coffe, setCoffe] = useState(true)
  function ShowHotCoffe() {
    setCoffe(true)
  }
  function ShowIcedCoffe() {
    setCoffe(false)
  }
  return (
    <div>
      <div className="btns">
        <button onClick={ShowHotCoffe}>Hot</button>
        <button onClick={ShowIcedCoffe}>Ice</button>
      </div>
      {coffe || <Iced />}
      {!coffe || <Hot />}
    </div>
  )
}

export default App