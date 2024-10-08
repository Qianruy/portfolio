import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import { Container, Sidebar, Menu, Icon, Responsive } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import Routes from "./routes";
import pic from "./components/assets/backGround.png" 

const NavBarMobile = ({
  children,
  ownerHeader,
  onPusherClick,
  onToggle,
  portfolioNavItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={portfolioNavItems}
      vertical
      visible={visible} />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}>
      <Menu inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(ownerHeader, item => <Menu.Item key={ownerHeader.key} {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ ownerHeader, portfolioNavItems }) => (
  <Menu inverted>
    {_.map(ownerHeader, item => <Menu.Item key={ownerHeader.key} {...item} />)}
    <Menu.Menu position="right">
      {_.map(portfolioNavItems, item => <Menu.Item key={portfolioNavItems.key} {...item} />)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

const HeaderImage = () => (
  <img
    src={ pic }
    alt="Header Image"
    style={{ width: "100%", height: "300px", objectFit: "cover" }}
  />
);

class NavigationBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) {
      this.setState({ visible: false });
    }
  }

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, ownerHeader, portfolioNavItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            ownerHeader={ownerHeader}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            portfolioNavItems={portfolioNavItems}
            visible={visible}>
            <HeaderImage />
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop ownerHeader={ownerHeader} portfolioNavItems={portfolioNavItems} />
          <HeaderImage />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const ownerHeader = [
  { as: Link,
    content: "Qianru Yu",
    key: "home",
    to: "/portfolio" }
];
const portfolioNavItems = [
  { as: Link,
    content: "<Home/>",
    key: "home",
    to: "/portfolio" },
  { as: NavLink,
    content: "<Resume/>",
    key: "Resume",
    to: "/resume" },
  { as: NavLink,
    content: "<About Me/>",
    key: "About Me",
    to: "/aboutMe" },
  { as: NavLink,
    content: "<Research/>",
    key: "Projects",
    to: "/projects" },
];

const App = () => (
  <NavigationBar ownerHeader={ownerHeader} portfolioNavItems={portfolioNavItems}>
    <Container>
      <Routes />
    </Container>
  </NavigationBar>
);



export default App;
