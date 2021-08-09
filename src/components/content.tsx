import React from "react";
import { useState } from "react";

function Content() {

    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [object, setObject] = useState([name,body])

    function confirm() {
        setObject([
            name,
            body
        ])
    }

    function handleBody(e:any) {
        setBody(e.target.value)
    }

    return (
        <div className="content-section">
            <h2>Hej {name}!</h2>
            <p>Vad heter du?</p>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text" 
                value={body}
                onChange={handleBody}
            />
            <button onClick={confirm}>Bekräfta</button>
            <div className="body-section">
            {object}
            </div>
        </div>
        
    )
}

export default Content