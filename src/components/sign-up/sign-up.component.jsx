import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState(state => ({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }));
    } catch (err) {
      console.log("error in creating user", err.message);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      [name]: value
    }));
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange} 
            label="Display Name" 
            type="text" 
            name="displayName" 
            value={displayName} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label="Email" 
            type="email" 
            name="email" 
            value={email} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label="Password" 
            type="password" 
            name="password" 
            value={password} 
            required 
          />
          <FormInput 
            handleChange={this.handleChange} 
            label="Confirm Password" 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword} 
            required 
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
};

export default SignUp;