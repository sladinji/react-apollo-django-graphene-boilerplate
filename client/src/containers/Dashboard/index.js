import React, { Component } from "react";

import NavBar from "../../components/NavBar";
import SideNavigation from "../../components/SideNavigation";
import Footer from "../../components/Footer";

import "../../index.css";
export default class Dashboard extends Component {
  render() {
    return (
      <div className="flexible-content">
        <SideNavigation />
        <div className="main-container">
          <NavBar />
          <main id="content" className="p-5">
            {this.props.children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
