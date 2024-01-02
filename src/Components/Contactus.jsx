import React, { Component } from 'react';
import "./Contactus.css";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic here to send the form data to a server or perform other actions.
    // For this example, we'll just set submitted to true.
    this.setState({ submitted: true });
  };

  render() {
    const { name, email, message, submitted } = this.state;

    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>Please fill out the form below to get in touch with us.</p>

        {submitted ? (
          <div className="success-message">
            Thank you for contacting us. We will get back to you shortly.
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={this.handleChange}
                rows="4"
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactUs;
