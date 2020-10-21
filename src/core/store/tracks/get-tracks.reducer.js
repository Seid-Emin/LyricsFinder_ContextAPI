import axios from 'axios';


export const GET_TRACKS = 'GET_TRACKS';

export const getTracksAction = (dispatch) => {

    axios.get(`https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API_V1}${process.env.REACT_APP_TRACKS_GET}&apikey=${process.env.REACT_APP_MM_KEY}`)
         .then(res => {
             console.log(JSON.stringify(res.data.message.body.track_list))
             return dispatch({
                 type: GET_TRACKS,
                 payload: res.data.message.body.track_list
             })
         })
         .catch(error => {
             console.log(error);
         })
}

export const getTracksReducer = {
    type: GET_TRACKS,
    handler: (draft, action) => {
        draft.track_list = action.payload;
    }
}
