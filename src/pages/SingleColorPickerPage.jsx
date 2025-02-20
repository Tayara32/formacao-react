import React from 'react'
import { useState } from 'react'
import SingleColorPicker from '../componentes/SingleColorPicker/SingleColorPicker'
import ColorPicker from '../componentes/SingleColorPicker/ColorPicker'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'


function SingleColorPickerPage() {

    const [rValue, setRValue] = useState(0)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)

  return (
    <div>

    <h2>SingleColorPicker</h2>

    <SingleColorPicker
      color="r"
      value={rValue}
      onChange={(e) => { setRValue(e.target.value) }}
    />

    <SingleColorPicker
      color="g"
      value={gValue}
      onChange={(e) => { setGValue(e.target.value) }}
    />

    <SingleColorPicker
      color="b"
      value={bValue}
      onChange={(e) => { setBValue(e.target.value) }}
    />

    <ColorPicker r={rValue} g={gValue} b={bValue} />

    <Link to="/" className="back-button">🔙 Voltar</Link>


  </div>
  )
}

export default SingleColorPickerPage