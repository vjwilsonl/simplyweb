/**
 * Footer Component
 *
 * @author wilson(vjwilsonl@gmail.com)
 */
import React, { Component } from 'react';

class Footer extends Component {
  clickFooterContact() {
    setTimeout(() => {
      document.getElementById('icon_prefix').focus();
    }, 200);
  }
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <div className="grey-text text-lighten-4">
                {/* ADDRESS */}
                <div className="div-contact">
                  <i className="material-icons prefix custom-footer-icon">
                    location_on
                  </i>12 Prince Edward Rd #04-06, 079212, Singapore
                </div>
                <div className="div-contact">
                  <i className="material-icons prefix custom-footer-icon">
                    local_phone
                  </i>
                  +65 6688 6688
                </div>
                <div className="div-contact">
                  <i className="material-icons prefix custom-footer-icon">
                    mail
                  </i>example@example.com
                </div>
                {/* SOCIAL ICONS */}
                <div className="div-contact">
                  <a
                    href="https://facebook.com"
                    className="waves-effect waves-light social-icon btn "
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://google.com"
                    className="waves-effect waves-light social-icon btn "
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-google" />
                  </a>
                  <a
                    href="https://instagram.com"
                    className="waves-effect waves-light social-icon btn "
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="waves-effect waves-light social-icon btn "
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
            {/* EXTRA LINKS */}
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="#hero-section"
                    onClick={event => this.clickFooterContact()}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* FOOTER COPY RIGHT */}
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
