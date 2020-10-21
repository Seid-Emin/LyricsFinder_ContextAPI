export const ADD_TRACK = 'ADD_TRACK';

export const addTrackAction = (dispatch, newTrack) => {
    return dispatch({
        type: ADD_TRACK,
        payload: newTrack
    })
}

export const addTracksReducer = {
    type: ADD_TRACK,
    handler: (draft, action) => {
        draft.track_list.push(action.payload);
    }
}
