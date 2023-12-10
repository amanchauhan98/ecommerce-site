import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/Navbar";
// import Cards from "./components/Cards";
// import CardsDescription from "./components/productDesc";
// import LoginUser from "./auth/Login";
import SpinnerComp from "./common/spinner";
import { ToastContainer } from "react-toastify";
import CheckoutPage from "./components/checkoutpage";


const Cards = React.lazy(()=> import('./components/Cards'))
const CardsDescription = React.lazy(()=> import('./components/productDesc'))
const LoginUser = React.lazy(()=> import('./auth/Login'))
const CartDescPage = React.lazy(()=> import('./components/cartDescPage'));

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <ToastContainer/>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<SpinnerComp/>}>
                <Cards />
              </Suspense>
            }
          />

          <Route
            path="/desc/:productId"
            element={
              <Suspense fallback={<SpinnerComp/>}>
                <CardsDescription />
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense fallback={<SpinnerComp/>}>
                <LoginUser />
              </Suspense>
            }
          />
          <Route
            path="/cartpage/"
            element={
              <Suspense fallback={<SpinnerComp/>}>
                <CartDescPage />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<SpinnerComp/>}>
                <CheckoutPage />
              </Suspense>
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
