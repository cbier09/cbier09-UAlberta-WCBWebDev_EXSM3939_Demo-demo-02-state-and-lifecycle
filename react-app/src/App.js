import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MyComponentClassBased from './MyComponentClassBased';
import Stopwatch from './Stopwatch';


// Whatever gets returned from this method (should probably be JSX) is what will get pushed into the "root" div in the HTML.
function App() {
  // In functional syntax, the below terms represent (in order): The name of the state property (testState), the method to change the state property (setTestState), the method call that incorporates it into state (useState), and the value that it will be initialized to (false).
  const [testState, setTestState] = useState(false);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Class based component</h1>
      </header>
      <div className='flex'>
        <MyComponentClassBased />
      </div>
      <div className='flex'>
        <Stopwatch />
      </div>
      
      <footer>
        <p>Thank you, come again.</p>
      </footer>
    </div>
  );
}


export default App;
