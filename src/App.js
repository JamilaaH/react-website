import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import About from './pages/About';
import Gallery1 from './pages/Gallery1';
import Gallery2 from './pages/Gallery2';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        < Route exact path ='/'  component = {Home}/>
        < Route exact path ='/gallery1'  component = {Gallery1}/>
        < Route exact path ='/gallery2'  component = {Gallery2}/>
        < Route exact path ='/service'  component = {Service}/>
        < Route exact path ='/about'  component = {About}/>
        < Route exact path ='/contact'  component = {Contact}/>
      </Switch>
    </BrowserRouter>
    );

}

export default App;
