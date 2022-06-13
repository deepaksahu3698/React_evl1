import React from 'react';
import './App.css';
import Input_form from "./Component/ProductForm"
import Display_item from "./Component/ProductListing"
function App() {
  return (
    <div className="App">
    <div>
< Input_form / >
    </div>
    <div>
<Display_item />
    </div>
    </div>
  );
}

export default App;
