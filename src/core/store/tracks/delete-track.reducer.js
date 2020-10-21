export const DELETE_TRACK = 'DELETE_TRACK';

export const deleteTrackAction = (dispatch, id) => {
    return dispatch({
        type: DELETE_TRACK,
        payload: id
    })
}

export const deleteTracksReducer = {
    type: DELETE_TRACK,
    handler: (draft, action) => {
        draft.track_list = draft.track_list.filter(({track}) => track.track_id !== action.payload )
    }
}
