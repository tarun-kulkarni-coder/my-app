import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
//import About from './Components/About';


//{/*import {
    //BrowserRouter as Router,
    //Switch,
    //Route,
  //} //from "react-router-dom"*/}

function App() {
const[mode,setmode]=useState('light');
const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>
{
setAlert({
msg:message,
type:type
})
setTimeout(()=>
{
setAlert(null);
},1500);
}
const togglemode=()=>
{
if(mode==='light')
{
setmode('dark');
document.body.style.backgroundColor='grey'
showAlert("Enable dark mode","success");
}
else
{
setmode('light');
document.body.style.backgroundColor='white'
showAlert("Enable light mode","success");
} 
}
return(
<>
{/*<Router>*/}
<Navbar title="TEXT UTILS" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>
<div className="container">
{/*<Switch>
          <Route path="/about">
            <About />
          </Route>
<Route path="/">*/}
          <Textform showAlert={showAlert} heading="Type CONVERSION" mode={mode}/>
          {/*</Route>
</Switch>*/}

{/*<About/>*/}
</div>
{/*</Router>*/}
</>
);
}
export default App;