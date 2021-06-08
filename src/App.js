import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbars from './components/Navbars';
import './components/styles/app.scss'

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Navbars/>
      <Switch>
      <Route path='/' exact component={Homepage} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
