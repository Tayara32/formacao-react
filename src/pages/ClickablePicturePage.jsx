import React from 'react'
import ClickablePicture from '../componentes/ClickablePicture/ClickablePicture'

function ClickablePicturePage() {
  return (
    <div>
        <h2>ClickablePicture</h2>
      <ClickablePicture
        img="./img/maxence.png"
        imgClicked="./img/maxence-glasses.png"
      />
    </div>
  )
}

export default ClickablePicturePage