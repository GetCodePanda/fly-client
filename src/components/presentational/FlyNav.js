import React  , {Component} from 'react';
import { Menu } from 'semantic-ui-react';

class FlyNav extends Component{
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
  render() {
    const { activeItem } = this.state
    return (
        <Menu>
            <Menu.Item
            name='editorials'
            active={activeItem === 'editorials'}
            onClick={this.handleItemClick}
            >
            Fly Tourister
            </Menu.Item>
        </Menu>
    )}
}

export default FlyNav;