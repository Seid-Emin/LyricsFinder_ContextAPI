import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TracksContext } from '../../core/store/addTrack/+tracks-context';

export const TrackInputs = () => {
    const { actions: {AddTrackAction} } = useContext(TracksContext);
    const [newTrack, setNewTrack] = useState({
        artist_name: '',
        track_name: '',
        album_name: '',
        track_id: ''
    });

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setNewTrack(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const submitNewTrack = () => {
        const addedTrack = {
            track: {
                ...newTrack,
                track_id: uuidv4()
            }
        }
        AddTrackAction(addedTrack);
        // dispatch({type: 'ADD_TRACK', payload: addedTrack});
    }

    const { artist_name, track_name, album_name } = newTrack;


    return (
        <>
            <div className='input-group mb-3'>
                <div className="input-group-prepend">
                    <input type='text'
                           className='form-control input-group-text'
                           value={artist_name}
                           name='artist_name'
                           onChange={inputChangeHandler}
                           placeholder='artist_name'/>
                </div>
            </div>
            <div className='input-group mb-3'>
                <div className="input-group-prepend">
                    <input type='text'
                           className='form-control input-group-text'
                           value={track_name}
                           name='track_name'
                           onChange={inputChangeHandler}
                           placeholder='track_name'/>
                </div>
            </div>
            <div className='input-group mb-3'>
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
