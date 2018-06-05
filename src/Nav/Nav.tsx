import { Button, Menu } from 'antd';
import { ButtonType } from 'antd/lib/button/button';
import { ClickParam } from 'antd/lib/menu';
import * as React from 'react';
// import { withRouter } from 'react-router-dom';


export declare type Page = 'home' | 'calendar' | 'orgs'


export default class Nav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            button: {
                size: 'default'
            }
        }
    }

    public render() {
        return (
            <Menu mode='horizontal' onClick={this.handleClick}>
                <Menu.Item>
                    <Button type={this.isPrimary("home")} {...this.state.button}>Home</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button type={this.isPrimary("calendar")} {...this.state.button}>Calendar</Button>
                </Menu.Item>
                <Menu.Item>
                    <Button type={this.isPrimary("orgs")} {...this.state.button}>Organizers</Button>
                </Menu.Item>
            </Menu>
        )
    }

    private isPrimary(page: Page): ButtonType {
        return page === this.props.page ? 'primary' : 'default';
    }

    private handleClick(e: ClickParam) {
        console.log(e.key);
        console.log(e.item);
        console.log(e.item);
        console.log(e.keyPath);
    }

}
