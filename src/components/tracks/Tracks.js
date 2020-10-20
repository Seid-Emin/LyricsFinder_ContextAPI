import React, { useContext, useEffect } from 'react';
import { TracksContext } from '../../core/store/addTrack/+tracks-context';

import { Spinner } from '../layout/spinner';
import { Track } from './track'

export const Tracks = () => {
    const { state: { track_list, heading }, actions: { GetTracksAction } } = useContext(TracksContext);

    // useEffect(() => {
    //     GetTracksAction();
    // }, [])


    return (
        <>
            {track_list === 'undefined' && track_list.length === 0
                ? <Spinner/>
                : <>
                    <h3 className="text-center mb-4">{heading}</h3>
                    <div className="row">
                        {track_list.map(({ track }) => <Track key={track.track_id} track={track}/>)}
                    </div>
                </>
            }
        </>
    )
}
