import React, {useState} from 'react'

const TextBox = (props) => {

    const upperBtn = document.querySelector('.btn');
    console.log(upperBtn);


    const handleChange = (event) =>{
        setText(event.target.value);
    };

    const handleClick = () =>{
        const newText = text.toUpperCase();
        setText(newText);
    };

    const handleExtraSpaces = ()=>{
    const newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    }

    const [text, setText] = useState("Enter your text here");

  return (
    <>
        <div className="container">
        <h1>{props.heading}</h1>
        <textarea name="text" value={text} onChange = {handleChange} id="text" cols="50" rows="8"></textarea>
        <button className="btn btn-primary" onClick = {handleClick} >To UpperCase</button>
        <button className="btn btn-primary" onClick = {handleExtraSpaces} >Space killer</button>
        </div>
        <div className="container my-3">
            <h4>Text Summary</h4>
            <p>The text has {text.split(" ").length} words and {text.length} characters</p>
        </div>
    </>
  )
}

export default TextBox