import React, { useState } from 'react'
import Navbar from './components/Navbar';
// import TextBox from './components/textBox';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const color = ['grey', 'black', 'green', 'blue'];

  const toggleMode = () => {
    if (mode === 'light' || 'grey' || 'green') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
    }
    else if(mode === 'dark' || 'light' || 'green'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else if(mode === 'green' || 'light' || 'gey'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
   
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      {/* <TextBox heading = "Enter Text here"/> */}
      <About mode={mode}/>
    </>

  );
}

export default App;
