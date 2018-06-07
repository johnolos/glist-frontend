import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Calendar from './Calendar/Calendar';
import Home from './Home/Home';
import './index.css';
import Nav from './Nav/Nav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav/>

            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/calendar" component={Calendar} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
