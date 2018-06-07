import { Menu } from 'antd';
import * as React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


export declare type Page = 'home' | 'calendar' | 'orgs'


class Nav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Menu mode='horizontal'>
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/calendar">Calendar</NavLink>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(Nav);
