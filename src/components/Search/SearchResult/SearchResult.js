import React from "react";
import './SearchResult.css'

const SearchResult = (props) => {
  const { artist, album, title_short, preview } = props.item;
  const { favouriteSongs, setFavouriteSongs } = props;

  const [ isFavourite, setIsFavourite] = React.useState(false);
  
  const [ audioPreview, setAudioPreview] = React.useState({
    audio: new Audio(preview),
    isPlaying: false
  });

  const handlePreview = (event) => {
    event.preventDefault();
    audioPreview.isPlaying 
    ? audioPreview.audio.pause() 
    : audioPreview.audio.play(); 
    audioPreview.audio.volume = 0.2;
    setAudioPreview(prevState => {
      return {
        ...prevState,
        isPlaying: !prevState.isPlaying
      }
    })
  }

  const handleFavourite = (event) => {
    setFavouriteSongs(prevState => {
      if (isFavourite) {
        setIsFavourite(false);
        const indexOfItem = prevState.findIndex(
          favItem => favItem.id == props.id
        )
        prevState.splice(indexOfItem, 1);
        return [...prevState];
      } else {
        return [...prevState, props.item]
      }
    })
  }

  React.useEffect(() => {
    favouriteSongs.find((favItem) => {
      if (favItem.id == props.item.id) {
        setIsFavourite(true);
        return true;
      }
    })
  }, [favouriteSongs, props.item.id])

  return (
    <div 
      className={
        isFavourite 
        ? "search-result search-result-favourite"
        : "search-result"
      } 
    >
      <img 
        src={album.cover}
        alt="Album cover"
        onClick={handlePreview}
        className="search-result--cover"
      />
      <div className="search-result-details">
        <h1 className="search-result--title">{title_short}</h1>
        <h2 className="search-result--author">by {artist.name}</h2>
        <h3 className="search-result--album">{album.title}</h3>
      </div>
      <button 
        className="btn-primary search-result--fav-btn"
        onClick={handleFavourite}
      >{
        isFavourite ? "Unmark as" : "Mark as"
      }<br/>favourite</button>
    </div>
  )
}

export default SearchResult;