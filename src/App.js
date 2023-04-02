import devTective from './images/Juliomoros.png';
import Spec from './components/spec';
import './App.css';
import { useState } from 'react';
import Devtective from './components/devt';

function App() {
  const [onDetective, setDetective] = useState(false);
  let clickHandler = () => {
    setDetective(!onDetective);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className='first'>Julio Moros</h1>
          <img src={devTective} width="120" height="120" className="Dev-tective" alt="jjmr" />
          <div onClick={clickHandler}>
            { onDetective && <h6> <Devtective /> Algo mas</h6>}
            {!onDetective && <h1 className='second'>Blockchain Detective</h1>}
          </div>
          <h1 className='third'>for DeFi</h1>
          <Spec texto='Solidity; Web3.js; NodeJS; Python'/>
        </div>
      </header>
    </div>
  );
}

export default App;
