import React, { useState } from 'react'
import axios from 'axios';
import { Dropdown } from 'flowbite-react';
import {useDispatch} from 'react-redux'
import { setProducts } from '../redux/actions/actions';

const ShortLimitFeature = () => {
    const [filterText, setFilterText] = useState("Filter ")
    const [sortingText, setSortingText] = useState("Sorting ")
    const dispatch = useDispatch();


    const handleFilter = async(data) => {
        setFilterText(data.data);
        const limit = Number(data.data)
        try {
            await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
            .then((response)=>{
                if(response.status === 200){
                    dispatch(setProducts(response.data));
                }else{
                    throw new Error("message : ", response.statusText, " status code : ", response.status);
                }
            })
        } catch (error) {
            if(error){
                return new Error("message : ", error)
            }
        }
    }

    const handleSorting = async(data) => {
        setSortingText(data.data)
        const sorting = data.data
        try {
            await axios.get(`https://fakestoreapi.com/products?sort=${sorting}`)
            .then((response)=>{
                if(response.status === 200){
                    dispatch(setProducts(response.data))
                }else{
                    throw new Error("message : ", response.statusText, " status code : ", response.status);
                }
            })
        } catch (error) {
            if(error){
                return new Error("message : ", error)
            }
        }
    }


    return <>
    <div className='container w-11/12 mx-auto mt-[1rem] py-[4rem] overflow-hidden relative flex justify-between'>
        <div id='shortComp' className='max-w-max h-auto container'>
        <Dropdown label= {`${sortingText} Order`} placement='right' className='bg-white border-[0.01rem] z-10' dismissOnClick={true}>
        {
            shortCompdata.map((data , i)=>{
                return <>
                    <Dropdown.Item key={i} name={data.data} onClick={()=> handleSorting(data)}  className={`${sortingText === data.data ? "bg-[#0e7490] text-white" : ""}`}>{data.data}</Dropdown.Item>

                </>
            })
        }
            
            
        </Dropdown>
        </div>
        <div id='filterComp' className='max-w-max h-auto container'>
        <Dropdown label= {`${filterText} Products`}  placement='left' className={'bg-white border-[0.01rem] z-10'} dismissOnClick={true}>
            {
                filterCompdata.map((data, i)=>{
                    return <>
                        <Dropdown.Item name={data.data} onClick={()=>handleFilter(data)}  key={i} className={`${filterText === data.data ? "bg-[#0e7490] text-white" : ""}`} >{data.data} Products</Dropdown.Item>
                    </>
                })
            }
            
        </Dropdown>
        </div>
    </div>

    </>
}

const filterCompdata = [
    {
        id : 1,
        data : 5
    },
    {
        id : 2,
        data : 10
    },
    {
        id : 3,
        data : 15
    },
    {
        id : 4,
        data : 20
    }
]

const shortCompdata = [
    {
        id : 1,
        data : "asc"
    },
    {
        id : 2,
        data : "desc"
    }
]

export default ShortLimitFeature;