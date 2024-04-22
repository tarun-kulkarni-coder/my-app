import React, { useState } from 'react';
export default function About() {
const[mystyle,setmystyle]=useState(
{
color:'black',
backgroundColor:'white'
})
const[Btntext,setBtnText]=useState("enable dark mode")
const toggleStyle = ()=>
{
if(mystyle.color==='black')
{
setmystyle({
color:'white',
backgroundColor:'black'
})
setBtnText("Enable Light Mode")
}
else
{
setmystyle({
color:'black',
backgroundColor:'white'
})
setBtnText("Enable Dark Mode")
}
}
return (
<div className="container" style={mystyle}>
<h2 className="my-6">About us</h2>
<div className="accordion" id="accordionExample" atyle={mystyle}>
<div className="accordion-item"style={mystyle}>
<h2 className="accordion-header" id="headingOne">
<button className="accordion-button" type="button" data-bstoggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" ariacontrols="collapseOne" style={mystyle}>
Accordion Item #1
</button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" arialabelledby="headingOne" data-bs-parent="#accordionExample">
<div className="accordion-body">
<strong>This is the first item's accordion body.</strong> It is shown by 
default, until the collapse plugin adds the appropriate classes that we use to 
style each element. These classes control the overall appearance, as well as the 
showing and hiding via CSS transitions. You can modify any of this with custom 
CSS or overriding our default variables. It's also worth noting that just about 
any HTML can go within the <code>.accordion-body</code>, though the transition 
does limit overflow.
</div>
</div>
</div>
<div className="accordion-item" style={mystyle}>
<h2 className="accordion-header" id="headingTwo">
<button className="accordion-button collapsed" type="button" data-bstoggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" ariacontrols="collapseTwo" style={mystyle}>
Accordion Item #2
</button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" arialabelledby="headingTwo" data-bs-parent="#accordionExample">
<div className="accordion-body">
<strong>This is the second item's accordion body.</strong> It is hidden 
by default, until the collapse plugin adds the appropriate classes that we use to 
style each element. These classes control the overall appearance, as well as the 
showing and hiding via CSS transitions. You can modify any of this with custom 
CSS or overriding our default variables. It's also worth noting that just about 
any HTML can go within the <code>.accordion-body</code>, though the transition 
does limit overflow.
</div>
</div>
</div>
<div className="accordion-item" style={mystyle}>
<h2 className="accordion-header" id="headingThree">
<button className="accordion-button collapsed" type="button" data-bstoggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" ariacontrols="collapseThree" style={mystyle}>
Accordion Item #3
</button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" arialabelledby="headingThree" data-bs-parent="#accordionExample">
<div className="accordion-body">
<strong>This is the third item's accordion body.</strong> It is hidden by 
default, until the collapse plugin adds the appropriate classes that we use to 
style each element. These classes control the overall appearance, as well as the 
showing and hiding via CSS transitions. You can modify any of this with custom 
CSS or overriding our default variables. It's also worth noting that just about 
any HTML can go within the <code>.accordion-body</code>, though the transition 
does limit overflow.
</div>
</div>
</div>
</div>
<div div className="container my-4">
<button onClick={toggleStyle} type="button" className="btn btn-danger">{Btntext}</button>
</div>
</div>
)
}