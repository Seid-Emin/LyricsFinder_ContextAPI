import React, { useContext, useState } from 'react';
import { TracksContext } from '../../core/store/tracks/+tracks-context';

export const Search = () => {
    const [trackTitle, setTrackTitle] = useState('');
    const { actions: { SearchTracksAction } } = useContext(TracksContext);

    const findTrack = (e) => {
        e.preventDefault();
        SearchTracksAction(trackTitle);
        setTrackTitle('');
    }


    return (
        <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
                <i className="fas fa-music"/> Search For A Song
            </h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form onSubmit={(e) => findTrack(e)}>
                <div className="form-group">
                    <input
                        type='text'
                        className="form-control form-control-lg"
                        placeholder='Song title...'
                        name='trackTitle'
                        value={trackTitle}
                        onChange={(e) => setTrackTitle(e.target.value)}/>
                </div>
                <button className="btn btn-lg btn-dark btn-block mb-5" type='submit'>Get Track Lyrics</button>
            </form>
        </div>
    );
}
