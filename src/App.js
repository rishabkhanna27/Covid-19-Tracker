import React from 'react';
import './App.scss';
import {Navigation} from './Components/NavBar/Navigation';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {About} from './Components/Tabs/About/About'
import {India} from './Components/Tabs/India'
import {World} from './Components/Tabs/World'
import {Formdata} from './Components/Tabs/Form/Form'


import {Myth} from './Components/Tabs/MythBuster/Myth'
class App extends React.Component {

  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Navigation/>
       <Switch>
       <Route path='/Covid-19-Tracker/' component={India} exact/>
         <Route path='/Covid-19-Tracker/About' component={About} />
         <Route path='/Covid-19-Tracker/Form' component={Formdata}/>
         <Route path='/Covid-19-Tracker/World' component={World}  />
         <Route path='/Covid-19-Tracker/MythBusters' component={Myth} />
       </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
