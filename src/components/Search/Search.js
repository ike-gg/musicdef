import React, {useState, useEffect} from 'react';
import './Search.css'

import SearchResult from './SearchResult/SearchResult';

const Search = ({setFavouriteSongs, favouriteSongs}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  }

  useEffect(() => {
    if (searchValue.length > 3) {
      fetch(`http://api.deezer.com/search?q=${searchValue}`)
      .then(response => response.json())
      .then(parsedResponse => {
        let tracksFound = parsedResponse.data.slice(0,3)
        setSearchResult(tracksFound);
      })
    }
  }, [searchValue])

  return (
    <div 
      className="search-box"
      onMouseEnter={() => {setSearchFocus(true)}}
      onMouseLeave={() => {setSearchFocus(false)}}
    >
      <input 
        className='search-input'
        type="text"
        placeholder="Type here artist, title or lyrics to find your track!"
        value={searchValue}
        onChange={handleSearch}
      />
      {
        searchFocus && 
        <div 
          className="search-results-box"
        >
          {
            searchResult.map(item => {
              return (
                <SearchResult 
                  item={item} 
                  key={item.id} 
                  setFavouriteSongs={setFavouriteSongs}
                  favouriteSongs={favouriteSongs}
                />
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Search;