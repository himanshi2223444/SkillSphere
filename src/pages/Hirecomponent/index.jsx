import { TailwindCard } from 'pages/HomePageTwo'
import React,{ useState,useEffect } from 'react'
import { Img, Line, List, PagerIndicator, Slider, Text } from "components";
import {account,database} from "services/appwrite"
const Hirecomponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [uniqueUsersData, setUniqueUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_TWO);
    const hireUsersData = response.documents.filter(user =>
      user.employeementstatus === 'Hired' && user.email && user.email.trim() !== ''
    );

    const uniqueUserEmails = hireUsersData.map(user => user.email);
    console.log(uniqueUserEmails);
    const userDataPromises = uniqueUserEmails.map(async (email) => {
      const response = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ONE);
      const userOne = response.documents.find(doc => doc.email === email);
      return userOne; // This may be undefined if the email doesn't match any document
    });

    const userData = await Promise.all(userDataPromises);
    console.log(userData);

    setUniqueUsersData(userData.filter(user => user)); // Filter out undefined values
  } catch (error) {
    console.error('Error fetching users data:', error);
  }
};


    fetchUsersData();
  }, []);
  return (
    <>
    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1402px] mt-8 mx-auto md:px-5 w-full">
        <List
          className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1402px] mt-2.5 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          {uniqueUsersData.map((user, index) => (
            <div key={`${user.email}_${index}`}className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    {user.username} {/* Assuming 'fullName' is a field in your database */}
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  {user.abooutyou} {/* Assuming 'aboutUs' is a field in your database */}
                </span>
              </Text>
              {/* Add more elements or components here to display additional user data */}
            </div>
          ))}
        </List>
      </div>
    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1402px] mt-8 mx-auto md:px-5 w-full">
          {/* { blog.map((v,i)=>
          {
return( */}
<TailwindCard/>
<TailwindCard/>
<TailwindCard/>
<TailwindCard/>
<TailwindCard/>
{/* )
          })}
          */}
{/* 
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image17.png"
              alt="imageSeventeen"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image18.png"
              alt="imageEighteen"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image19.png"
              alt="imageNineteen"
            /> */}
          </div>
          <List
            className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1402px] mt-2.5 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[1403px] mt-[39px] mx-auto md:px-5 w-full">
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image31.png"
              alt="imageThirtyOne"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image32.png"
              alt="imageThirtyTwo"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image33.png"
              alt="imageThirtyThree"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image34.png"
              alt="imageThirtyFour"
            />
            <Img
              className="h-[199px] md:h-auto object-cover"
              src="images/img_image35.png"
              alt="imageThirtyFive"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-9 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1403px] mt-2.5 mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <div className="h-[137px] relative w-full">
              <Text
                className="m-auto text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtQuicksandBold22"
              >
                <span className="text-gray-900 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  I will create unique website{" "}
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  <>
                    design mockup
                    <br />
                  </>
                </span>
                <span className="text-gray-900 font-quicksand text-left text-xl font-medium">
                  From ₹1500
                </span>
              </Text>
              <div className="absolute h-[22px] right-[0] top-[4%] w-[22px]">
                <Img
                  className="h-[22px] m-auto object-cover w-[22px]"
                  src="images/img_messageicon.png"
                  alt="imageremovebgpr"
                />
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[46%]">
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-gray-900 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-row gap-2 items-center justify-center mt-7 md:px-5 w-[8%] md:w-full">
            <a href="javascript:" className="text-gray-500 text-xl">
              <Text size="txtQuicksandMedium20">See More</Text>
            </a>
            <Img
              className="h-3.5 md:h-auto object-cover w-3.5"
              src="images/img_maskgroup_14x14.png"
              alt="maskgroup_Two"
            />
          </div>
    
    
    </>
  )
}

export default Hirecomponent