import {all} from 'redux-saga/effects'

import cart from './cart/saga';

export default function* rootSaga(): any{
    return yield all([
        cart,
    ])
}