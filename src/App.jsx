


// UtlisApp

import React, { useState } from 'react';
import './App.css';
import Home from './MyComponent/Home.jsx';
import TextForm from './MyComponent/TextForm.jsx';
import Alert from './MyComponent/Alert.jsx';
import Contact from './MyComponent/Contact.jsx';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      tp: type
    });
  };

  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      handleAlert("You have enabled Dark Mode", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor =  'white';
      handleAlert("You have enabled Light Mode", "success");
    }
  };

  return (
    <>
      <Home logo="TextUtlis" mode={mode} handleToggle={handleToggle} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
      <Alert alert={alert} />
      <Contact />
    </>
  );
}

export default App;


// New App Website //


// import React, { Component } from 'react';
// import LoadingBar from 'react-top-loading-bar';
// import New from './Class Based Component/New';
// import Navbar from './Class Based Component/Navbar';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// export default class App extends Component {
//   state = {
//     progress: 0
//   }

//   setProgress = (progress) => {
//     this.setState({ progress });
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <LoadingBar
//             color='#f11946'
//             height={3}
//             progress={this.state.progress}
//           />
//           <Routes>
//             <Route exact path="/" element={<New setProgress={this.setProgress} key="general" pageSize={37} country="us" category="general" />} />
//             <Route exact path="/business" element={<New setProgress={this.setProgress} key="business" pageSize={37} country="us" category="business" />} />
//             <Route exact path="/entertainment" element={<New setProgress={this.setProgress} key="entertainment" pageSize={37} country="us" category="entertainment" />} />
//             <Route exact path="/health" element={<New setProgress={this.setProgress} key="health" pageSize={37} country="us" category="health" />} />
//             <Route exact path="/science" element={<New setProgress={this.setProgress} key="science" pageSize={37} country="us" category="science" />} />
//             <Route exact path="/sports" element={<New setProgress={this.setProgress} key="sports" pageSize={37} country="us" category="sports" />} />
//             <Route exact path="/technology" element={<New setProgress={this.setProgress} key="technology" pageSize={37} country="us" category="technology" />} />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
