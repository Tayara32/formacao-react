import React from 'react'

function ColorPicker(props) {
    const { r, g, b } = props
    const backgroundColor = `rgb(${r}, ${g}, ${b})`

  return (
    <div className='color-picker'>
            <div className='color-square' style={{ backgroundColor }}></div>
        </div>
  )
}

export default ColorPicker