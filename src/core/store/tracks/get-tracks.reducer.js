import produce from 'immer';

import axios from 'axios';

export const GET_TRACKS = 'GET_TRACKS';

export const getTracksAction = (dispatch, tracksState) => {

    axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_V1}${process.env.REACT_APP_TRACKS_GET}&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res => {
             const nextState = produce(tracksState, draft => {
                 draft.track_list = res.data.message.body.track_list;
             });

             dispatch({
                 type: GET_TRACKS,
                 payload: nextState
             });
         })
         .catch(error => {
             console.log(error);
         })
}

export const getTracksReducer = {
    type: GET_TRACKS,
    handler: (state, action) => {
        return action.payload;
    }
}
