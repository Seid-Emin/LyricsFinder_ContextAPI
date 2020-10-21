import axios from 'axios';
import produce from 'immer';

export const SEARCH_TRACK = 'SEARCH_TRACK';
export const START_SEARCHING = 'START_SEARCHING';
export const FINISHED_SEARCHING = 'FINISHED_SEARCHING';

export const searchTracksAction = (dispatch, tracksState, trackTitle) => {
    const nextState = produce(tracksState, draft => {
        draft.searching = true;
        draft.heading = `Searching for ${trackTitle}`;
    });

    dispatch({
        type: SEARCH_TRACK,
        payload: nextState
    });

    axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_V1}track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`,
        {
            Headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret',
                'Origin': 'X-Requested-With'
            }
        })
         .then(res => {
             const fetcedState = produce(tracksState, draft => {
                 draft.track_list = res.data.message.body.track_list;
                 draft.searching = false;
             });

             dispatch({
                 type: SEARCH_TRACK,
                 payload: fetcedState
             });
         })
         .catch(error => {
             console.log(error);
         });
}

export const searchTracksReducer = {
    type: SEARCH_TRACK,
    handler: (state, action) => {
        return action.payload;
    }
}

export const startSearchTracksReducer = {
    type: START_SEARCHING,
    handler: (state, action) => {
        return action.payload;
    }
}
