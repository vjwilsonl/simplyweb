/**
 * Main Component
 *
 * @author wilson(vjwilsonl@gmail.com)
 */
import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';
import Navbar from './Navbar';
import Hero from './Hero';
import Testimonial from './Testimonial';
import Feature from './Feature';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // API call to get current user

    axios
      .get('https://ipapi.co/json')
      .then(response => {
        // handle success
        this.setState({ user: response.data });
      })
      .catch(error => {
        // handle error

        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {/* HERO =================================== */}
        <Hero user={this.state.user} />
        {/* FEATURE =================================== */}
        <Feature user={this.state.user} />
        {/* TESTIMONIAL =================================== */}
        <Testimonial />
        {/* FOOTER =================================== */}
        <Footer />
      </div>
    );
  }
}
export default App;
