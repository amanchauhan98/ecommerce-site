import React, { useState } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Button, Modal } from 'flowbite-react';
import {useDispatch} from 'react-redux'
import { deleteAllCartProduct, deleteProductToCart } from '../redux/actions/actions';


const PopUpAlert = ({showModal, productCartData}) => {
    const [openModal, setOpenModal] = useState(showModal);
    const dispatch = useDispatch()

    const deleteCartProduct = () => {
        dispatch(deleteProductToCart(productCartData))
        if(productCartData.length > 1){
          dispatch(deleteAllCartProduct());
        }
    }

    return <>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button onClickCapture={deleteCartProduct} color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
}
export default PopUpAlert;