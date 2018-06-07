import { Calendar } from 'antd';
import * as React from 'react';

export default class CalendarView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }


  public render() {
    return (
      <div>
        <Calendar />
      </div>
    )
  }

}
