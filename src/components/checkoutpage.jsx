'use client';
import React, { useEffect, useState } from "react";
import "./checkout.css";
import validator from "validator";
import {Country, State, City} from 'country-state-city'
import { useDispatch, useSelector } from "react-redux";
import { addUserAddress } from "../redux/actions/actions";
import { failed, success } from "./toaster/Toastify";
import { checkOutProducts } from "../redux/reducer/reducer";
import { useNavigate } from "react-router-dom";
import PopUpAlert from "../common/popup";

 const Checkout = () => {

    const [inputValue, setInputValue] = useState({});
    const dispatch = useDispatch();
    const [checkoutItems  , setCheckoutItems] = useState([]);
    const [productQty, setProductQty] = useState(2);
    const navigate = useNavigate()


    const handleInput = (event) => {
        const {name, value} = event.target;
        setInputValue({...inputValue, [name] : value})
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        try {
            
            console.log("test")
            if(validator.isEmail(inputValue.email) && validator.isMobilePhone(inputValue.phone_number)){
                // debugger
                dispatch(addUserAddress(inputValue))
                success("Address saved successfully!");
                // console.log("executed.");
            }else{
                failed("something went wrong! Please try once again")
                throw new Error("E-mail or Phone Number is Wrong! Please check!")
            }
            
        } catch (error) {
            if(error){

               console.error(error)
            }
        }
    }

    const checkout_products = useSelector((state)=> state.checkoutProducts.checkout_products)
    
    // checkout products 
    useEffect(()=>{
        setCheckoutItems(checkout_products);
        console.log(checkoutItems);
    },[checkout_products])

    // when checkoutItems is empty return to cart page.
//    useEffect(()=>{
//     if(checkoutItems.length === 0){
//      navigate('/cartpage', {replace : true})   
//     }
//    },[checkout_products]) 


  return (
    <div className="h-full w-full relative checkout">
      <form onSubmit={handleSubmitForm} className="div-3 ">
        <div className="checkout-information">
          <div className="div-4">
            <div className="text-[2rem] text-wrapper-29 ">Billing Information</div>
            <div className="from">
              <div className="div-5">
                <div className="frame">
                  <div className="div-6">
                    <div className="text-wrapper-30">User name</div>
                    <input
                    onChange={handleInput}
                    name="first_name"
                      type="text"
                      placeholder="eg : John Doe"
                      className="design-component-instance-node-2"
                      property1="normal"
                      text="First name"
                    />
                  </div>
                 
                  <input
                  onChange={handleInput}
                  name="last_name"
                    placeholder="Last Name"
                    type="text"
                    className="input-field-instance"
                    property1="normal"
                    text="Last name"
                  />
                </div>
                <div className="div-7">
                  <p className="company-name">
                    <span className="text-wrapper-31">Company Name </span>
                    <span className="text-wrapper-32">(Optional)</span>
                  </p>
                  <input
                  onChange={handleInput}
                  name="company_name"
                    placeholder="eg : Mobikasa Pvt. Ltd"
                    type="text"
                    className="design-component-instance-node-2"
                    hasDiv={false}
                    property1="normal"
                  />
                </div>
              </div>
              <div className="secondary-email">
                <div className="text-wrapper-30">Address</div>
                <input type="text"
                onChange={handleInput}
                name="user_address"
                placeholder="eg : Street, Locality , Area"
                  className="design-component-instance-node-2"
                  hasDiv={false}
                  property1="normal"
                />
              </div>
              <div className="div-5">
                {
                    dropdownData.map((data, i)=>{
                        return <>
                        <div key={i} className="div-6">
                        {/* {console.log('Data is',data?.dropdown.map((data)=> data.id))} */}
                            <div className="text-wrapper-30">{data.label_name}</div>
                            <DropDownComp handleInput={handleInput} dropdownData= {data.dropdown} id={data.dropdown[0].id} value={data.dropdown[0].value} />
                        </div>
                        </>
                    })   
                } 
              </div>
              <div className="div-5">
                <div className="div-7">
                  <div className="text-wrapper-30">Email</div>
                  <input type="text"
                    name="email"
                    onChange={handleInput}
                    placeholder="eg : abcxxx@gmail.com"
                    className="design-component-instance-node-2"
                    property1="normal"
                  />
                </div>
                <div className="div-7">
                  <div className="text-wrapper-30">Phone Number</div>
                  <input type='text'
                  name="phone_number"
                    onChange={handleInput}
                    placeholder="+91 XXXXXXXXXX"
                    className="design-component-instance-node-2"
                    property1="normal"
                  />
                </div>
              </div>
            </div>
            <div className="frame-2">
              <input
                onChange={handleInput}
                name="other_address"
                status="normal"
                type="checkbox"
                typeCheckboxStatusClassName="click-buttons-instance"
              />
              <div className="text-wrapper-33">Ship into different address</div>
            </div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-34">Payment Option</div>
            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/O6ED1zCK/img/line-31.svg"
            />
            <div className="payment-option">
              <div className="content-3">
              <div className="content-4">
                  <img
                    className="image"
                    alt="Image"
                    src="https://c.animaapp.com/O6ED1zCK/img/image-9@2x.png"
                  />
                  <div className="text-wrapper-35">Rayorpay</div>
                  <input
                    value={"rayorpay"}
                    name="payment"
                    onChange={handleInput}
                    status="normal"
                    type="radio"
                    typeCheckboxStatusClassName="click-buttons-instance"
                  />
                </div>
              </div>
              <img
                className="line-3"
                alt="Line"
                src="https://c.animaapp.com/O6ED1zCK/img/line-30.svg"
              />
              <div className="content-3">
                <div className="content-4">
                  <img
                    className="image"
                    alt="Image"
                    src="https://c.animaapp.com/O6ED1zCK/img/image-9@2x.png"
                  />
                  <div className="text-wrapper-35">UPI</div>
                  <input
                    value={"upi"}
                    name="payment"
                    onChange={handleInput}
                    status="normal"
                    type="radio"
                    typeCheckboxStatusClassName="click-buttons-instance"
                  />
                </div>
              </div>
              <img
                className="line-3"
                alt="Line"
                src="https://c.animaapp.com/O6ED1zCK/img/line-30.svg"
              />
              <div className="content-3">
              <div className="content-4">
                  <img
                    className="image"
                    alt="Image"
                    src="https://c.animaapp.com/O6ED1zCK/img/image-9@2x.png"
                  />
                  <div className="text-wrapper-35">Net Banking</div>
                  <input
                    name="payment"
                    value={"net banking"}
                    onChange={handleInput}
                    status="normal"
                    type="radio"
                    typeCheckboxStatusClassName="click-buttons-instance"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-4">
            <div className="text-wrapper-29">Additional Information</div>
            <div className="secondary-email">
              <p className="order-notes-optional">
                <span className="text-wrapper-37">Order Notes </span>
                <span className="text-wrapper-38">(Optional)</span>
              </p>
              <textarea
                rows={5}
                onChange={handleInput}
                name="other_address"
                placeholder="More about your shipping address..."
                className="input-field-2 align-text-top w-full"
                divClassName="design-component-instance-node-3">
               
                </textarea>
            
            </div>
            <div className="btn-container flex justify-end items-center w-full gap-4">
            <button type="submit"  className="bg-blue-500 text-white px-5 hover:bg-blue-600  py-2 rounded-sm font-medium ">Save</button>
            <button type="reset" className="bg-gray-500 text-white px-5 hover:bg-gray-600  py-2 rounded-sm font-medium ">Edit</button>

            </div>
          </div>
        </div>
        <ProductCartList checkoutItems = {checkoutItems} productQty={productQty}  />
      </form>
    </div>
  );
};

const DropDownComp = ({handleInput, dropdownData, id, value}) => {
    
    const handleDropdown = (event) => {
        handleInput(event)
    }
    
       
    return <>
    <select onChange={handleDropdown} name={id} value={value} className="text-gray-700 text-left rounded-none border-[0.01rem] border-black" style={{backgroundColor:"white", color:"gray", borderRadius:"0px", border:"1px solid black"}} label="Select" dismissOnClick={false}>
      <option>Dashboard</option>
      <option>Dashboard</option>
      <option>Dashboard</option>
      <option>Dashboard</option>
    </select>
    </>
}

const ProductCartList = ({checkoutItems, productQty}) => {

  const [productDiscount, setProductDiscount] = useState(20)
  const [productTax, setProductTax] = useState(30)
  const [showModal, setShowModal] = useState(false)

  const handleCancelOrder = ()=>{
    // do something.
    setShowModal(true);
  }


    return <>
    { showModal ? <PopUpAlert showModal={showModal} productCartData={ checkoutItems } id={"checkoutPage"} /> : null }
    <div className="order-summery">
          <div className="heading">
            <div className="text-wrapper-39">Order Summery</div>
          </div>
          <div className="frame-4">
          {
           checkoutItems && checkoutItems.map((items , id)=>{
            return <>
            <div key={id} className="product-3">
              <img
                className="image-2"
                alt="Image"
                src= {items.image}
              />
              <div className="content-5">
                <p className="p font-medium">{items.title}...</p>
                <div className="price">
                  <div className="text-wrapper-40">{productQty} x</div>
                  <div className="text-wrapper-41 font-medium">{items?.price}</div>
                </div>
              </div>
            </div>

            </>
           })
          }
            
          </div>
          <div className="total">
            <div className="content-6">
              <div className="frame-5">
                <div className="text-wrapper-40">Sub-total</div>
                <div className="text-wrapper-42">${productQty * checkoutItems[0]?.price ? productQty * checkoutItems[0]?.price : 0 }</div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-40">Shipping</div>
                <div className="text-wrapper-42">Free</div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-40">Discount</div>
                <div className="text-wrapper-42">${productDiscount ? productDiscount : 0}</div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-40">Tax</div>
                <div className="text-wrapper-42">${productTax ? productTax : 0}</div>
              </div>
            </div>
            <img
              className="line-4"
              alt="Line"
              src="https://c.animaapp.com/O6ED1zCK/img/line-26.svg"
            />
            <div className="frame-5">
              <div className="text-wrapper-43">Total</div>
              <div className="text-wrapper-44">${((productQty * checkoutItems[0]?.price) + (productDiscount + productTax)).toFixed(2)   }</div>
            </div>
            <div className="flex justify-start w-full h-fit gap-3">
            <button className="text-sm font-medium bg-green-500 text-white px-4 py-2 rounded-md">Place Order</button>
            <button onClick={handleCancelOrder} className="text-sm font-medium bg-red-500 text-white px-4 py-2 rounded-md">Cancel Order</button>
            </div>
          </div>
          
        </div>
    </>
}

const dropdownData = [
    {
        id : 1,
        label_name : "Country",
        dropdown : [{drop_name : "country", id:"country", value:""}]
    },
    {
        id : 2,
        label_name : "State",
        dropdown : [{drop_name : "State", id:"state", value:""}]
    },
    {
        id : 3,
        label_name : "City",
        dropdown : [{drop_name : "City", id:"city", value:""}]
    }
]

export default Checkout;
