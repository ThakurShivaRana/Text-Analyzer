import React, { useState } from 'react'

export default function TextForms(props) {
    const handleupClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopyClick = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");

    }
    const handleremove = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success");
    }

    const handleonChange = (event) => {

        setText(event.target.value)
    }
    const [text, setText] = useState('');

    return (
        <><div className="first-box">
            <div className='container' >
                <h2>{props.Heading}</h2>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-danger" onClick={handleupClick}  >UPPERCASE</button>
                <button className="btn btn-outline-danger mx-2" onClick={handlelowClick}  >lowercase</button>

                <button className="btn btn-outline-danger my-2" onClick={handleCopyClick}  >Copy The Text</button>
                <button className="btn btn-outline-danger mx-2 my-2" onClick={handleClearClick}  >Clear Text</button>
                <button className="btn btn-outline-danger mx-2 my-2" onClick={handleremove}  >Remove Extra spaces</button>
                <h6> </h6>
            </div>

            <div className="containor">
                <h1>Yor Text summary</h1>
                <p>Words :{text.split(" ").length} <br /><hr /> charectors :{text.length} <br /> <hr /> Sentence :{text.split(".").length} </p>
                <hr />
                <p>You can read this in (Seconds) : {0.4 * text.split(" ").length}    </p>
            </div>
            
        </div>
        
        </>
    )
}
