/**
 * A simple single page web
 *
 * @author wilson(vjwilsonl@gmail.com)
 */
import React, { Component } from 'react';
import testi1 from '../assets/images/ben.png';
import testi2 from '../assets/images/aj.png';
import testi3 from '../assets/images/ernest.png';

class Testimonial extends Component {
  render() {
    return (
      <div id="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col s10 offset-s1">
              <h4 className="center">What People Are Saying About Us</h4>
              <div className="row">
                <div className="col s12 m4 center">
                  <img
                    src={testi1}
                    alt="Illustration of a man with a moustache"
                  />
                </div>
                <div className="col s12 m8 center">
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vehicula sapien at turpis euismod viverra ac eget
                    lacus. Sed et vehicula neque, vitae mollis dolor. Nullam
                    varius dui nunc, at commodo magna rhoncus at.
                    <cite>— Ben, The Big Group of Asia</cite>
                  </blockquote>
                </div>
              </div>
              {/* END COL */}
              <div className="row">
                <div className="col s12 m4 center">
                  <img
                    src={testi2}
                    alt="Illustration of a man with a moustache"
                  />
                </div>
                <div className="col s12 m8 center">
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vehicula sapien at turpis euismod viverra ac eget
                    lacus. Sed et vehicula neque, vitae mollis dolor. Nullam
                    varius dui nunc, at commodo magna rhoncus at.
                    <cite>— AJ, The Organization 13</cite>
                  </blockquote>
                </div>
              </div>
              {/* END COL */}
              <div className="row">
                <div className="col s12 m4 center">
                  <img
                    src={testi3}
                    alt="Illustration of a man with a moustache"
                  />
                </div>
                <div className="col s12 m8 center">
                  <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vehicula sapien at turpis euismod viverra ac eget
                    lacus. Sed et vehicula neque, vitae mollis dolor. Nullam
                    varius dui nunc, at commodo magna rhoncus at.
                    <cite>— Ernest, The Company</cite>
                  </blockquote>
                </div>
              </div>
              {/* END COL */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
