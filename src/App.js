import React, {useState}  from 'react';
import './App.css';

import 'tachyons';


const App = () => {

  const [display, setDisplay] = useState("") ; 
    
  const btn1ChangeHandler = (event) => {
       console.log(event.target.value) ; // debug
       setDisplay("btn1 clicked");   
  };

  const btn2ChangeHandler = (event) => {
    console.log(event.target.value) ; // debug
    setDisplay("btn2 clicked");   
};

  const btn3ChangeHandler = (event) => {
    console.log(event.target.value) ; // debug
    setDisplay("btn3 clicked");   
  };

 

  return (

    <div className="App">
      <div>

          <button 
            className='f6 link  ph3 pa3 pv2 mb2 dib  ' 
            onClick={btn1ChangeHandler}
          >btn1
          </button>
          <button 
            className='f6 link ph3 pa3 pv2 mb2 dib  ' 
            onClick={btn2ChangeHandler}
          >btn2
          </button>
          <button 
            className='f6 link  ph3 pa3 pv2 mb2 dib  ' 
            onClick={btn3ChangeHandler}
          >btn3
          </button>

        <div >
          <button className=" pa3 bg-gray ">{display}</button>
        </div>
      </div>
    </div>
    );
};



export default App;

