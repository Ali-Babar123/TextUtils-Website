import React, { useState,useEffect } from 'react';
import './App.css';
import Home from './MyComponent/Home.jsx';
import TextForm from './MyComponent/TextForm.jsx';
import Alert from './MyComponent/Alert.jsx';
// import Contact from './MyComponent/Contact.jsx';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
  }, [mode]);

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      tp: type
    });
  };

  const handleToggle = () => {
    if (mode === 'dark') {
      setMode('light');
      handleAlert("You have enabled Dark Mode", "success");
      
    } else {
      setMode('dark');
      handleAlert("You have enabled Light Mode", "success");
    }
  };

  return (
    <>
      <Home logo="TextUtlis" mode={mode} handleToggle={handleToggle} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
      <Alert alert={alert} />
      {/* <Contact /> */}
    </>
  );
}

export default App;
