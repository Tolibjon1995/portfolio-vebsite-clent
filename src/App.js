import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';

import About from "./components/About";
import './components/styles/app.scss'
import Navbars from "./components/Navbars";


function App(props) {
  console.log(props.historiy, "nimadir");
  return (
    <div>
    
      <BrowserRouter>
      <Navbars/>
      <Switch>

      <Route path='/' exact component={Homepage}/>
      <Route path="/about" exact component={About}/>


      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
