import React from "react";

function LoginForm({ isLoggedIn, setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Username" required />
      </div>
      <div>
        <input type="password" placeholder="Password" required />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
