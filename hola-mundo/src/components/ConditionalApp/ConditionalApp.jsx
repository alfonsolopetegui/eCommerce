import React from "react";
import { useState } from "react";
import './conditionalApp.css'

export const ConditionalApp = () => {
    const [condition, setCondition] = useState(true);
    
    return (
    <div className="conditional-container">
        <button onClick={() => setCondition(!condition)}>
            Toggle
        </button>
        {
         condition && <h1>Se muestra si es verdadero</h1>
        }
    </div>
    )
}