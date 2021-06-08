import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Navbars from './components/Navbars';
import About from "./components/About";


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Navbars/>
      <Switch>
      <Route path='/' exact />
      <Route path="/about" exact component={About}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
