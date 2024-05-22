import React from "react";
import Nav from "./Navbar";
import Para from "./para";
import Form from "./Form";
import Right from "./right";
function App() {
  return (
    <div className="App">
      <div className="right-content">
        <Right/>
      </div>
      <div className="left-content">
        <Nav/>
        <Para/>
        <Form/>
        <div className="vertical_line"></div>
      </div>
      
     
    </div>
  );
}

export default App;
