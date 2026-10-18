import React, { useRef, useState } from 'react';

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" ref={usernameRef} required />
        <br /><br />

        <label>Password: </label>
        <input type="password" ref={passwordRef} required />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Information</h2>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;