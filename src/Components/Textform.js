import React,{useState} from 'react'
export default function Textform(props) {
const[text,setText]=useState('event');
const handleUpClick= ()=>{
// console.log("uppercase was clicked" + text);
let newText=text.toUpperCase();
setText(newText)
props.showAlert("Converted to Uppercase","success")
}
const handleLoClick= ()=>{
// console.log("uppercase was clicked" + text);
let newText=text.toLowerCase();
setText(newText)
props.showAlert("Converted to Lowercase","success")
}
const handleclearClick=()=>
{
let newText='';
setText(newText)
props.showAlert("Cleared","success")
}
const handleOnChange= (event)=>{
console.log("on change");
setText(event.target.value);
}
return (
<>
<div className="container">
<h1>{props.heading}</h1>
<div className="my-3">
<label htmlFor="mybox" class="form-label">Enter Letters</label>
<textarea className="form-control" id="mybox" value={text}
onChange={handleOnChange} rows="10"></textarea>
</div>
<button className="btn btn-danger mx-4" onClick={handleUpClick}>Convert Uppercase 
</button>
<button className="btn btn-danger mx-4" onClick={handleLoClick}>Convert Lowercase 
</button>
<button className="btn btn-danger mx-4" onClick={handleclearClick}>Clear Text 
</button>
</div>
<div className="conatiner" my-2>
<h1>text your summery</h1>
<p>{text.split(" ").length} words and{text.length}</p>
</div>
</>
)
}
