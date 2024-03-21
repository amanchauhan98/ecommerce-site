// import { FunctionComponent, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// const TempComp = () => {
//   const navigate = useNavigate();

//   const onDashboardNavItemContainerClick = useCallback(() => {
//     // Please sync "Dashboard" to the project
//   }, []);

//   const onDashboardNavItemContainer1Click = useCallback(() => {
//     navigate("/");
//   }, [navigate]);

//   const onDashboardNavItemContainer2Click = useCallback(() => {
//     // Please sync "Order History" to the project
//   }, []);

//   const onDashboardNavItemContainer3Click = useCallback(() => {
//     // Please sync "Track Order" to the project
//   }, []);

//   const onDashboardNavItemContainer4Click = useCallback(() => {
//     // Please sync "Cart" to the project
//   }, []);

//   const onDashboardNavItemContainer5Click = useCallback(() => {
//     // Please sync "WishList" to the project
//   }, []);

//   const onDashboardNavItemContainer6Click = useCallback(() => {
//     // Please sync "Address" to the project
//   }, []);

//   const onDashboardNavItemContainer7Click = useCallback(() => {
//     // Please sync "Wallet" to the project
//   }, []);

//   const onDashboardNavItemContainer8Click = useCallback(() => {
//     // Please sync "Landing Page" to the project
//   }, []);

//   const onWishlistIconClick = useCallback(() => {
//     // Please sync "WishList" to the project
//   }, []);

//   const onCartCountContainerClick = useCallback(() => {
//     // Please sync "Cart" to the project
//   }, []);

//   const onOriginalProductsTextClick = useCallback(() => {
//     // Please sync "Original Product Page" to the project
//   }, []);

//   const onHomeTextClick = useCallback(() => {
//     // Please sync "Home | Product Listing Page" to the project
//   }, []);

//   const onLogoContainerClick = useCallback(() => {
//     // Please sync "Home | Product Listing Page" to the project
//   }, []);

//   return (
//     <div className="relative  w-full max-h-max mb-[6rem]  text-left text-[0.88rem] text-font-color-black font-label-03">
      
//       <div className="absolute top-[7.19rem] left-[12.5rem] rounded bg-gray-00 shadow-[0px_8px_40px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start py-[1rem] px-[0rem] border-[1px] border-solid border-gray-100">
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainerClick}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Dashboard
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative bg-royalblue w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer text-bg"
//           onClick={onDashboardNavItemContainer1Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem] font-semibold">
//             Account Details
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer2Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Order History
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer3Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Track Order
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer4Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Shopping Cart
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer5Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Wishlist
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer6Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Address
//           </div>
//           <div className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] flex items-center justify-center">
//             <img
//               className="w-full h-full object-contain absolute left-[-0.06rem] top-[0rem] [transform:scale(1.265)]"
//               alt=""
//               src="/icons@2x.png"
//             />
//           </div>
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer7Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Wallet
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//         <div
//           className="relative w-[16.5rem] h-[2.5rem] shrink-0 cursor-pointer"
//           onClick={onDashboardNavItemContainer8Click}
//         >
//           <div className="absolute top-[calc(50%_-_10px)] left-[3.5rem] leading-[1.25rem]">
//             Log-out
//           </div>
//           <img
//             className="absolute top-[0.63rem] left-[1.19rem] w-[1.43rem] h-[1.25rem] object-cover"
//             alt=""
//             src="/icons@2x.png"
//           />
//         </div>
//       </div>
//       <div className="absolute top-[39.81rem] left-[29.81rem] rounded bg-gray-00 box-border w-[49.44rem] flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.5rem] gap-[1.5rem] text-gray-900 border-[1px] border-solid border-gray-100">
//         <div className="relative rounded-t rounded-b-none bg-gray-00 box-border w-[49.44rem] h-[3.25rem] border-[1px] border-solid border-gray-100">
//           <div className="absolute top-[calc(50%_-_10px)] left-[1.5rem] leading-[1.25rem] uppercase font-medium">
//             Change Password
//           </div>
//         </div>
//         <div className="w-[49.44rem] flex flex-col items-start justify-start py-[0rem] pr-[0rem] pl-[1.5rem] box-border gap-[1rem]">
//           <div className="w-[46.75rem] flex flex-col items-start justify-start gap-[0.5rem]">
//             <div className="self-stretch relative leading-[1.25rem]">
//               Current Password
//             </div>
//             <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-500 border-[1px] border-solid border-gray-100">
//               <div className="absolute top-[calc(50%_-_10px)] left-[1rem] leading-[1.25rem] hidden">
//                 at least 8 characters.
//               </div>
//               <img
//                 className="absolute top-[calc(50%_-_10px)] right-[1rem] w-[1.25rem] h-[1.25rem] object-cover"
//                 alt=""
//                 src="/regulareye@2x.png"
//               />
//             </div>
//           </div>
//           <div className="w-[46.75rem] flex flex-col items-start justify-start gap-[0.5rem]">
//             <div className="self-stretch relative leading-[1.25rem]">
//               New Password
//             </div>
//             <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-500 border-[1px] border-solid border-gray-100">
//               <div className="absolute top-[calc(50%_-_10px)] left-[1rem] leading-[1.25rem]">
//                 8+ characters
//               </div>
//               <img
//                 className="absolute top-[calc(50%_-_10px)] right-[1rem] w-[1.25rem] h-[1.25rem] object-cover"
//                 alt=""
//                 src="/regulareye@2x.png"
//               />
//             </div>
//           </div>
//           <div className="w-[46.75rem] flex flex-col items-start justify-start gap-[0.5rem]">
//             <div className="self-stretch relative leading-[1.25rem]">
//               Confirm Password
//             </div>
//             <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-500 border-[1px] border-solid border-gray-100">
//               <div className="absolute top-[calc(50%_-_10px)] left-[1rem] leading-[1.25rem] hidden">
//                 Password
//               </div>
//               <img
//                 className="absolute top-[calc(50%_-_10px)] right-[1rem] w-[1.25rem] h-[1.25rem] object-cover"
//                 alt=""
//                 src="/regulareye@2x.png"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="relative w-[19.13rem] h-[3.25rem] overflow-hidden shrink-0 text-center text-gray-00 font-poppins">
//           <div className="absolute top-[0rem] left-[1.44rem] w-[15.63rem] h-[3.25rem]">
//             <img
//               className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
//               alt=""
//               src="/rectangle-2@2x.png"
//             />
//             <div className="absolute h-[46.67%] w-[95.42%] top-[26.96%] left-[1.98%] leading-[125.5%] font-semibold flex items-center justify-center">
//               Change Password
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[7.19rem] left-[29.81rem] rounded bg-gray-00 box-border w-[49.44rem] h-[31.75rem] overflow-hidden text-gray-900 border-[1px] border-solid border-gray-100">
//         <div className="absolute top-[0rem] left-[0rem] rounded-t rounded-b-none bg-gray-00 box-border w-[49.44rem] h-[3.25rem] border-[1px] border-solid border-gray-100">
//           <h3
//             className="m-0 absolute top-[calc(50%_-_10px)] left-[1.5rem] text-inherit leading-[1.25rem] uppercase font-medium font-inherit"
//             heading
//           >
//             Account Setting
//           </h3>
//         </div>
//         <div className="absolute top-[27.13rem] left-[14rem] w-[10.06rem] h-[3.25rem] text-center text-gray-00 font-poppins">
//           <img
//             className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
//             alt=""
//             src="/rectangle-2@2x.png"
//           />
//           <div className="absolute h-[46.67%] w-[95.42%] top-[26.96%] left-[1.98%] leading-[125.5%] font-semibold flex items-center justify-center">
//             Save Changes
//           </div>
//         </div>
//         <div className="absolute top-[4.75rem] left-[14rem] w-[34.63rem] flex flex-col items-start justify-start gap-[1rem]">
//           <div className="w-[34.63rem] flex flex-row items-start justify-start gap-[1rem]">
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 First Name
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   Feyz
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Second Name
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   Ibrahim
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[34.63rem] flex flex-row items-start justify-start gap-[1rem]">
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Username
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   feyzibrahim
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Email
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   feyzibrahim@gmail.com
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[34.63rem] flex flex-row items-start justify-start gap-[1rem]">
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Secondary Email
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   -
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Phone Number
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   +91 70349 85827
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[34.63rem] flex flex-row items-start justify-start gap-[1rem]">
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Country/Region
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] overflow-hidden shrink-0 text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[calc(50%_-_10px)] left-[1rem] leading-[1.25rem]">
//                   India
//                 </div>
//                 <img
//                   className="absolute top-[calc(50%_-_8px)] right-[1rem] w-[1rem] h-[1rem] object-cover"
//                   alt=""
//                   src="/regularcaretdown@2x.png"
//                 />
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 States
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] overflow-hidden shrink-0 text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[calc(50%_-_10px)] left-[1rem] leading-[1.25rem]">
//                   Kerala
//                 </div>
//                 <img
//                   className="absolute top-[calc(50%_-_8px)] right-[1rem] w-[1rem] h-[1rem] object-cover"
//                   alt=""
//                   src="/regularcaretdown@2x.png"
//                 />
//               </div>
//             </div>
//             <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
//               <div className="self-stretch relative leading-[1.25rem]">
//                 Pin Code
//               </div>
//               <div className="self-stretch relative rounded-sm bg-gray-00 box-border h-[2.75rem] text-gray-700 border-[1px] border-solid border-gray-100">
//                 <div className="absolute top-[0.75rem] left-[1rem] leading-[1.25rem]">
//                   673570
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <img
//           className="absolute top-[4.75rem] left-[1.5rem] rounded-81xl w-[11rem] h-[11rem] object-cover"
//           alt=""
//           src="/avatar@2x.png"
//         />
//       </div>
      
//     </div>
//   );
// };

// export default TempComp;
