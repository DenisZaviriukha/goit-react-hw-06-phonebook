import { createSlice } from "@reduxjs/toolkit"

export const contactFilterSlice = createSlice({
    name: "filterArray",
    initialState: "",
    reducers: {

        changeFilter(state, action) {
            return state = action.payload
        },

    }
})