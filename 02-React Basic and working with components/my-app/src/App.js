import logo from './logo.svg';
import './App.css';

/*
==== Tutorial ====

Here App function is React JSX component.

JSX means Javascript with XML or HTML which then transform to actual HTML by some background React library code that we have set in starting of this project.

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hi! My name is Sanskar Maheshwari 😁</p>
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
