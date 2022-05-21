import React, { useEffect } from "react";
import './style.css';

import Nav from './components/Nav/Nav.js';
import Search from './components/Search/Search.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

const App = () => {

  const [favouriteSongs, setFavouriteSongs] = React.useState([]);

  useEffect(() => {
    const savedFavouriteSongs = localStorage.getItem('favouriteSongs');
    if (savedFavouriteSongs) {
      setFavouriteSongs(JSON.parse(savedFavouriteSongs));
    }
  }, [])

  useEffect(() => {
    const stringifyFavSongs = JSON.stringify(favouriteSongs);
    localStorage.setItem('favouriteSongs', stringifyFavSongs);
  }, [favouriteSongs])

  return (
    <div className="container">
      <Nav/>
      <div className="main-content">
        <Search 
          favouriteSongs={favouriteSongs}
          setFavouriteSongs={setFavouriteSongs}
        />
        <Main
          favouriteSongs={favouriteSongs}
        />
      </div>
      <Footer
        setFavouriteSongs={setFavouriteSongs}
      />
    </div>
  )
}

export default App;