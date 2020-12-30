import React, { useContext, useCallback } from 'react';
import { useImmer } from 'use-immer'
import { v4 as uuidv4 } from 'uuid';

import { TracksContext } from '../../../core/store/tracks/+tracks-context';

import { TrackInput } from './track-input';

const initialNewTrackState = {
    track: {
        artist_name: '',
        track_name: '',
        album_name: '',
        track_id: ''
    }
}

export const AddTrack = () => {
    const { actions: { AddTrackAction } } = useContext(TracksContext);
    const [newTrack, setNewTrack] = useImmer(initialNewTrackState);

    const inputChangeHandler = useCallback((e) => {
        const { name, value } = e.target;
        setNewTrack(draft => {
            draft.track[name] = value;
            if (!draft.track.track_id) {
                draft.track.track_id = uuidv4();
            }
        });
    }, [setNewTrack])

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
                <TrackInput value={artist_name} name='artist_name' inputChangeHandler={inputChangeHandler} />
                <TrackInput value={track_name} name='track_name' inputChangeHandler={inputChangeHandler} />
                <TrackInput value={album_name} name='album_name' inputChangeHandler={inputChangeHandler} />
            </div>
            <button onClick={submitNewTrack} className='btn-lg btn-block mb-5'>Add Track</button>
        </>
    );
};

//artist_name, track_name, album_name, track_id
