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
       <Route path='/' component={India} exact/>
         <Route path='/About' component={About} />
         <Route path='/Form' component={Formdata}/>
         <Route path='/World' component={World}  />
         <Route path='/MythBusters' component={Myth} />
       </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
