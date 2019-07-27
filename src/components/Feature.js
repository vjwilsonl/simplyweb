/**
 * Feature Component
 *
 * @author wilson(vjwilsonl@gmail.com)
 */
import React, { Component } from 'react';
import feature1 from '../assets/images/icon-rocket.png';
import card1 from '../assets/images/card-img-1.jpg';
import card2 from '../assets/images/card-img-2.jpg';

class Feature extends Component {
  getUserCountry() {
    if (this.props.user) {
      return this.props.user.country_name;
    } else {
      return '';
    }
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // RANDOMLY GENERATE 6 - 8 FEATURES
  featureGenerator() {
    let rand = this.getRndInteger(6, 8);
    let cardHtml = [];
    for (var i = 0; i < rand; i++) {
      cardHtml.push(
        <div className="col s6 m4" key={i}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={i % 2 ? card1 : card2}
                alt="feature card"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.getUserCountry()} Feature
              </span>
              <p>I am a very simple card for feature description.</p>
            </div>
            <div className="card-action">
              <a className="activator">More</a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this feature that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      );
    }
    return cardHtml;
  }
  render() {
    return (
      <div id="feature-section">
        <div className="container">
          <div className="section-header center">
            <img src={feature1} alt="Rocket" />
            <h4>Popular Features in {this.getUserCountry()}</h4>
          </div>
          <div className="row">{this.featureGenerator()}</div>
        </div>
      </div>
    );
  }
}

export default Feature;
