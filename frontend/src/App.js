import React from 'react'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/home/Home'

const App = () => {
  return (
    <>
    <Router>
    <Header/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
    </>
  )
}

export default App