import {  ListGroup, TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchFilter = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchProductData, setSearchProductData] = useState([]);
    const product_data = useSelector((state)=> state.allProducts.products)
    const [outputFilterValue, setOutputFilterValue] = useState([]);

    useEffect(()=>{
        setSearchProductData(product_data)
    },[searchProductData,searchValue])
    

    const handleSearch = (event) => {
        const {  value } = event.target;
        setSearchValue(value);
    }

    // console.log(searchProductData);

    const submitSearch = (event) => {
        event.preventDefault();
        const filteredProducts = searchProductData.filter((product)=>{
            if(product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            product.category.toLowerCase().includes(searchValue.toLowerCase())
            ){
                return product;
            }
        })
        // console.log("find : ",filteredProducts);
        setOutputFilterValue(filteredProducts);
    }



  return (
    <>
      {/* <h1>Search filter</h1> */}
      <form onSubmit={submitSearch} className="w-full  overflow-hidden relative flex items-center justify-center">
        {/* <div id="item-dropdown" className="">
            <Dropdown label="Dropdown" inline>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown>
        </div> */}
        <div className="w-full flex items-center outline-none ring-0 ">
          <TextInput
            style={{ borderRadius: "0px" }}
            className="w-full rounded-[0px]"
            id="search_product"
            type="text"
            icon={IoIosSearch}
            placeholder="Search Product Categories , Product Title ..."
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
        <button className="bg-gray-200 text-gray-600 px-2 py-[9px] active:bg-gray-300 font-semibold">
          Search
        </button>
      </form>
      
       {
        outputFilterValue.length !== 0 ? 
         <div className="flex justify-center z-50 w-full  h-auto ">
          <ListGroup style={{borderRadius:"0px", marginTop:"4px"}} className="w-full overflow-auto ">
          {
            outputFilterValue.map((data, i)=>{
                return <>
                    <NavLink to={`/desc/${data.id}`}><ListGroup.Item key={i} className="z-50">{data.title.slice(0, 30)}</ListGroup.Item></NavLink>
                </>
            })
          }
          </ListGroup>
        </div> : null}
     
    </>
  );
};
export default SearchFilter;
