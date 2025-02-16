import React from 'react'
import styles from './random.module.css'

function Random(props) {

    const { min, max } = props

    const valorFinal = Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <div className={styles.random}>Random valor entre {min} e {max} =>{valorFinal}</div>
  )
}

export default Random