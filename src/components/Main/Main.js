import React from "react";

import './Main.css'

const Main = ({favouriteSongs}) => {
  return (
    <div className="main">
      <div className="main--grid">
        {
          favouriteSongs.map(item => {
            return (
              <img 
                className="main--grid-cover main--grid-cover-hover"
                src={item.album.cover_medium}
                key={item.id}
                alt={`Cover of ${item.album.title} album`}
              ></img>
            )
          })
        }
      </div>
    </div>
  )
}

export default Main;