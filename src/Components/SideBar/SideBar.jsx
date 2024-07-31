import React from "react";
import {
  Drawer,

} from "@material-tailwind/react";
import img1 from '../../assets/Logo.png'
import { Link, NavLink } from "react-router-dom";
export function SideBar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      {/* Sidebar for large screens */}
      <div className="hidden lg:block min-h-screen bg-[#d7d4d4a9] w-full max-w-[13rem] p-4  shadow-xl shadow-blue-gray-900/5">
        <div className=" container flex flex-col   h-screen">
          <picture className="self-center">
            <img src={img1} className="w-[100px]   " alt="Logo" />
          </picture>
          <ul className="flex gap-5 flex-col items-start ml-2 mt-4 ">
            <NavLink 
            to="/"
            className={({isActive})=>{
              return `font-extralight flex gap-3 items-center w-full ${isActive ? `p-1  bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-arrow-pointer text-red-300"></i>
              Create Ads
            </NavLink>
            <NavLink 
            to="/CreateAccount"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-user-plus text-red-300"></i>
              Create Account
            </NavLink>
            <NavLink 
            to="/Proudects"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-shop text-red-300"></i>
              Proudcts
            </NavLink>
            <NavLink 
            to="/CreateOffers"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-ticket text-red-300"></i>
              Create Offers
            </NavLink>
            <NavLink 
            to="/CreateBirthDay"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-cake-candles text-red-300"></i>
              Create BirthDay
            </NavLink>
          </ul>

        </div>
      </div>

      {/* Mega menu button for small and medium screens */}
      <div className="lg:hidden p-4 min-h-screen bg-[#d7d4d4a9]">
        <i
          className="fa-solid fa-bars cursor-pointer text-4xl"
          onClick={openDrawer}
        ></i>
      </div>

      {/* Drawer for small and medium screens */}
      <Drawer open={open} onClose={closeDrawer} className="p-4">
      <div className=" container flex flex-col   h-screen">
          <picture className="self-center">
            <img src={img1} className="w-[100px]   " alt="Logo" />
          </picture>
          <ul className="flex gap-5 flex-col items-start ml-2 mt-4 ">
            <NavLink 
            to="/"
            className={({isActive})=>{
              return `font-extralight flex gap-3 items-center w-full ${isActive ? `p-1  bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-arrow-pointer text-red-300"></i>
              Create Ads
            </NavLink>
            <NavLink 
            to="/CreateAccount"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-user-plus text-red-300"></i>
              Create Account
            </NavLink>
            <NavLink 
            to="/Proudects"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-shop text-red-300"></i>
              Proudcts
            </NavLink>
            <NavLink 
            to="/CreateOffers"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-ticket text-red-300"></i>
              Create Offers
            </NavLink>
            <NavLink 
            to="/CreateBirthDay"
            className={({isActive})=>{
              return `font-extralight  flex gap-3 items-center w-full ${isActive ? `p-1 bg-[#B3C8CF] rounded-lg font-semibold border-l-[5px] border-[#F1EEDC]  ` : ""} `
            }}>
              <i class="fa-solid fa-cake-candles text-red-300"></i>
              Create BirthDay
            </NavLink>
          </ul>

        </div>
      </Drawer>
    </React.Fragment>
  );
}




