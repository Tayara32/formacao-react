import React from 'react'
import styles from './greetings.module.css'

function Greetings(props) {
    const { lang, children } = props

    const langDictionary = {
        de: 'Hallo',
        fr: 'Bonjour',
        es: 'Hola',
        it: 'Ciao',
        en: 'Hello'
    }

    return (
        <div className={styles.grettings}>{langDictionary[lang]} {children}</div>
    )
}

export default Greetings