import React from 'react'
import {useSelector} from 'react-redux'

const Cart: React.FC = () => {

    const state = useSelector(state => state)
    console.log(state);

    return (
    <>
        <h1>Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </tbody>

        </table>
    </>
    )
}

export default Cart;