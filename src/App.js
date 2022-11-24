import logo from './logo.svg';
import devTective from './Juliomoros.png';
import Todo from './components/todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Por Hacer</h1>
          <Todo texto='Aprender React'/>
          <Todo texto='Dominar React'/>
          <Todo texto='Proyecto React'/>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={devTective} width="150" height="150" className="Dev-tective" alt="jjmr" />
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
