import axios from 'axios';
import produce from 'immer';

export const searchTracksAction = (dispatch, tracksState, trackTitle) => {
    const nextState = produce(tracksState, draft => {
        draft.searching = true;
        draft.heading = `Searching for ${trackTitle}`;
    });

    dispatch({
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
             const fetchedState = produce(tracksState, draft => {
                 draft.track_list = res.data.message.body.track_list;
                 draft.searching = false;
             });

             dispatch({
                 payload: fetchedState
             });
         })
         .catch(error => {
             console.log(error);
         });
}
