import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage';

import About from "./components/About";
import './components/styles/app.scss'
import Navbars from "./components/Navbars";


function App() {
  return (
    <div>
    <Navbars/>
      <BrowserRouter>

      <Switch>

      <Route path='/' exact component={Homepage}/>
      <Route path="/about" exact component={About}/>


      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
