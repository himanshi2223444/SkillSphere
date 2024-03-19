import React, { useState,useEffect } from "react";

import { Button, Img, Text } from "components";
import { useLocation } from "react-router-dom";
import Header from "components/Header";
import { account,database,auth } from "services/appwrite";
import { Query } from "appwrite";


    
const UserProfileOnePage = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({
      username: '',
      personalWebsiteLink: '',
      linkedin: '',
      aboutYou: '',
      role: '',
      skills: [],
      experience: null,
      timestamp: null,
      country: '',
      employmentStatus: '',
      email: '', // Rename email1 to email for clarity
  });

  useEffect(() => {
      const fetchUserData = async () => {
          try {
              const storedSession = localStorage.getItem("session");
              if (storedSession) {
                  const sessionData = JSON.parse(storedSession);
                  const userEmail = sessionData.providerUid;

                  // Fetch all documents from the collections
                  const resOne = await database.listDocuments(
                      process.env.REACT_APP_DB_ID,
                      process.env.REACT_APP_COLLECTION_ID_ONE
                  );
                  const resTwo = await database.listDocuments(
                      process.env.REACT_APP_DB_ID,
                      process.env.REACT_APP_COLLECTION_ID
                  );
                  const resThree = await database.listDocuments(
                      process.env.REACT_APP_DB_ID,
                      process.env.REACT_APP_COLLECTION_ID_TWO
                  );

                  // Filter documents based on email in memory
                  const userThree = resOne.documents.find(doc => doc.email === userEmail);
                  const userTwo = resTwo.documents.find(doc => doc.email === userEmail);
                  const userOne = resThree.documents.find(doc => doc.email === userEmail);

                  // Update userData state with filtered data
                  if (userThree && userTwo&&userOne) {
                      setUserData({
                          username: userThree.username,
                          personalWebsiteLink: userThree.PersonalWebsiteLink,
                          linkedin: userThree.linkedin,
                          abooutyou: userThree.	abooutyou,
                          role: userTwo.role,
                          skills: userTwo.skills,
                          experience: userTwo.experience,
                          timestamp: userTwo.timestamp,
                          country: userOne.Country,
                          employeementstatus: userOne.employeementstatus,
                          email: userEmail,
                      });
                  }
              } else {
                  console.error('Session data not found in local storage');
              }
          } catch (error) {
              console.error('Error fetching user data:', error);
          }
      };

      fetchUserData();
  }, []);
// const { activepage } = useParams();
  // const [visible, setVisible] = useState(false);
  // const [originalImage, setOriginalImage] = useState(null);
  // const [croppedImage, setCroppedImage] = useState(null);
  // const [editor, setEditor] = useState(null);
  // const [userData, setUserData] = useState({
  //   username: '',
  //   personalWebsiteLink: '',
  //   linkedin: '',
  //   aboutYou: '',
  //   role: '',
  //   skills: [],
  //   experience: null,
  //   timestamp: null,
  //   country: '',
  //   employmentStatus: '',
  //   email: '',
  //   imageURL: '', // Include imageURL attribute to store the image URL
  // });

  // useEffect(() => {
  //   // Fetch user data on component mount
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     const storedSession = localStorage.getItem("session");
  //     if (storedSession) {
  //       const sessionData = JSON.parse(storedSession);
  //       const userEmail = sessionData.providerUid;

  //         // Fetch all documents from the collections
  //         const resOne = await database.listDocuments(
  //           process.env.REACT_APP_DB_ID,
  //           process.env.REACT_APP_COLLECTION_ID_ONE
  //       );
  //       const resTwo = await database.listDocuments(
  //           process.env.REACT_APP_DB_ID,
  //           process.env.REACT_APP_COLLECTION_ID
  //       );
  //       const resThree = await database.listDocuments(
  //           process.env.REACT_APP_DB_ID,
  //           process.env.REACT_APP_COLLECTION_ID_TWO
  //       );

  //       // Filter documents based on email in memory
  //       const userThree = resOne.documents.find(doc => doc.email === userEmail);
  //       const userTwo = resTwo.documents.find(doc => doc.email === userEmail);
  //       const userOne = resThree.documents.find(doc => doc.email === userEmail);
            
  //       // Update userData state with filtered data
  //       if (userThree && userTwo&&userOne) {
  //           setUserData({
  //               username: userThree.username,
  //               personalWebsiteLink: userThree.PersonalWebsiteLink,
  //               linkedin: userThree.linkedin,
  //               abooutyou: userThree.	abooutyou,
  //               role: userTwo.role,
  //               skills: userTwo.skills,
  //               experience: userTwo.experience,
  //               timestamp: userTwo.timestamp,
  //               country: userOne.Country,
  //               employeementstatus: userOne.employeementstatus,
  //               email: userEmail,
  //           });
  //       }
    

  //     } else {
  //       console.error('Session data not found in local storage');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   const imageUrl = URL.createObjectURL(selectedImage);
  //   setOriginalImage(imageUrl);
  //   setVisible(true);
  // };

  // const updateImageInStorage = async (imageData) => {
  //   try {
  //     const response = await storage.createFile(process.env.REACT_APP_BUCKET_ID,userData.email,imageData, 'profile_image.png', ['*'], []);
  //     return response.$id; // Return the image URL from Appwrite Storage
  //   } catch (error) {
  //     console.error('Error updating image in storage:', error);
  //     throw error; // Rethrow the error to handle it in the calling function
  //   }
  // };

  // const handleSave = async () => {
  //   if (editor) {
  //     const canvasScaled = editor.getImageScaledToCanvas();
  //     const imageData = canvasScaled.toDataURL(); // Base64 encoded string
  //     setCroppedImage(imageData);
  //     setVisible(false);

  //     try {
  //       const imageUrl = await updateImageInStorage(imageData);
  //       console.log('Image uploaded:', imageUrl);
  //       setUserData(prevUserData => ({ ...prevUserData, imageURL: imageUrl }));

  //       // Save the image URL and user email in the specified collection
  //       saveImage(userData.userEmail, imageUrl);
  //     } catch (error) {
  //       console.error('Error uploading image:', error);
  //     }
  //   }
  // };

  // const saveImage = async (userEmail, imageUrl) => {
  //   try {
  //     const data = {
  //       email: userEmail,
  //       image: imageUrl,
  //     };
  //     const res = await database.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_THREE, data);
  //     console.log('Data saved to collection:', res);
  //   } catch (error) {
  //     console.error('Error saving image data:', error);
  //   }
  // };
  // const footer = (
  //   <div>
  //     <button onClick={handleSave}>Save</button>
  //   </div>
  // );


  // const handlePostSubmit = (postData) => {
  //   // Handle the post data, for example, you can send it to the server or store it in a state
  //   console.log('Posted:', postData);
  // };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-quicksand items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            
            <Img
              className="h-[188px] mx-auto object-cover w-full"
              src="images/img_image43.png"
              alt="imageFortyThree"
            />
            <Img
              className="h-[197px] mb-auto ml-[60px] mt-[-98px] rotate-[180deg] rounded-[50%] w-[197px] z-[1]"
              src="images/img_image44.png"
              alt="imageFortyFour"
            />
            <div className="flex flex-col gap-[19px] items-start justify-start ml-auto mr-[87px] mt-[-NaNpx] w-[73%] z-[1]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[45%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtRamaraja30"
                >
                  <span className="text-gray-900 font-ramaraja text-left font-normal">
                    <>
                     Username: {userData.username}
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-quicksand text-left text-lg font-normal">
                  {userData.role}|{userData.skills.join('|')}{" "}
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-10 sm:ml-[0] sm:mt-0 mt-5 text-center text-lg"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                >
                  Rent{" "}
                </Button>
                <Button
                  className="cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-2 sm:ml-[0] sm:mt-0 mt-5 text-center text-lg"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                >
                  Hire
                </Button>
              </div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                size="txtQuicksandMedium22"
              >
                    {userData.abooutyou}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-start justify-center mb-[39px] ml-[71px] mt-[-NaNpx] w-[15%] z-[1]">
              <Img
                className="h-[23px] md:h-auto object-cover w-[23px]"
                src="images/img_maskgroup_42x42.png"
                alt="maskgroup_One"
              />
              <Text
                className="text-gray-900 text-lg"
                size="txtQuicksandSemiBold18"
              >
                Video Conferencing
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[311px] mt-[19px] text-gray-900 text-lg"
            size="txtQuicksandRegular18Gray900"
          >
            <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
              <>
                Email ID
                <br />
              </>
            </span>
            <span className="text-gray-900 font-quicksand text-left font-normal">
              {userData.email}
            </span>
          </Text>
          <div className="flex flex-row gap-[65px] items-center justify-start md:ml-[0] ml-[311px] mt-[19px] md:px-5 w-[18%] md:w-full">
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Country
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                {userData.country}
              </span>
            </Text>
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Here to get
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
               {userData.employeementstatus}
              </span>
            </Text>
          </div>
          <div className="flex flex-row gap-[35px] items-center justify-start md:ml-[0] ml-[311px] mt-[19px] md:px-5 w-1/4 md:w-full">
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Portfolio Link
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                {userData.personalWebsiteLink}
              </span>
            </Text>
            <Text
              className="text-gray-900 text-lg"
              size="txtQuicksandRegular18Gray900"
            >
              <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
                <>
                  Work Experience
                  <br />
                </>
              </span>
              <span className="text-gray-900 font-quicksand text-left font-normal">
                {userData.experience} Years
              </span>
            </Text>
          </div>
          <Text
            className="md:ml-[0] ml-[311px] mt-[19px] text-gray-900 text-lg"
            size="txtQuicksandRegular18Gray900"
          >
            <span className="text-gray-900 font-quicksand text-left text-xl font-semibold">
              <>
                Linkedin Link
                <br />
              </>
            </span>
            <span className="text-gray-900 font-quicksand text-left font-normal">
              {userData.linkedin}
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default UserProfileOnePage;
