import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import PopUpAlert from "./popup";
import axios from "axios";
import { addCheckoutProducts, addProductToCart, deleteAllCartProduct } from "../redux/actions/actions";
import { useParams } from "react-router-dom";
import { failed, success } from "../components/toaster/Toastify";
import {useNavigate} from 'react-router-dom'


const CartProductsList = () => {
  const [cartProductsItems, setCartProductsItems] = useState([]);
  const [quantity, setQuantity] = useState([])
  const cart_items = useSelector((state) => state.cartInProducts.cartProduct) 
  const [count, setCount] = useState(1)
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({})
  const dispatch = useDispatch()

  const navigate = useNavigate();

  // const { cartId } = useParams();
  // console.log(cartId)
  
  
  // console.log('cart items are',cart_items)

  // get the cart data from an api "https://fakestoreapi.com/carts"

  // const getCartProductdata = async() => {
  //   try {
  //       await axios.get(`https://fakestoreapi.com/carts`)
  //       .then((response)=>{
  //           if(response.status === 200){
  //               dispatch(addProductToCart(response.data))
  //               console.log(response.data);
  //           }else{
  //               throw new Error("message : ", response.statusText, " status code : ", response.status)
  //           }
  //       })

  //   } catch (error) {
  //       if(error){
  //           console.log("message : ", error)
  //       }
  //   }
  // } 


  useEffect(() => {
    // getCartProductdata()
    setCartProductsItems(cart_items);
  }, [cart_items]);

//   console.log(cart_items);

  const handleQuantity = (event) => {
    const {name, id} = event.target;
    console.log(id, name)
    // const cart_count = {};
    cartProductsItems.map((product)=>{
        if(name === "plus" && product.id === Number(id)){
            setCount(count + 1)
            setQuantity((prevValue)=>{
                return { ...prevValue , [`product_${id}`] : count }
            })
        }
        else if(name === "minus" && product.id === Number(id)){
            setCount(count - 1)
            if(count < 0 ){
              return alert("Error");
            }
            setQuantity((prevValue)=>{
                return { ...prevValue , [`product_${id}`] : count }
            })
        }
       
    })
    
  }

  // remove all cart items 
  const removeAllCartItems = () => {
    if(cartProductsItems && cartProductsItems.length !== 0){
      // dispatch(deleteAllCartProduct());
      setModalData(cartProductsItems);
      setShowModal(!showModal);
      // console.log("executed")
    }
  }
    // handle modal
    const handleModal = (event) => {
        const id = event.currentTarget.id
        cartProductsItems.map((product)=>{
            if(product.id == id){
                setModalData(product)
                setShowModal(!showModal)
            }
        })
    }

    // handle checkout
    const handleCheckOut = (cart) => {
      console.log(cart);
      try {
        if (cart) {
          dispatch(addCheckoutProducts(cart))
          success("added to checkout successfully!")
          navigate('/checkout', {replace : true})
        } else {
          failed("please select some products");
          throw new Error("please select some products")
        }
        
      } catch (error) {
        if(error){
          failed("something went wrong! Please try again later.")
          console.log(error);
        }
      }
    }

  return (
    <>
     
        { showModal ? <PopUpAlert showModal = {showModal} productCartData = {modalData} /> : null}
      <div className="w-10/12 mx-auto my-[4rem] p-[1rem] border-[0.01rem] h-auto relative">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              
              { cartProductsItems.length === 0 ? <EmptyCart /> :  cartProductsItems.map((cart, i) => {
                
                return (
                  <>
                    <div key={i} class="py-8 flex flex-wrap md:flex-nowrap">
                      {/* image div */}
                      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <img src={cart.image} className="h-[12rem] w-[12rem]"/>
                      </div>
                      <div class="md:flex-grow">
                        <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{cart.category}</span>
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                          {cart.title}
                        </h2>
                        <p class="leading-relaxed">
                         {cart.description}
                        </p>
                        <div id="price" className="mt-5 mb-3">
                            <h3 className="text-xl font-bold ">Price : <span className="font-bold">$ {cart.price}</span></h3>
                            
                        </div>
                        <div id="quantity" className="flex justify-start gap-0 items-center  my-3">
                            <button id={cart.id} onClick={handleQuantity} name="plus" className="p-3 bg-gray-400 font-bold text-white hover:bg-gray-500"><FaPlus/></button>
                            <input type="text" value={quantity[`product_${cart.id}`] ? quantity[`product_${cart.id}`] : 1  } className="w-[2.3rem] h-[2.5rem] outline-none border-[0.01rem] border-gray-400"/>
                            <button id={cart.id} onClick={handleQuantity} name="minus" className="p-3 bg-gray-400 font-bold text-white hover:bg-gray-500"><FaMinus/></button>
                        </div>
                        <div className="my-5 flex justify-start items-center gap-[1rem] ">
                        <Button onClick={()=> handleCheckOut(cart)} id={cart.id} className="bg-green-500 text-white hover:bg-green-600">Checkout</Button>
                        <Button onClick={handleModal} id={cart.id} className="bg-red-500 text-white hover:bg-red-600">Delete</Button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
        <div className="absolute top-[1rem] right-[2rem] overflow-hidden flex gap-5 justify-end items-center">
            <button className="bg-green-500 text-white px-5 py-2 rounded-md font-medium hover:bg-green-600">Checkout <span>{cartProductsItems?.length}</span></button>
            <button onClick={removeAllCartItems} className="bg-red-500 text-white px-5 py-2 rounded-md font-medium hover:bg-red-600">Remove <span>{cartProductsItems?.length}</span></button>

        </div>
      </div>
    
    </>
  );
};

const EmptyCart = () => {
    return <>
    <Card className="w-6/12 h-[60%] mx-auto container space-y-7">
      <h5 className=" font-bold tracking-tight text-center text-5xl text-gray-900 dark:text-white">
        Cart is Empty
      </h5>
      <p className="font-normal text-center text-gray-400 dark:text-gray-400 text-2xl ">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </>
}


export { CartProductsList };
