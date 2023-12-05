import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const HomePage = () => {
//   const history = useHistory();
  
//   const handleButtonClick = () => {
//     // Redirect to http://localhost:3000/spotify/login
//     history.push('http://localhost:3000/spotify/login');
//   };

  return (
    <div>
      <h1>Connect to Spotify</h1>
      {/* <button onClick={handleButtonClick}>Connect to Spotify</button>  */}
      {/* < button href='http://localhost:3000/spotify/login' > Log In </button> */}
      <Link to="http://localhost:3000/spotify/login">Log In</Link>


    </div>
  );
};

export default HomePage;