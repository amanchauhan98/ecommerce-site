import { Spinner } from 'flowbite-react';
import React from 'react'

const SpinnerComp = () => {
    return <>
    <div  className='h-[100vh] w-full  flex justify-center items-center absolute top-0 left-0  z-50'>
        <Spinner  aria-label="Default status example" className='h-[4rem] w-[4rem]' />;
    </div>
    </>
}
export default SpinnerComp;