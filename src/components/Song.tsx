import React from 'react'
import { SongProps } from '../interfaces';

function Song({id, name,cover,artists,views}: SongProps):JSX.Element {

  return (
    <div style={{textAlign: "center"}}>
        <h1>{name}</h1>
        <img src={cover} />
        <p>views: {views}</p>
        {artists.map(artist => {
            return (
                <p key={id}>{artist}</p>
            )
        })}
    </div>
  )
}

export default Song
