import React from "react";
import { useState } from "react";
import '../css/username.css'

function Content() {

    const [name, setName] = useState('')
    const [myName, setMyName] = useState('')

    const confirm = () => {
        setMyName(name)
        alert("Hej " + name + "!")
    }

    return (
        <div className="content-section flex center column">
            <h2>Hej</h2>
            <p>Vad heter du?</p>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={confirm}>
                Bekräfta</button>
            <div className="body-section">
            {myName}
            </div>
        </div>
        
    )
}

export default Content