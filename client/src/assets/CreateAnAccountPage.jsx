import React, { useState } from 'react';

const CreateAnAccountPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    // Implement actual registration logic here (e.g., calling an API)
    // For simplicity, check if all fields are filled and passwords match
    if (username && email && password && password === confirmPassword) {
      // Successful registration logic (you may redirect the user to another page)
      console.log('Registration successful!');
    } else {
      setError('Please fill in all fields and ensure passwords match.');
    }
  };

  return (
    <div className="registration-container">
      <h2>Create an Account</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default CreateAnAccountPage;
