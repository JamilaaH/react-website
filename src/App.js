import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        < Route exact path ='/'  component = {Home}/>
        < Route exact path ='/blog'  component = {Blog}/>
        < Route exact path ='/contact'  component = {Contact}/>
      </Switch>
    </BrowserRouter>
    );

}

export default App;
