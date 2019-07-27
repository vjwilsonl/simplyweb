/**
 * Hero Component
 *
 * @author wilson(vjwilsonl@gmail.com)
 */
import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import bg from '../assets/images/hero-img5.jpg';

import axios from 'axios';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      option: {},
      formControls: {
        country_code: null,
        name: '',
        email: '',
        telephone: '',
        organization: ''
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    // Initiate Materialize Components
    M.AutoInit();

    // API call to get country codes
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;callingCodes')
      .then(response => {
        // handle success
        this.setState({ isLoaded: true, data: response.data });
      })
      .catch(error => {
        // handle error
        this.setState({ isLoaded: true, error });
        console.log(error);
      });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    });
  }
  formSubmitHandler = event => {
    event.preventDefault();
    var instance = M.Modal.getInstance(document.getElementById('modal1'));
    instance.open();
    console.dir(this.state.formControls);
  };

  handleModalClose = event => {
    var instance = M.Modal.getInstance(document.getElementById('modal1'));
    instance.close();
    this.setState({
      formControls: {
        country_code: this.props.user.country_calling_code.replace('+', ''),
        name: '',
        email: '',
        telephone: '',
        organization: ''
      }
    });
    M.AutoInit();
  };

  componentDidUpdate() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }
  // render country code select options
  renderOptions() {
    let optionValues = [];
    if (this.state.data.length) {
      this.state.data.map((valueA, indexA) => {
        valueA.callingCodes.map((valueB, indexB) => {
          if (valueB) {
            optionValues.push({ code: valueB.replace(/ /g, '') });
          }
        });
      });
    }
    optionValues.sort((a, b) => {
      return a.code - b.code;
    });
    optionValues = this.getUnique(optionValues, 'code');
    let optionHtml = [];
    optionValues.map((value, index) => {
      optionHtml.push(
        <option key={index} value={value.code}>
          +{value.code}
        </option>
      );
    });
    return optionHtml;
  }
  // get the current user country code
  getUserCode() {
    if (this.props.user) {
      setTimeout(() => {
        this.setState({
          formControls: {
            ...this.state.formControls,
            country_code: this.props.user.country_calling_code.replace('+', '')
          }
        });
      }, 500);
      return this.props.user.country_calling_code.replace('+', '');
    } else {
      return '';
    }
  }

  getUnique(arr, comp) {
    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  }
  render() {
    return (
      <div id="hero-section">
        <div className="row">
          {/* HERO TEXT */}
          <div className="parallax-container">
            <div className="row container hero-content ">
              <div id="hero-text-div" className="col s12 m12 l8 ">
                <h5 className="white-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris vehicula sapien at turpis euismod viverra ac eget
                  lacus.
                </h5>
              </div>
              {/* HERO FORM */}
              <div id="hero-form-div" className="col s12 m12 l4 ">
                <div className="row">
                  <form id="hero-form" onSubmit={this.formSubmitHandler}>
                    <div className="card white hero-card">
                      <div className="card-content black-text">
                        <p className="center">Join us today!</p>
                        <div className="row">
                          {/* NAME FIELD */}
                          <div className="input-field col s12">
                            <i className="material-icons prefix">
                              account_circle
                            </i>
                            <input
                              id="icon_prefix"
                              type="text"
                              className="validate"
                              name="name"
                              value={this.state.formControls.name}
                              onChange={this.handleInputChange}
                              required
                            />
                            <label htmlFor="icon_prefix">Name</label>
                          </div>
                          {/* EMAIL FIELD */}
                          <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input
                              id="icon_email"
                              type="email"
                              className="validate"
                              name="email"
                              value={this.state.formControls.email}
                              onChange={this.handleInputChange}
                              required
                            />
                            <label htmlFor="icon_email">Email</label>
                          </div>
                          {/* PHONE FIELD */}
                          <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <select
                              name="country_code"
                              id=""
                              value={
                                this.state.formControls.country_code
                                  ? this.state.formControls.country_code
                                  : this.getUserCode()
                              }
                              onChange={this.handleInputChange}
                            >
                              <option disabled value="">
                                Code
                              </option>
                              {this.renderOptions()}
                            </select>
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="icon_telephone"
                              type="number"
                              className="validate"
                              name="telephone"
                              value={this.state.formControls.telephone}
                              onChange={this.handleInputChange}
                              required
                            />
                            <label htmlFor="icon_telephone">Telephone</label>
                          </div>
                          {/* ORGANIZATION FIELD */}
                          <div className="input-field col s12">
                            <i className="material-icons prefix">people</i>
                            <input
                              id="icon_organization"
                              type="text"
                              className="validate"
                              name="organization"
                              value={this.state.formControls.organization}
                              onChange={this.handleInputChange}
                              required
                            />
                            <label htmlFor="icon_organization">
                              Organization
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* SUBMIT FORM */}
                      <div className="card-action center">
                        <button
                          className="btn waves-effect waves-light"
                          type="submit"
                          name="action"
                        >
                          Submit
                          <i className="material-icons right">send</i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="parallax">
              <img src={bg} />
            </div>
          </div>
        </div>
        {/* Modal Structure */}
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Form Submitted</h4>
            <p>Name: {this.state.formControls.name}</p>
            <p>Email: {this.state.formControls.email}</p>
            <p>
              Telephone: +{this.state.formControls.country_code}{' '}
              {this.state.formControls.telephone}
            </p>

            <p>Organization: {this.state.formControls.organization}</p>
            <br />
            <p>
              Alternatively, the form object has been printed to the console
              log.
            </p>
          </div>
          <div className="modal-footer">
            <button
              onClick={this.handleModalClose}
              className="modal-close btn waves-effect waves-light"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
