import produce from 'immer';

export const DELETE_TRACK = 'DELETE_TRACK';

export const deleteTrackAction = (dispatch, tracksState, id) => {
    const nextState = produce(tracksState, draft => {
        draft.track_list = draft.track_list.filter(({ track }) => track.track_id !== id);
    });

    dispatch({
        type: DELETE_TRACK,
        payload: nextState
    })
}

export const deleteTracksReducer = {
    type: DELETE_TRACK,
    handler: (state, action) => {
        return action.payload;
    }
}
