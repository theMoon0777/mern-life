import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    posts: [],
    loading: false,
    error: null,
    flag: false,
};

const supportSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        getUsers: state => {
            state.loading = true;
            state.error = null;
        },
        getUsersSuccess: (state, {payload}) => {
            state.users = payload;
            state.loading = false;
            state.error = null;
        },
        getUsersFail: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },
        getPosts: state => {
            state.loading = true;
            state.error = null;
        },
        getPostsSuccess: (state, {payload}) => {
            state.posts = payload;
            state.loading = false;
            state.error = null;
        },
        getPostsFail: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        },
    }
});

export const {actions, reducer} = supportSlice;