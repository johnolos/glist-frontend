import * as React from "react";
import CalendarView from './CalendarView';

export default class Calendar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>Calendar</h1>
        <CalendarView title='Hello World'/>
      </div>
    );
  }
}
