import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  function ToastAlert({toastMessage, toastType}){
    
    const notify = () =>{
        switch(toastType){
            case "success":
                return toast.success({toastMessage}, {position: toast.POSITION.TOP_RIGHT});
            case "error":
                return toast.error({toastMessage}, {position: toast.POSITION.TOP_RIGHT});
            case "info":
                return toast.info({toastMessage}, {position: toast.POSITION.TOP_RIGHT});
            default:
                break;    
        }
    }

    return (
      <div>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer
        position="top-right"
        autoClose = {5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
         />
      </div>
    );
  }

  export default ToastAlert;