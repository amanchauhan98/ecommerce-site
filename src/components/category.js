import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { productCategories, setProducts } from '../redux/actions/actions';

const CategoryProducts = ({getAllProducts}) => {

    const [categoryProducts, setCategoryProducts] = useState([]);
    const dispatch = useDispatch()
    const [btnClass, setBtnClass] = useState(null)
    const fetchcategories = async() => {
        try {
            axios.get(`https://fakestoreapi.com/products/categories`)
            .then((response)=>{
                if(response.status === 200){
                    setCategoryProducts(response.data);
                    dispatch(productCategories(response.data))
                }else{
                    throw new Error("message : ", response.statusText, "status_code : ", response.status);
                }
            })
            
        } catch (error) {
            if(error){
                return new Error("something went wrong: " , error)
            }
        }
    }

    useEffect(()=>{
        fetchcategories();
    },[])

    const handleCategory = (event) => {
        const {name , id} = event.target;
        setBtnClass(Number(id));
        if(name){
            try {
                axios.get(`https://fakestoreapi.com/products/category/${name}`)
                .then((response)=>{
                    if(response.status === 200){
                        dispatch(setProducts(response.data));
                    }else{
                        throw new Error("message : ", response.statusText, "status_code : ", response.status);
                    }
                })
            } catch (error) {
                if(error){
                    return new Error("message : ", error)
                }
            }
        }
    }


    return <>
    <div className='flex justify-center gap-[3rem] max-h-max w-full '>
        <button id='all' name="" onClick={getAllProducts} onMouseEnter={(event)=> setBtnClass(event.target.id)}  className={`border-[0.01rem] border-gray-500 px-4 py-2  text-gray-800 capitalize rounded-md  transition-all duration-200 delay-100 ${btnClass === null || btnClass === "all" ? "bg-white" : "bg-gray-200"}  `}>{"all"}</button>

    {
        categoryProducts.map((data, i)=>{
            return <>
                <button name={data} id={i} onClick={handleCategory} key={i} className={`border-[0.01rem] border-gray-500 px-4 py-2  text-gray-800 capitalize rounded-md  transition-all duration-200 delay-100 ${btnClass === i ? "bg-white" : "bg-gray-200"} `}>{data}</button>
            </>
        })
    }
    </div>
    </>
}
export default CategoryProducts;