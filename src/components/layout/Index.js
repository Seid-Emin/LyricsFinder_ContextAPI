import React from 'react';

import { Tracks } from '../tracks/Tracks';
import { Search } from '../tracks/search';
import { AddTrack } from './add-track/add-track';

export const Index = () => {
    return (
        <>
            <Search/>
            <Tracks/>
            <AddTrack/>
        </>
    )
}
