import React, { Suspense, useEffect, useState } from 'react'
import { Card, Spinner } from 'flowbite-react';
import '../App.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, addProductToCart } from '../redux/actions/actions'; 
import CategoryProducts from './category';
import ShortLimitFeature from './SortLimit';
import SpinnerComp from '../common/spinner';
import ToastAlert from '../common/toast';
import { success } from './toaster/Toastify';

const Cards = () => {
    const [productData, setProductData] = useState([]);
    const [singleProduct, setSingleProduct] = useState();
    const [addToCartText, setAddToCartText] = useState("Add to Cart")
    const dispatch = useDispatch();


    const productAllData = useSelector((state)=> state.allProducts.products)

    const productsApi = async() => {

        try {
            await axios.get(`https://fakestoreapi.com/products`)
            .then((response)=>{
                if(response.status === 200){
                    setProductData(response.data);
                    dispatch(setProducts(response.data))
                }else{
                    throw new Error("message : " , response.statusText , " status code : ", response.status);
                }
            })
        } catch (error) {
            if(error){
                return  new Error("someting went wrong while fetching products data", {"error" : error})
            }
        }
    }

    useEffect(()=>{
        productsApi();
    },[])

    const CardsDescription = (event) =>{
        const {id} = event.target;
        productData.map((product)=>{
            if(id === product.id){
                console.log(product);
                setSingleProduct(product);
            }else{
               return product; 
            }
        })
    }

    const addToCart = (event) => {
        const {id} = event.target;
       productData && productData.map((product)=>{
            if(Number(id) === product.id){
                dispatch(addProductToCart(product))
                success("Successfully added to cart!", )
            }else{
                // console.log("error in add to cart function");
            }
        })
    }
    

    return <>
    
    <div className='my-[2rem] mx-auto container w-11/12 overflow-hidden relative '>
    <CategoryProducts  getAllProducts = {productsApi} />
    <ShortLimitFeature />
    <div className='container w-11/12 mx-auto my-[3rem] grid grid-cols-4 space-y-6 justify-center items-center gap-[1rem] overflow-auto'>
    
    { Object.keys(productAllData).length !== 0 ?
        productAllData.map((data, i)=>{
            return <>
            <Card 
        key={i}
        className="max-w-sm h-[30rem] "
        imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
        onClick={CardsDescription}
        id={data.id}
        
        >
        <img src={data.image} className='h-[13rem] w-9/12 mx-auto' alt={data.title}/>
        <NavLink to={`/desc/${data.id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.title.slice(0, 20)}...
            </h5>
        </NavLink>
        <div className='text-left text-sm text-gray-400 '>
            <p className=''>{data.description.slice(0, 60)}...</p>
        </div>
        <div className="mb-5 mt-2.5 flex items-center">
            <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <svg
            className="h-5 w-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            5.0
            </span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${data.price}</span>
            <button
            onClick={addToCart}
            id={data.id}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
            {addToCartText}
            </button>
        </div>
        </Card>

            </>
        }) : <SpinnerComp/>
    }
        
    </div>
    </div>
   
    </>
}
export default Cards;