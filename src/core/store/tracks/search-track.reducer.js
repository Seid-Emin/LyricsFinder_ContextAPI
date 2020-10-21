import axios from 'axios';

export const SEARCH_TRACK = 'SEARCH_TRACK';
export const START_SEARCHING = 'START_SEARCHING';
export const FINISHED_SEARCHING = 'FINISHED_SEARCHING';

export const searchTracksAction = (dispatch, trackTitle) => {
    dispatch({
        type: START_SEARCHING,
        payload: { searching: true, heading:  trackTitle}
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
             return dispatch({
                 type: SEARCH_TRACK,
                 payload: { tracks_list: res.data.message.body.track_list, searching: false }
             });

         })
         .catch(error => {
             console.log(error);
         });
}

export const searchTracksReducer = {
    type: SEARCH_TRACK,
    handler: (draft, action) => {
        draft.track_list = action.payload.tracks_list;
        draft.searching= action.payload.searching;
    }
}

export const startSearchTracksReducer = {
    type: START_SEARCHING,
    handler: (draft, action) => {
        draft.searching= action.payload.searching;
        draft.heading = `Searching for ${action.payload.heading}`;
    }
}
