import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        password: ''
    },
     reducers: {
        setUserName(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload
        }
     }
})

export const {setUserName, setEmail, setPassword} = userSlice.actions

export const username = (state) => state.user.username
export const email = (state) => state.user.email
export const password = (state) => state.user.password

export default userSlice.reducer