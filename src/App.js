import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter,Switch,Link,router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode,setMode]=useState('light')
  const toggleMode=()=>{
     if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      //document.title="Dark Mode"
     }
     else{
      setMode('light')
      document.body.style.backgroundColor='white';
      //document.title="Light Mode"
     }
  }

  return (
    <>
      <BrowserRouter>
      {/* <Navbar title='Jyoti' AboutUs='AboutUs'/> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert  alert='this is alert'/> 
      <Routes>
        <Route exact path="/about" element={<About />} />   
        <Route exact path="/" element={<Textform heading="Text Form" mode={mode} toggleMode={toggleMode}/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
