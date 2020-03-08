import React from 'react';
import {Content} from './Content'
import {Header} from './Header'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <div className="App-footer">Footer</div>
    </div>
  );
}

export default App;
