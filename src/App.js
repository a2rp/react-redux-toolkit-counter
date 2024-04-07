import React, { useState } from 'react'
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './redux/counterSlice';

const App = () => {
    const [value, setValue] = useState(0);
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <input
                    className={styles.decrementButton}
                    type="button"
                    value="-"
                    onClick={() => dispatch(decrement())}
                />
                <div className={styles.value}>{counter}</div>
                <input
                    className={styles.incrementButton}
                    type="button"
                    value="+"
                    onClick={() => dispatch(increment())}
                />
            </div>
        </div>
    )
}

export default App
