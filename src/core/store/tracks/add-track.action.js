import produce from 'immer';

export const addTrackAction = (dispatch, tracksState, newTrack) => {
    const nextState = produce(tracksState, draft => {
        draft.track_list.push(newTrack);
    });

    return dispatch({
        payload: nextState
    });
}
