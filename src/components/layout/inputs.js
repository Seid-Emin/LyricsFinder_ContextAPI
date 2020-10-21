import React, { useContext } from 'react';
import { useImmer } from 'use-immer'
import { v4 as uuidv4 } from 'uuid';
import { TracksContext } from '../../core/store/tracks/+tracks-context';

const initialNewTrackState = {
    track: {
        artist_name: '',
        track_name: '',
        album_name: '',
        track_id: ''
    }
}

export const TrackInputs = () => {
    const { actions: { AddTrackAction } } = useContext(TracksContext);
    const [newTrack, setNewTrack] = useImmer(initialNewTrackState);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setNewTrack(draft => {
            draft.track[name] = value;
            if (!draft.track.track_id) {
                draft.track.track_id = uuidv4();
            }
        });
    }

    const submitNewTrack = () => {
        const isAnyFieldTouched = Object.values(newTrack.track).filter(value => value !== '').length;

        if (isAnyFieldTouched) {
            AddTrackAction(newTrack);
            setNewTrack(draft => {
                draft.track = initialNewTrackState.track;
            });
        }
    }

    const { artist_name, track_name, album_name } = newTrack.track;


    return (
        <>
            <div className='input-group mb-3'>
                <div className="input-group-prepend">
                    <input type='text'
                           className='form-control input-group-text mr-3'
                           value={artist_name}
                           name='artist_name'
                           onChange={inputChangeHandler}
                           placeholder='artist_name'/>
                </div>
                <div className="input-group-prepend">
                    <input type='text'
                           className='form-control input-group-text mr-3'
                           value={track_name}
                           name='track_name'
                           onChange={inputChangeHandler}
                           placeholder='track_name'/>
                </div>
                <div className="input-group-prepend">
                    <input type='text'
                           className='form-control input-group-text'
                           value={album_name}
                           name='album_name'
                           onChange={inputChangeHandler}
                           placeholder='album_name'/>
                </div>
            </div>
            <button onClick={submitNewTrack} className='btn-lg btn-block mb-5'>Add Track</button>
        </>
    );
};

//artist_name, track_name, album_name, track_id
