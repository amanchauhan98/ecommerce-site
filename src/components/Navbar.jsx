import React, { useEffect, useState } from 'react';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import {useSelector} from 'react-redux'
import CartList from '../common/cartlist';
import { Link } from 'react-router-dom';

const NavbarComp =()=> {

    const [handleCart, setHandleCart] = useState([])
    const [showCartList, setShowList] = useState(false);

    const cartNumber = useSelector((state)=> state.cartInProducts.cartProduct)

    localStorage.setItem("cartNumber", cartNumber);
    useEffect(()=>{

        setHandleCart(cartNumber);
    },[cartNumber])


  return <>
    <Navbar className='bg-gray-200' fluid rounded>
      <Navbar.Brand>
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        { handleCart && handleCart.length === 0 ? "" :
        <div className='relative mr-[2rem]'>
            <Button onClick={()=> setShowList(!showCartList)} className='bg-gray-600 text-white font-bold'>Cart &nbsp;  
            <span>{handleCart.length}</span>
            </Button>
        </div>
        }
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Commerce</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Link to={'/cartpage'}>Cart</Link>
      </Navbar.Collapse>
    </Navbar>
    <CartList showList = {showCartList} />
  </>
}

export default NavbarComp;