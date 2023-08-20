import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'redux',
    initialState: { 
        value: {
           products: []

        } 
    },
    reducers: {

        getProducts: (state, action) => {
            state.value.products = action.payload
        },
    
    }
})

export const {
    getProducts
} = Slice.actions

export default Slice.reducer