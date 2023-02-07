import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        product: []
    },
    reducers: {
        productPlus: (state, idProduct) => {
            const productIndex = state.product.findIndex(elem => elem.id === idProduct.payload);
            if (productIndex === -1) {
                const obj = {
                    id: idProduct.payload,
                    count: 1
                }
                state.product = [...state.product, obj];
            } else {
                state.product[productIndex].count += 1;
            }
        },
        productMinus: (state, idProduct) => {
            const productIndex = state.product.findIndex(elem => elem.id === idProduct.payload);
            state.product[productIndex].count -= 1;
            if (state.product[productIndex].count === 0) {
                state.product = state.product.filter(elem => elem.count !== 0);
            };
        },
        deleteProduct: (state, idProduct) => {
            state.product = state.product.filter(elem => elem.id !== idProduct.payload)
        }
    }
});

export const { productPlus, productMinus, deleteProduct } = cartSlice.actions;

export const store = configureStore({
    reducer: cartSlice.reducer
});
