import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {useEffect} from 'react'
// Define a type for the slice state
interface UserState {
  user: any ,
  userLoading:boolean
}


// Define the initial state using that type
const initialState: UserState = {
    user: null ,
    userLoading:false
}

export const userSlice = createSlice({
  name: 'user',
 
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
        state.user = action.payload
        
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
        state.userLoading = action.payload
    }
  },
})

export const { setUser ,  setUserLoading} = userSlice.actions



export default userSlice.reducer