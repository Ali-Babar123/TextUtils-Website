import { useState } from "react";




function TextForm(props) {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopyText = () => {
      let newtext = document.getElementById("MyBox");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);

    };
    const handleTextSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }
    const handleTextSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
      }
      
    return (
        <div className="container my-5" style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h1 >{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            onChange={handleChange}
            placeholder="Leave a comment here"
            id="MyBox"
            value={text}
            style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white",height: '200px', color: props.mode === "dark" ? "white" : "black" }}
          ></textarea>
        </div>
        <button className="btn btn-success my-3 mx-2" onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-info mx-2" onClick={handleClearText}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleTextSpeak}>
          Speak
        </button>
        <button className="btn btn-danger mx-2" onClick={handleTextSpaces}>
          Remove Spaces
        </button>
  
        <div className="container" >
          <h3>Your text Summary</h3>
          <p>
            {text.split(" ").length-1} Words {text.length} Characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes</p>
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
      </div>
    );
}
export default TextForm