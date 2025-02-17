import React from 'react'
import NumbersTable from '../componentes/NumbersTable/NumbersTable'

function NumbersTablePage() {
  return (
    <div>
        <h2>NumbersTable</h2>
        <NumbersTable limit={12} />
    </div>
  )
}

export default NumbersTablePage