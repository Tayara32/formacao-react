import React from 'react'

function SingleColorPicker(props) {

    const { color, value, onChange } = props

    let colors = {
        r: 0,
        g: 0,
        b: 0
    }

 
  colors[color] = value

  
  const { r, g, b } = colors

  
  const backgroundColor = `rgb(${r}, ${g}, ${b})`

  return (
      <div className='color-picker'>

          <div className='color-square' style={{ backgroundColor }}></div>
          <input type="text" onChange={onChange} />

      </div>
  )
}

export default SingleColorPicker