import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/interfaces/IProduct";

const initialState: CartSliceState[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const cartList = JSON.parse(JSON.stringify(state));

      const verifyIfAlreadyIncluded = cartList.find(
        (product: CartSliceState) => product.id === action.payload.id
      );

      let updatedCart: CartSliceState[];
      if (verifyIfAlreadyIncluded) {
        updatedCart = cartList.map((product: CartSliceState) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        updatedCart = [...cartList, { ...action.payload, quantity: 1 }];
      }

      return updatedCart;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cartList = JSON.parse(JSON.stringify(state));

      const filter = cartList.filter(
        (product: IProduct) => product.id !== action.payload
      );

      return [...filter];
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const cartList = JSON.parse(JSON.stringify(state));

      const updatedCart = cartList.map((product: CartSliceState) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      return updatedCart;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const cartList = JSON.parse(JSON.stringify(state));

      const updatedCart = cartList.map((product: CartSliceState) => {
        if (product.id === action.payload) {
          const updatedProduct = { ...product, quantity: product.quantity - 1 };
          return updatedProduct.quantity > 0 ? updatedProduct : null;
        } else {
          return product;
        }
      }).filter(Boolean);

      return updatedCart;
    },
    manualUpdate: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const cartList = JSON.parse(JSON.stringify(state));

      const updatedCart = cartList.map((product: CartSliceState) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: action.payload.quantity };
        } else {
          return product;
        }
      });

      return updatedCart;
    },
  },
});

/* Types */
export interface CartSliceState extends IProduct {
  quantity: number;
}
