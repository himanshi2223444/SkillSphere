import React, { useState } from "react";
import Rentcomponent from "pages/Rentcomponent";
import Hirecomponent from "pages/Hirecomponent";


import { Img, Line, List, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
// import { blog } from "blog";
import { useNavigate,useLocation } from "react-router-dom";

const HomePageTwoPage = () => {
  const navigate = useNavigate();
  const location=useLocation();
 
  const { username = "", email = "" } = location.state || {};
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [activeTab, setActiveTab] = useState('rent');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

 

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1343px] h-[900px] md:px-5 relative w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_aerialshoturb.png"
              alt="aerialshoturb"
            />
            <div className="absolute bg-gray-900_8e flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[241px] w-full">
              <Header className="flex md:flex-col font-quicksand md:gap-5 items-center justify-center w-full" />
              <Text
                className="mt-[282px] md:text-5xl text-[90px] text-white-A700"
                size="txtRamaraja90"
              >
                Get Your Work Done Smoothly
              </Text>
              <div className="flex flex-row font-quicksand gap-[11px] items-start justify-center mt-[35px] w-[10%] md:w-full">
                <button
                  className="text-gray-500 text-xl"
                  size="txtQuicksandMedium20" onClick={""}
                >
                  Swipe Down
                </button>
                <Img
                  className="h-3.5 md:h-auto mt-[3px] object-cover w-3.5"
                  src="images/img_maskgroup_14x14.png"
                  alt="maskgroup_One"
                />
              </div>
            </div>
          </div>
          <div className="h-[198px] md:h-[216px] max-w-[1404px] mt-[18px] mx-auto md:px-5 relative w-full">
  <Slider
    autoPlay
    autoPlayInterval={2000}
    activeIndex={sliderState}
    responsive={{
      0: { items: 1 },
      550: { items: 1 },
      1050: { items: 1 },
    }}
    onSlideChanged={(e) => {
      setsliderState(e?.item);
    }}
    ref={sliderRef}
    className="m-auto w-full"
    items={[...Array(4)].map((_, index) => (
      <React.Fragment key={index}>
        <div className="bg-gradient  flex flex-col items-center justify-start mx-2.5 md:pl-10 sm:pl-5 pl-[52px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[198px] relative w-full">
              <Img
                className="absolute h-[198px] inset-y-[0] my-auto object-cover right-[0] w-[34%]"
                src={`images/img_image${index + 1}.png`}
                alt={`image${index + 1}`}
              />
              <Text
                className="absolute h-max inset-y-[0] left-[0] my-auto text-white-A700 text-xl"
                size="txtQuicksandMedium20WhiteA700"
              >
                <>
                  {/* Placeholder text for demonstration */}
                  {index === 0 && (
                    <>
                      Get Hired!
                      <br />
                      <br />
                      Work as a freelance and get hired! <br/>Embrace the
                      freedom to choose your projects, set your own
                      schedule, and showcase your skills to clients.
                    </>
                  )}
                  {index === 1 && (
                    <>
                      Build Your Portfolio!
                      <br />
                      <br />
                      Showcase your work and skills to potential clients.
                      <br/>Create an impressive portfolio to stand out in the
                      freelancing market.
                    </>
                  )}
                  {index === 2 && (
                    <>
                      Flexible Schedule!
                      <br />
                      <br />
                      Enjoy the flexibility of working as a freelancer.<br/> Set
                      your own working hours and manage your time
                      efficiently.
                    </>
                  )}
                  {index === 3 && (
                    <>
                      Work Anywhere!
                      <br />
                      <br />
                      With freelancing, you can work from anywhere.<br/> All you
                      need is a reliable internet connection, and you're
                      ready to go.
                    </>
                  )}
                </>
              </Text>
            </div>
          </div>
        </div>
      </React.Fragment>
    ))}
 


              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[11px] bg-white-A700 w-[11px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[11px] bg-gray-500_01 w-[11px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[4%] flex h-[11px] inset-x-[0] justify-center mx-auto w-[68px]"
              count={4}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[11px] bg-white-A700 w-[11px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[11px] bg-gray-500_01 w-[11px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block mx-[4.00px]"
              unselectedWrapperCss="inline-block mx-[4.00px]"
            />
          </div>
          <div className="flex flex-row gap-[25px] items-start justify-start mt-9 md:px-5 w-[22%] md:w-full">
            <div className="flex flex-row gap-[25px] items-center justify-between mb-0.5 w-[48%]">
             
             
              <button className=
                {`text-3xl sm:text-[26px] md:text-[28px] text-gray-500   hover:text-gray-900 ${
                  activeTab === 'hire' ? 'opacity-100' : 'opacity-50'
                }`}
                size="txtQuicksandMedium30Gray500"
                onClick={() => handleTabChange('rent')}
              >
                Rent
              </button>
              <button
                className=
                {`text-3xl sm:text-[26px] md:text-[28px] text-gray-500  hover:text-gray-900 ${
                  activeTab === 'rent' ? 'opacity-100' : 'opacity-50'
                }`}
                size="txtQuicksandMedium30Gray500"
                onClick={() => handleTabChange('hire')}
              >
                Hire
              </button>
            </div>
            <div
              className="common-pointer flex flex-row items-center justify-between mt-0.5 w-[45%]"
              onClick={() => navigate("/homepage21",{state:{username:username,email:email}})}
            >
              <button
                className={`text-3xl sm:text-[26px] md:text-[28px] text-gray-500   hover:text-gray-900 ${
                  activeTab === 'rent' ? 'opacity-100' : 'opacity-50'
                }`}
                size="txtQuicksandMedium30Gray500"
                onClick={() => handleTabChange('rent')}
              >
                Sort by
              </button> 
              <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => console.log('Up arrow clicked')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => console.log('Down arrow clicked')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
            </div>
          </div>
          {/* <Img
            className="h-1 mt-1"
            src="images/img_line28.svg"
            alt="lineTwentyEight"
          /> */}
          {activeTab === 'rent' && <Rentcomponent/>}
        {activeTab === 'hire' && <Hirecomponent/>}
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1329px] mt-8 mx-auto md:px-5 w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-9 grid md:grid-cols-1 grid-cols-2 w-[83%] md:w-full"
              orientation="horizontal"
            >
             <div className="border border-gray-500 border-solid flex flex-col items-center justify-start sm:ml-0 p-13 rounded-9 w-full">
  <div className="md:h-36 h-140 my-0.5 relative w-full">
    <div className="m-auto text-22 text-black-900 sm:text-lg md:text-xl">
      <span className="text-gray-900 font-quicksand font-semibold">
        Denis Kravets
        <br />
      </span>
      <span className="text-black-900 font-quicksand font-normal">
        <br />
      </span>
      <span className="text-gray-900 font-quicksand font-medium">
        Seeking a talented UI/UX designer! If you're passionate about crafting seamless digital experiences, let's connect.
      </span>
    </div>
    <div className="absolute h-31 right-0 top-0 w-31">
      <img
        className="h-31 m-auto object-cover w-31"
        src="images/img_messageicon.png"
        alt="imageremovebgpr"
      />
      <div className="absolute flex flex-row inset-0 items-center justify-center m-auto w-46">
        <div className="bg-gray-900 h-5 rounded-sm w-5"></div>
        <div className="bg-gray-900 h-5 ml-0.5 rounded-sm w-5"></div>
      </div>
    </div>
  </div>
</div>

              <div className="border border-gray-500 border-solid flex flex-col items-center justify-start sm:ml-[0] p-[13px] rounded-[9px] w-full">
                <div className="h-28 md:h-[145px] mb-[30px] mt-[3px] relative w-full">
                  <Text
                    className="m-auto text-[22px] text-black-900 sm:text-lg md:text-xl"
                    size="txtQuicksandRegular22"
                  >
                    <span className="text-gray-900 font-quicksand text-left font-semibold">
                      <>
                        Daniel Joseph
                        <br />
                      </>
                    </span>
                    <span className="text-black-900 font-quicksand text-left font-normal">
                      <>
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-quicksand text-left font-medium">
                      <>
                        Seeking a talented Web Developer! If you&#39;re
                        interested, let&#39;s connect.{" "}
                      </>
                    </span>
                  </Text>
                  <div className="absolute h-[31px] right-[0] top-[0] w-[31px]">
                    <Img
                      className="h-[31px] m-auto object-cover w-[31px]"
                      src="images/img_messageicon.png"
                      alt="imageremovebgpr"
                    />
                    <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                      <div className="bg-gray-900 h-[5px] rounded-sm w-[5px]"></div>
                      <div className="bg-gray-900 h-[5px] ml-0.5 rounded-sm w-[5px]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-1 flex-row gap-2 items-center justify-between w-[9%] md:w-full">
              <a href="javascript:" className="text-gray-500 text-xl">
                <Text size="txtQuicksandMedium20">See More</Text>
              </a>
              <Img
                className="h-3.5 md:h-auto object-cover w-3.5"
                src="images/img_maskgroup_14x14.png"
                alt="maskgroup_Three"
              />
            </div>
          </div>
          <Footer className="bg-gray-900 flex items-center justify-center mt-11 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomePageTwoPage;

export function TailwindCard({username,aboutyou}) {
  console.log(username, aboutyou);  
  return (
    <div className="sm:flex sm:items-center p-4 border rounded-md shadow-md hover:shadow-lg hover:w-72 hover:h-48 transition duration-300 max-w-xs">
    <img
      className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-12 sm:h-16 w-12 sm:w-16 rounded-full"
      src="https://via.placeholder.com/64"
      alt="Profile"
    />
    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
      <p className="text-lg font-semibold text-gray-900 hover:text-blue-500 transition-colors duration-300">{username}</p>
      <p className="text-sm text-gray-600 overflow-hidden line-clamp-3">{aboutyou}</p>
    </div>
  </div>
  

  );
}