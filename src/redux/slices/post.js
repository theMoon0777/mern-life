import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    post: {},
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        createPostStart: state => {
            state.loading = true;
            state.error = null;
        },
        createPostSuccess: state => {
            state.loading = false;
            window.history.back();
        },
        createPostFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
});

export const {actions, reducer} = postSlice;