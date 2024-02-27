// import { useEffect, useState } from 'react';
import './App.css';
import About from './components/About.js';
import Alert from './components/Alert.js';
import Navbar from './components/NavBar.js';
import Textform from './components/TextForm.js'
import React, { useState } from 'react';
import {
   BrowserRouter as Router,
   Routes,
   Route
} from 'react-router-dom';


function App() {
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type) => {
      setAlert({
         msg: message,
         type: type
      })
      setTimeout(
         () => {
            setAlert(null);
         }, 1500)
   }


   const toggleMode = () => {
      if (mode === 'light') {
         setMode('dark');
         document.body.style.backgroundColor = 'black';
         document.body.style.color = 'white';
         showAlert("Dark mode has been enables", "success");
         document.title = 'TextUtil - Dark';
         setInterval(() => {
            document.title = 'TextUtil - Home'
         }, 2000);
      }
      else {
         setMode('light');
         document.body.style.backgroundColor = 'white';
         document.body.style.color = 'black';
         showAlert("Light mode has been enables", "success");
         document.title = 'TextUtil - Light';
         setInterval(() => {
            document.title = 'TextUtil - Home'
         }, 1500);
      }
   }

   return (
      <>
         <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
         <Alert alert={alert} />
         <Router>
            <Routes>
               <Route path="/about" element={<About />} />
               <Route path="/" element={<Textform showAlert={showAlert} heading='Enter text to Analyze' mode={mode} />} />
            </Routes>
         </Router>
      </>

   );
}

export default App;
