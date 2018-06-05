import Button from 'antd/lib/button';
import * as React from 'react';
import './App.css';
import CalendarView from './Calendar/CalendarView';
import Nav from './Nav/Nav';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Nav/>
        <Button type="primary">Button</Button>
        <CalendarView title='Hello World'/>
      </div>
    );
  }
}

export default App;
