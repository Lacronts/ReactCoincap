import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DropdownSearch from '../presentational/DropdownSearch';
import Header from '../presentational/Header';

import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import './HomePageHeader.css';

class DesktopContainer extends React.Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className='bg'
            inverted
            textAlign='center'
            style={{ minHeight: '25vh', padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                  <NavLink exact to='/' className="item" activeClassName='active'>Home</NavLink>
                  <NavLink to='/about' className="item" activeClassName='active'>About</NavLink>
                <Menu.Item position='right'>
                  <DropdownSearch />
                </Menu.Item>
              </Container>
            </Menu>
            <Header />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends React.Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
          <NavLink to='/' className="item">Home</NavLink>
          <NavLink to='/about' className="item">About</NavLink>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '30vh' }}
          >
            <Segment
              className='bg'
              inverted
              textAlign='center'
              style={{ minHeight: '40vh', padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right' fitted={true}>
                    <DropdownSearch />
                  </Menu.Item>
                </Menu>
              </Container>
              <Header mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomePageHeader = () => (
  <ResponsiveContainer />
)


export default HomePageHeader;
