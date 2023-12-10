import { ListGroup } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
// import { createPortal } from 'react-dom';

const CartList = ({showList}) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const cart_items = useSelector((state)=> state.cartInProducts.cartProduct)    

    // console.log(cart_items);
    
    

    useEffect(()=>{
        // const cartItems = localStorage.getItem("cart_products")
        setCartProducts(cart_items);
    },[cart_items])

    // calculate the totalprice of cart
    useEffect(()=>{
        let total = 0;

        cartProducts.forEach((cart)=>{
            total += parseFloat(cart.price)
        })
        setTotalPrice(total)
    })

    return <>
    {

        showList ? 
        <div className="absolute top-[4rem] left-[1rem] z-50 mt-4 mx-4 float-left ">
            <ListGroup className="w-[15rem] h-[14rem] overflow-auto scroll-auto">
                <ListGroup.Item style={{gap:"6rem"}} className='bg-gray-300'>
                    <p className='text-left'>Total Price</p>
                    <p className='font-bold text-right'>${parseFloat(totalPrice).toFixed(2)}</p>
                </ListGroup.Item>
                {
                    cartProducts.map((data, i)=>{
                        
                        return <>
                            <Link to={`cartpage/${data.id}`}><ListGroup.Item style={{gap:"3rem", display:"flex"}} key={i} className='justify-between gap-[3rem]'>
                                <p className='text-left'>{data.title.slice(0, 20)}</p>
                                <p className='font-bold text-right'>${data.price}</p> 
                             </ListGroup.Item></Link>
                        </>
                    })
                }    
            </ListGroup>
        </div> : null
    }
    </>
}
export default CartList;