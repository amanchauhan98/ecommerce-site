import { Button, Checkbox, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
// import SpinnerComp from "../common/spinner";

const LoginUser = () => {

    const [userLoginValue, setUserLoginValue] = useState({})


    const handleInputValues = (event) => {
        const {name, value} = event.target;
        setUserLoginValue({...userLoginValue, [name] : value});
    }

    // console.log(userLoginValue);

  return (
    <>
    {/* <SpinnerComp/> */}
      <div id="form-login" className="bg-gray-100 h-screen w-full relative">
        <div id="heading" className="flex-col flex justify-center items-center w-full h-full space-y-[2rem]">
            <h1 className="text-4xl font-semibold text-center tracking-wide">Login</h1>
            <form className="flex w-4/12 mx-auto flex-col gap-4 border-[0.01rem] px-[2rem] bg-white py-[4rem] rounded-md">
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-lg "
                  htmlFor="email1"
                  value="Your email"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="user_email"
                placeholder="name@flowbite.com"
                onChange={handleInputValues}
                value={userLoginValue.user_email}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-lg"
                  htmlFor="password1"
                  value="Your password"
                />
              </div>
              <TextInput onChange={handleInputValues} value={userLoginValue.user_password} name="user_password" id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox name="isRemember" value={userLoginValue.isRemember}  selected={userLoginValue.isRemember === "on" ? "true" : "false"} onChange={handleInputValues} id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form> 
        </div>
        
      </div>
    </>
  );
};
export default LoginUser;


