import { useState } from 'react';
import './form.css'

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError('Confirm password must be same as password');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && !confirmPasswordError) {
      alert('Form submitted successfully');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Please correct the errors in the form');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={emailError ? 'error' : ''}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordError ? 'error' : ''}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className={confirmPasswordError ? 'error' : ''}
          required
        />
        {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
      </div>
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  );
}
