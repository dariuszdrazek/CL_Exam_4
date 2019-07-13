import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactForm extends Component {
     constructor(props) {
          super(props);

          this.state = {
               message: '',
               text: '',
               email: '',
               textarea: '',
               isValid: true
          };
     }

     handleChange = e => {
          this.setState({
               [e.target.id]: e.target.value
          });
     };

     handleSubmit = e => {
          e.preventDefault();
          if (this.state.text.length < 2) {
               this.setState(prevState => ({
                    message: (prevState.message =
                         'Pole imię musi zawierać co najmniej 2 znaki'),
                    isValid: false
               }));
          }
          if (
               this.state.email.length < 3 ||
               this.state.email.indexOf('@') === -1
          ) {
               this.setState({
                    message: 'Pole imię musi zawierać co najmniej 2 znaki',
                    isValid: false
               });
          }
          if (this.state.textarea.length < 1) {
               this.setState({
                    message: 'Pole wiadomość musi zostać uzupełnione',
                    isValid: false
               });
          }

          if (this.state.isValid) {
               this.setState({
                    message: 'Dziękujemy za wiadomość'
               });
          }
     };

     render() {
          console.log(this.state.text);
          return (
               <>
                    <p>{this.state.message}</p>
                    <form onSubmit={this.handleSubmit}>
                         <input
                              type="text"
                              className="form-control"
                              id="text"
                              value={this.state.text}
                              onChange={this.handleChange}
                         />
                         <input
                              type="email"
                              className="form-control"
                              id="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                         />
                         <textarea
                              className="form-control"
                              id="textarea"
                              value={this.state.textarea}
                              onChange={this.handleChange}
                         />
                         <input
                              type="submit"
                              className="btn btn-primary"
                              value="Submit"
                         />
                    </form>
               </>
          );
     }
}

class App extends Component {
     render() {
          return (
               <>
                    <ContactForm />
               </>
          );
     }
}

ReactDOM.render(<App />, document.getElementById('app'));
export { App, ContactForm };
