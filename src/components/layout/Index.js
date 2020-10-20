import React from 'react';

import { Tracks } from '../tracks/Tracks';
import { Search } from '../tracks/search';
import { TrackInputs } from './inputs';

export const Index = () => {
    return (
        <>
            <Search/>
            <Tracks/>
            <TrackInputs/>
        </>
    )
}
