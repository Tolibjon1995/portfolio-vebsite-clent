import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import About from "./components/About";
import './components/styles/app.scss'
import Navbars from "./components/Navbars";
import Portfolio from "./components/Portfolio"
import Contact from './components/Contact';


function App(props) {
  console.log(props.history, "nimadir");
  return (
    <div>
      <BrowserRouter>
      <Navbars/>

      <Switch>

      <Route path='/' exact component={Homepage}/>
      <Route path="/about" exact component={About}/>
      <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contakt" exact component={Contact }/>


      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
