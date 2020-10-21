import produce from 'immer';

export const ADD_TRACK = 'ADD_TRACK';

export const addTrackAction = (dispatch, tracksState, newTrack) => {
    const nextState = produce(tracksState, draft => {
        draft.track_list.push(newTrack);
    })

    return dispatch({
        type: ADD_TRACK,
        payload: nextState
    })
}

export const addTracksReducer = {
    type: ADD_TRACK,
    handler: (state, action) => {
        return action.payload
    }
}
