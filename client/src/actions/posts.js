import * as api from '../api';

// Action Creators: functions that return an action
// use redux-thunk

export const getPosts = () => async (dispatch) => {
    // const action = { type: "FETCH_ALL", payload: []}
    try {
        const { data } = await api.fetchPosts();
        // dispatch(action);
        dispatch({ type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}