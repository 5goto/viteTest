import React, { useEffect, useRef, useState } from 'react'
import styles from './SomeItem.module.css'
import { fromRubToDollar } from '../utils/converter'

export default function SomeItem() {
    const [value, setValue] = useState('')
    const result = fromRubToDollar(value)

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const promp = (result == 0 || result) ? <p className={styles.item__prompt}>Your {value} RUB = {result}$</p>
     : <p className={styles.item__prompt}>Wrong input!</p>

  return (
    <div className={styles.item}>
        <h1 className={styles.item__title}>Converter</h1>
        {promp}
        <input className={styles.item__input}
        type="text" value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        />
    </div>
  )
}
