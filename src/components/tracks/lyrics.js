import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '../layout/spinner';

export const Lyrics = ({ match }) => {
    const [lyricsState, setLyricsState] = useState({
        track: {},
        lyrics: {}
    })

    useEffect(() => {
        axios.all([
            axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_V1}${process.env.REACT_APP_TRACK_LYRICS}${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`),
            axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_V1}${process.env.REACT_APP_TRACK_GET}${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        ])
            .then(resArr => {
                console.log(resArr)
                setLyricsState({
                    lyrics: resArr[0].data.message.body.lyrics,
                    track: resArr[1].data.message.body.track
                });
            })
            .catch(error => {
                console.log(error)
            });
    }, [match])
    const { track, lyrics } = lyricsState;
    if (track === 'undefined' || lyrics === 'undefined' || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
        return <Spinner/>
    } else {
        const { track_name, artist_name, album_id, primary_genres: { music_genre_list }, explicit } = track;
        const { music_genre: { music_genre_name } } = music_genre_list[0]
        const { lyrics_body } = lyrics;


        return (
            <><Link to='/' className='btn btn-sm mb-4'>Go Back</Link>
                {(track === 'undefined' || lyrics === 'undefined' || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0)
                    ? <Spinner/>
                    : <>
                        <div className="card">
                            <h5 className="card-header">
                                {track_name} by{' '} <span className="text-secondary">{artist_name}</span>
                            </h5>
                            <div className="card-body">
                                <p className="card-text">{lyrics_body}</p>
                            </div>
                        </div>
                        <ul className="list-group mt-3">
                            <li className="list-group-item">
                                <strong>Album ID</strong>: {album_id}
                            </li>
                            <li className="list-group-item">
                                <strong>Song Genre</strong>: {music_genre_name}
                            </li>
                            <li className="list-group-item">
                                <strong>Explicit Words</strong>: {explicit === 0 ? 'No' : 'Yes'}
                            </li>
                        </ul>
                    </>
                }
            </>
        );
    }
}
