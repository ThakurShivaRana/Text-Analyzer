

import './App.css'; 
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Footer from './components/Footer';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";



document.body.style.background = "linear-gradient(90deg,#4177BC 60%,#2B3284 60%)";

function App() {
  const [alert, setAlert] = useState(null);

const showAlert = (message,type)=>{
setAlert({
  msg: message,
type: type
})
setTimeout(() => {
  setAlert(null);
}, 1500);
}
  return (
    <>
    
<Navbar title="Text-Analyzer" Home="Home" About="About" Contact="Contact us" />
<Alert alert={alert} />
<div className="container">
<TextForms showAlert={showAlert} Heading="Enter the Text below to Analyze"  />
         
</div>
<div className="container">
<Footer />
</div>
    </>
  );
}

export default App;
