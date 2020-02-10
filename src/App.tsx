import React from 'react';
import Web3Provider from './Web3Provider';
import Connect from './Connect';
import Web3jsComponent from './Web3jsComponent'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Web3Provider>
          <Connect>
            <Web3jsComponent/>
          </Connect>
        </Web3Provider>
      </header>
    </div>
  );
}

export default App;
