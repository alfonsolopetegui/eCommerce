import React, { useState } from "react";
import './counter.css'

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementar = () => {
        setCounter(counter + 1)
    }
    return (
        <section className="counter-container">
            <button classnaem="counter-btn" onClick={incrementar}>
                Incrementar
            </button>
            <h1>Clicks: {counter}</h1>
        </section>
    )
}