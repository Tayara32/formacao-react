import React from 'react'
import Random from '../componentes/Random/Random'

function RandomPage() {
  return (
    <div>
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
    </div>
  )
}

export default RandomPage