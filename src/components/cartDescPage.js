import React from 'react'
import { CartProductsList } from '../common/cartProductList'
const CartDescPage = () => {
    return <>
        <div className='relative w-full h-fit overflow-hidden'>
            <div className='my-4 '>
                <h1 className='text-6xl font-bold text-center text-gray-600'>Products Cart</h1>
            </div>
            <CartProductsList />
        </div>
    </>
}
export default CartDescPage