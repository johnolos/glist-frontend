import Button from 'antd/lib/button';
import * as React from 'react';
import './App.css';
import CalendarView from './Calendar/CalendarView';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <CalendarView title='Hello World'/>
      </div>
    );
  }
}

export default App;
