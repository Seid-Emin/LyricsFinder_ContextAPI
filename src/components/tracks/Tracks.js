import React, { useContext } from 'react';
import { TracksContext } from '../../core/store/tracks/+tracks-context';

import { Spinner } from '../layout/spinner';
import { Track } from './track'


export const Tracks = () => {
    const { tracksState: { track_list, heading, searching }, actions: { GetTracksAction } } = useContext(TracksContext);

    // useEffect(() => {
    //     GetTracksAction();
    // }, [])


    return (
        <>
            <h3 className="text-center mb-4">{heading}</h3>
            {track_list === 'undefined' || track_list.length === 0 || searching
                ? <Spinner/>
                : <div className="row">
                    {track_list.map(({ track }) => <Track key={track.track_id} track={track}/>)}
                </div>
            }
        </>
    )
}
