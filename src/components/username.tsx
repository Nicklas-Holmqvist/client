import React from "react";
import { useState } from "react";
import '../css/username.css'

function Content() {

    const [name, setName] = useState('')

    const confirm = () => {
        alert("Hej! Välkommen hit " + name + "!")
    }

    return (
        <div className="content-section flex center column">
            <p>Vad heter du?</p>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={confirm}>
                Bekräfta
            </button>
        </div>
        
    )
}

export default Content