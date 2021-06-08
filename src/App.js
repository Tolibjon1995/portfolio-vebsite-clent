import {  BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Navbars from './components/Navbars';


function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Navbars/>
      <Switch>
      <Route path='/' exact />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
