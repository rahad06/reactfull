import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import PanelMenu from "../Panel/Common/PanelMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
          <PanelMenu></PanelMenu>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
