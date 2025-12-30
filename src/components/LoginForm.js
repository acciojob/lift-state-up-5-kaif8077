import React from "react";

function LoginForm({ setIsLoggedIn }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); 
  };

  return (
    <form style={{display:"flex" , gap:"10px"}} onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
