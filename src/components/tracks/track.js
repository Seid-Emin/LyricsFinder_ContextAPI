import React, { useContext, memo } from 'react';
import { Link } from 'react-router-dom'
import { TracksContext } from '../../core/store/tracks/+tracks-context';

export const Track = memo(function Track({ track: { artist_name, track_name, album_name, track_id } }) {
    const { actions: { DeleteTrackAction } } = useContext(TracksContext);


    return (
        <div className='col-md-6'>
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <button onClick={() => DeleteTrackAction(track_id)}
                            className="btn btn-outline-danger btn-sm float-right">X
                    </button>
                    <h5>{artist_name}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-play"/> Track</strong>: {track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc"/> Album</strong>: {album_name}
                    </p>
                    <Link
                        to={`lyrics/track/${track_id}`}
                        className='btn btn-dark btn-block'
                    >
                        <i className="fas fa-chevron-right"/> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
});
