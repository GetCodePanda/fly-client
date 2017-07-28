import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <section>
        <Menu stackable inverted className="fly-menu">
          <Menu.Item
            name='features'
            active={activeItem === 'features'}
            onClick={this.handleItemClick}
          >
            <img src="https://react.semantic-ui.com/logo.png" alt="" /> &nbsp;
            Fly Tourister Booking
          </Menu.Item>
        </Menu>
      </section>
    )
  }
}

export default NavBar;