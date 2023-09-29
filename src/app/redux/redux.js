import { createSlice } from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'redux',
    initialState: { 
        value: {
           products: [],
           cart:[],
           cartIsOpen: false,

        } 
    },
    reducers: {

        getProducts: (state, action) => {
            state.value.products = action.payload
        },
        changeCartModalState: (state, action) => {
            state.value.cartIsOpen = !state.value.cartIsOpen

        },
        addProductToCart : (state, action) => {
            state.value.cart.push(action.payload)
        },
        removeProductToCart: (state, action) => {
            state.value.cart.filter(prod => prod.id != action.payload)
        }
    
    }
})

export const {
    getProducts,
    addProductToCart,
    removeProductToCart,
    changeCartModalState
} = Slice.actions

export default Slice.reducer