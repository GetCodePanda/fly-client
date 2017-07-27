import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
            <img src="https://react.semantic-ui.com/logo.png" alt="" />
        </Menu.Item>
        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Fly Tourister Booking
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar;