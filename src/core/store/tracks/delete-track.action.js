import produce from 'immer';

export const deleteTrackAction = (dispatch, tracksState, id) => {
    const nextState = produce(tracksState, draft => {
        draft.track_list = draft.track_list.filter(({ track }) => track.track_id !== id);
    });

    dispatch({
        payload: nextState
    });
}
