import React, { useState } from "react";
import './errorApp.css'
const ErrorApp = () => {
    const [error, setError] = useState("");
    return (
    <div className="error-container">
        <div className="btn-container">
            <button onClick={() => setError("Error de la API")}>
                Error
            </button>
            <button onClick={() => setError("Error de credenciales")}>
                Another Error
            </button>
            <button onClick={() => setError("")}>
                Proceso Exitoso
            </button>
        </div>
        <div className="error-message">
            { error && <h1>{error}</h1> }
        </div>
    </div>
    )
}


export default ErrorApp