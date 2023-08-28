import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    supports: [],
    loading: false,
    error: null,
    flag: false,
};

const supportSlice = createSlice({
    name: "support",
    initialState,
    reducers: {
        postSupportStart: state => {
            state.loading = true;
            state.error = null;
        },
        getSupport: state => {
            state.loading = true;
            state.error = null;
        },
        getSupportSuccess: (state, {payload}) => {
            state.supports = payload;
            state.loading = false;
            state.error = null;
        },
        getSupportFail: (state, {payload}) => {
            state.error = payload;
            state.loading = false;
        }
    }
});

export const {actions, reducer} = supportSlice;