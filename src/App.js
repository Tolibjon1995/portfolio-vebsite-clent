import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import About from "./components/About";
import './components/styles/app.scss'
import Navbars from "./components/Navbars";
import Portfolio from "./components/Portfolio"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbars/>

      <Switch>

      <Route path='/' exact component={Homepage}/>
      <Route path="/about" exact component={About}/>
      <Route path="/portfolio" exact component={Portfolio}></Route>


      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
