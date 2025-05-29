import { useState } from 'react';

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const toggleLogin = () => {
    setLoggedIn(prev => !prev);
  };

  return (
    <nav>
      <h1>Assignment 1</h1>
      <button onClick={toggleLogin}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
}

export default NavBar;
