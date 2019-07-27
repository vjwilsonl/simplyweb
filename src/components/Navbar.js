/**
 * Navigation bar Component
 *
 * @author wilson(vjwilsonl@gmail.com)
 */
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="">
        <nav>
          <div className="col s12 m12 l12">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo nav-logo">
                Logo
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="#">Nav 1</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
