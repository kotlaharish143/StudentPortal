import React from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import cse from './components/Cse'
import Infra from './components/infra'
import Vision from './components/Vision'
import Login from './components/Login'
import Forum from './components/Forum'
import Footer from './components/Footer'
import pdf from './components/pdf'
import Cardcontainer from './components/Cardcontainer'
import './App.css';
import Portfolio from './components/portfolio'
import Gallery from './components/Gallery'
import student from './components/Student'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
  <Navbar />
  <Route path="/" exact component={Header}/>
  <Route path="/" exact component={Cardcontainer}/>
  <Route path="/Login" component={Login} />
  <Route path="/AboutCSE" component={cse} />
  <Route path="/Vision&Mission" component={Vision} />
  <Route path="/AboutIfrastructure" component={Infra} />
  <Route path="/Forum" component={Forum} />
  <Route path="/Video" exact component={Footer} />
  <Route path="/pdf" exact component={pdf} />
  <Route path="/Student" exact component={student} />
  <Route path="/Faculty" exact component={student} />
  <Route path="/Gallery" exact component={Gallery} />
   <Route path="/portfolio" component={Portfolio} />
  </Router>
  </div>
  );
}

export default App;
