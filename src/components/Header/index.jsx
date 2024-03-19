import React from "react";
import {nav} from "react-router-dom";
import { Img, Text,Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-gray-900_b2 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[18px] w-full">
        {/* <Img
          className="h-40 sm:h-auto object-cover w-full"
          src="images/img_aerialshoturb.png"
          alt="aerialshoturb_One"
        /> */}
           <a href="/HomePagetwo" ><button
            className="md:mt-0 mt-[34px]  cursor-pointer text-3xl sm:text-[26px] md:text-[28px] text-deep_orange-A200   "
            size="txtQuicksandBold30" 
          >
            SKILLSPHERE
          </button></a>
          <div className="border border-solid border-white-A700 flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[81px] md:mt-0 mt-[22px] pl-1 py-1 rounded-[9px] w-[59%] md:w-full">
          <input
  type="text"
  className="ml-4 sm:ml-0 text-32px sm:text-lg text-white-A700 md:text-xl bg-transparent  border-none outline-none focus:outline-none w-full"
  placeholder="What skills are you looking for today?"
  
/>
            <Img
              className="h-[58px] md:h-auto object-cover w-[58px] cursor-pointer"
              src="images/img_searchicon.png"
              alt="searchicon"
              // onClick={() => navigate("/SearchButtonThree")}
            />
          </div>
          <div className="h-[51px] md:ml-[0] ml-[55px] md:mt-0 mt-[30px] relative w-[4%] md:w-full">
            <Img
              className="h-[51px] m-auto object-cover w-full cursor-pointer"
              src="images/img_maskgroup_51x47.png"
              alt="maskgroup"
            />
            <div className="absolute bg-red-900 h-3 right-[17%] rounded-[50%] top-[24%] w-3"></div>
          </div>
          {/* <Img
            className="h-10 md:h-auto md:ml-[0] ml-[13px] md:mt-0 mt-9 object-cover w-10"
            src="images/img_messageicon.png"
            alt="messageicon"
          /> */}
          <div className="md:h-[113px] h-[86px] mb-[27px] md:ml-[0] ml-[81px] md:mt-0 mt-2.5 relative w-[5%] md:w-full">
            <div className="absolute bg-white-A700 bottom-[8%] h-[67px] inset-x-[0] mx-auto rounded-[33px] w-[67px]"></div>
            <a href="/user/accountsettings" ><Button>profile</Button></a> <a href="/user/accountsettings" ><Button>profile</Button></a>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;