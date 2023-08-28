import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    allposts: [],
    post: {},
    msgs: [],
    loading: false,
    error: null,
    flag: false,
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
        },
        getPostsStart: state => {
            state.loading = true;
            state.error = null;
        },
        getPostsSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = null;
            state.posts = payload;
        },
        getPostsFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        getPostStart: state => {
            state.loading = true;
            state.error = null;
        },
        getPostSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = null;
            state.post = payload;
        },
        getPostFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        getAllPostsStart: state => {
            state.loading = true;
            state.error = null;
        },
        getAllPostsSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = null;
            state.allposts = payload;
        },
        getAllPostsFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        setTakingStart: state => {
            state.loading = true;
            state.error = null;
        },
        setTakingSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = null;
        },
        setTakingFailure: (state, {payload}) => {
            state.loading = false;
            state.error = null;
        },
        unsetTakingStart: state => {
            state.loading = true;
            state.error = null;
        },
        unsetTakingSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = null;
        },
        unsetTakingFailure: (state, {payload}) => {
            state.loading = false;
            state.error = null;
        },
        setflag : state => {
            state.flag = !state.flag;
        },
        postMsgStart: state => {
            state.loading = false;
            state.error = null;
        },
        getMsgStart: state => {
            state.loading = true;
            state.error = null;
        },
        getMsgSuccess: (state, {payload}) => {
            state.loading = false;
            state.msgs = payload;
            state.error = null;
        },
        getMsgFailure: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }

    }
});

export const {actions, reducer} = postSlice;