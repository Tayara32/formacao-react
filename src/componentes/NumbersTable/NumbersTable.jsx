import React from 'react'
import styles from './NumbersTable.module.css'
import { useState } from 'react';

function NumbersTable({ limit }) {

   const numeros = [];

   for (let i = 1; i <= limit; i++) {
        numeros.push(i);
   }

  return (
    <div className={styles.numbersTable}>
      {numeros.map((number, index) => (
        <div
          key={number}
          className={`${styles.square} ${number % 2 === 0 ? styles.even : ''}`}
        >
          {number}
        </div>
      ))}
    
  </div>
  )
}

export default NumbersTable