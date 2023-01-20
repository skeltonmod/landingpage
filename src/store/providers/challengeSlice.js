import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    challenge: {},
}

const challengeSlice = createSlice({
    name: 'challengeSlice',
    initialState: initialState,
    reducers: {
        setChallenge: ( state, action ) => {
            state.challenge = action.payload
        },
    },
});

export const { setChallenge } = challengeSlice.actions

export default challengeSlice.reducer
