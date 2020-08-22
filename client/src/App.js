import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Wrapper from './components/Wrapper/Wrapper'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
      <h1>test</h1>
      </Wrapper>
    </div>
  );
}

export default App;
