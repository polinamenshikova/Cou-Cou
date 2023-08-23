import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity += 1;
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].subtotal =
          state.cartItems[itemIndex].price *
          state.cartItems[itemIndex].cartTotalQuantity;
      } else {
        const tempProduct = {
          ...action.payload,
          cartTotalQuantity: 1,
          quantity: 1,
          subtotal: action.payload.price,
        };
        state.cartItems.push(tempProduct);
      }

      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartTotalQuantity,
        0
      );

      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.subtotal,
        0
      );
    },
    decreaseAmount(state, action) {
      const itemId = action.payload.id;

      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === itemId
      );

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
          state.cartItems[itemIndex].cartTotalQuantity -= 1;
          state.cartItems[itemIndex].subtotal =
            state.cartItems[itemIndex].price *
            state.cartItems[itemIndex].cartTotalQuantity;
        } else if (state.cartItems[itemIndex].cartTotalQuantity === 1) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== itemId
          );
        }

        state.cartTotalQuantity = state.cartItems.reduce(
          (total, item) => total + item.cartTotalQuantity,
          0
        );

        state.cartTotalQuantity = state.cartItems.reduce(
          (total, item) => total + item.cartTotalQuantity,
          0
        );
      }
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );

      state.cartItems = updatedCartItems;

      state.cartTotalQuantity = updatedCartItems.reduce(
        (total, item) => total + item.cartTotalQuantity,
        0
      );

      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.subtotal,
        0
      );
    },
    clearCart(state, action) {
      state.cartItems = [];

      state.cartTotalQuantity = state.cartItems.reduce(
        (total, item) => total + item.cartTotalQuantity,
        0
      );

      state.cartTotalAmount = state.cartItems.reduce(
        (total, item) => total + item.subtotal,
        0
      );
    },
  },
});

export const { addItem, decreaseAmount, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
