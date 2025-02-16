import React from 'react'
import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);  
      };

  return (
    <div>
      <img
        src={isClicked ? imgClicked : img} 
        alt="Clique para alternar"
        onClick={handleClick}  
      />
    </div>
  )
}

export default ClickablePicture