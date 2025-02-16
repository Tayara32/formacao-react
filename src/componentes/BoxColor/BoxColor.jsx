import React from 'react'
import styles from './BoxColor.module.css'

function BoxColor(props) {

    const { r, g, b } = props

    const toHex = (value) => `${value < 16 ? "0" : ""}${value.toString(16)}`

    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`

    const invertText = () => (r + g + b) < 200

    return (
        <div className={`${styles.boxColor} ${invertText() ? styles.inverted : ""}`}
        style={{ backgroundColor: hexColor }}>
   

            <div>{`rgb(${r},${g},${b})`}</div>
            <div>{hexColor}</div>
        </div>
    )
}

export default BoxColor