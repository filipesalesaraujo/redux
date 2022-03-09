import { IState } from "./../../index";
import { all, select, takeLatest } from "redux-saga/effects";
import { addProductToCartRequest } from "./actions";

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  console.log(currentQuantity);
  console.log("add to cart");
}

export default all([takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkProductStock)]);
