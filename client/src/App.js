import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Wrapper from './components/Wrapper/Wrapper'
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search'
import Saved from './components/Saved/Saved'


function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
