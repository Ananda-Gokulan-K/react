import logo from './logo.svg';
import './App.css';
import TestfuncComp from './component/functionalComp/functionalComp';
import TestclassComp from './component/classComp/classComp';
import TestpropComp from './component/functionalComp/propComp';

function App() {
  return (
    <div className="App">
      

      <TestfuncComp/>
      <TestclassComp/>

      <header className="App-header">
        <TestpropComp name="am" general="?" />
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
