import React,{useEffect} from "react";
import UserSidebar from "components/UserProfile/UserSidebar";
import { useNavigate, useParams } from "react-router-dom";
import 'components/UserProfile/UserProfile.css'
import { Button, Img, Text } from "components";
import Header from "components/Header";
import AccountSetting from "components/UserProfile/AccountSettings";
import { InputText } from "primereact/inputtext";
import UserAddress from "components/UserProfile/UserAddress";
import ChangePassword from "components/UserProfile/ChangePassword";
import { useState } from "react";
import {Dialog} from 'primereact/dialog';
import AvatarEditor from "react-avatar-editor";
import { account,database,storage } from "services/appwrite";
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs


  
const UserProfileThree = () => {
  const navigate = useNavigate();
  const { activepage } = useParams();
  const [visible, setVisible] = React.useState(false);
  const [originalImage, setOriginalImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  const [editor, setEditor] = React.useState(null);
  const [imgurl,setimgurl]=React.useState();
  const [userData, setUserData] = React.useState({
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
    email: '',
    imageURL: '',
  });
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedSession = localStorage.getItem("session");
        if (storedSession) {
          const sessionData = JSON.parse(storedSession);
          const userEmail = sessionData.providerUid;
  

        // Fetch user data from different collections based on email
        const resOne = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_ONE);
        const resTwo = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID);
        const resThree = await database.listDocuments(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_TWO);

        // Filter documents based on email
        const userThree = resOne.documents.find(doc => doc.email === userEmail);
        const userTwo = resTwo.documents.find(doc => doc.email === userEmail);
        const userOne = resThree.documents.find(doc => doc.email === userEmail);
        console.log(userEmail);
        // Update userData state with filtered data
        if (userThree && userTwo && userOne) {
          setUserData({
            username: userThree.username,
            personalWebsiteLink: userThree.PersonalWebsiteLink,
            linkedin: userThree.linkedin,
            aboutYou: userThree.aboutYou,
            role: userTwo.role,
            skills: userTwo.skills,
            experience: userTwo.experience,
            timestamp: userTwo.timestamp,
            country: userOne.Country,
            employmentStatus: userOne.employmentStatus,
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

    fetchUserData(); // Call fetchUserData on component mount
  }, []); // Empty dependency array to run only once when component mounts


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setOriginalImage(imageUrl);
    setVisible(true);
  };

  const updateImageInStorage = async (imageData) => {
    try {
      const blob = await fetch(imageData).then((res) => res.blob());
      const file = new File([blob], 'profile_image.png', { type: blob.type });
      const response = await storage.createFile(
        process.env.REACT_APP_BUCKET_ID,
        uuidv4(),
        file
      );
      return response.$id;
    } catch (error) {
      console.error('Error updating image in storage:', error);
      throw error;
    }
  };
  const updateImageInStorage2 = async (imageData) => {
    try {
      const blob = await fetch(imageData).then((res) => res.blob());
      const file = new File([blob], 'profile_image.png', { type: blob.type });
      const response = await storage.createFile(
        process.env.REACT_APP_BUCKET_ID_ONE,
        uuidv4(),
        file
      );
      return response.$id;
    } catch (error) {
      console.error('Error updating image in storage:', error);
      throw error;
    }
  };

  const handleSave = async () => {
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const imageData = canvasScaled.toDataURL();
      setCroppedImage(imageData);

      try {
        const imageId = await updateImageInStorage(imageData);
        const storageUrl = 'https://example.com/storage/';

        // Generate the full image URL by combining the storage URL and the image ID
        const imageUrl = storageUrl + imageId;
        setUserData(prevUserData => ({ ...prevUserData, imageURL: imageUrl }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const savePost = async (text, imageUrl, userEmail) => {
    try {
     
      const data = {
        email: userEmail,
        text: text,
        image: 'https://example.com/images/'+imageUrl,
        createdAt: new Date().toISOString(),
      };
      console.log(data);
      const res23=await database.createDocument(process.env.REACT_APP_DB_ID, process.env.REACT_APP_COLLECTION_ID_FOUR, uuidv4(), data);
      console.log('Post saved successfully',res23);
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handlePostSubmit = async (postData) => {
    const { text, image } = postData;
    try {
      if (image) {
        const imageUrl = await updateImageInStorage2(image);
        await savePost(text, imageUrl, userData.email);
      } else {
        await savePost(text, '', userData.email);
      }
    } catch (error) {
      console.error('Error handling post submission:', error);
    }
  };
  const renderUserImage = () => {
    if (userData.imageURL) {
      return (
        <img
          src="profile_image.png"
          alt="User Profile"
          className="h-[188px] mx-auto object-cover w-full"
        />
      );
    }
    return null; // If imageURL is empty, don't render the image
  };

  const footer = (
    <div>
      <button onClick={handleSave}>Save</button>
    </div>
  );


 
  return (
    <section className="bg-gray-200 ">
      
      <div className="bg-gray-200 flex flex-col font-quicksand items-center justify-start mx-auto pb-[86px] w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className=" flex flex-col md:px-5 relative w-full">
            <Img
              className="h-[188px] mx-auto object-cover w-full"
              src=""
              alt="imageFortyThree"
            />



    <div className="flex flex-row">
    <div>
      <button  onClick={() => setVisible(true)}>Edit image</button>
      <Dialog visible={visible} onHide={() => setVisible(false)} footer={footer}>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {originalImage && (
          <AvatarEditor
            ref={(ref) => setEditor(ref)}
            image={originalImage}
            width={250}
            height={250}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1}
            rotate={0}
            borderRadius={125}
          />
        )}
      </Dialog>
      {croppedImage && (
        // <img
        //   src={croppedImage}
          
        //   alt="Cropped Image"
        //   className="h-[197px]  cursor-pointer hover:h-[240px]  ml-[60px] mt-[-8px] rounded-[50%] hover:w-[230px] z-[1]"
        // />
        renderUserImage()
      )}
         <button onClick={() => handleSave()}>Save</button>
    </div>
            {/* <label htmlFor="" className="mt-3 font-semibold text-3xl">Rishita Dhar</label>
            <button onClick={()=>setdialogs(true)}>upload</button>
            <Dialog visible={dialog} */}
{/* header={()=>
(
  <p htmlFor="" className="text-2xl font-semibold">updateImage</p>
)} onHide={()=>setimagecrop(false)}>
  <p> hi </p>

</Dialog> */}
            <div className=" bg-gray-200 flex flex-col gap-[19px] items-start justify-start ml-auto mr-[87px] mt-[-NaNpx] w-[73%] z-[1]">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[45%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtRamaraja30"
                >
                  <span className="text-gray-900 font-ramaraja text-left font-normal">
                    <>
                      Denis Kravets
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-quicksand text-left text-lg font-normal">
                    UI/UX Designer | HTML | CSS{" "}
                  </span>
                </Text>
                {/* <Button
                  className="common-pointer cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-10 sm:ml-[0] sm:mt-0 mt-5 text-center text-lg"
                  onClick={() => navigate("/userprofile")}
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                >
                  Rent{" "}
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-quicksand font-semibold leading-[normal] min-w-[88px] ml-2 sm:ml-[0] sm:mt-0 mt-5 text-center text-lg"
                  onClick={() => navigate("/userprofiletwo")}
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="outline"
                >
                  Hire
                </Button> */}
              
                {/* <InputText type="file" 
            accept='/image/*'
            onChange={(event)=>
            {
              const file=event.target.files[0];
              if(file&&file.type.substring(0,5)==='image'){setimage(file);

            }else{
              setimage(null);
            }}}/> */}
              </div>
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                size="txtQuicksandMedium22"
              >
                Lorem ipsum dolor sit amet consectetur. Leo in laoreet tempor
                lectus neque sit nec. Sed consectetur risus sed enim bibendum
                malesuada. Vel tortor ut convallis risus enim tortor imperdiet
                et. Congue dolor sit odio quis massa.
              </Text>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className='userprofilein bg-gray-200 border'>
    
            <div className='left '>
           
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right bg-gray-200 '>
            <h1 className="text-center font-bold text-2xl">YOU CAN EDIT YOUR PROFILE HERE</h1>
            {activepage==='accountsettings' &&<AccountSetting/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              {activepage === 'address' && <UserAddress/>}
              
            </div>
         </div>
         <PostForm onSubmit={handlePostSubmit} />
<App/>
<PostCard/>
    </section>
  );
};

export default UserProfileThree;










const PostForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // Call the onSubmit function with the post data
    if (onSubmit && (text.trim() || image)) {
      onSubmit({ text, image });
      setText('');
      setImage(null);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-gray-900 mt-10 via-black-900-500 to-white-A700 rounded-lg overflow-hidden shadow-lg p-8">
      <h2 className="text-3xl text-white-A700 mb-6">Create a Post</h2>
      <textarea
        className="w-full border text-black-900 border-gray-300 rounded-lg p-3 mb-6"
        placeholder="Write something... for the caption"
        value={text}
        onChange={handleTextChange}
        rows={4}
      />
      <label className="block mb-6">
        <span className="text-white">Upload Image</span>
        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1" />
      </label>
      {image && (
        <div className="bg-white rounded-lg overflow-hidden mb-6">
          <img src={image} alt="Uploaded" className="w-full" />
        </div>
      )}
      <button
        className="bg-white hover:bg-gray-200 text-white-A700 font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        Post
      </button>
    </div>
  );
};
const PostCard = ({ post }) => {
  // Check if post is undefined
  if (!post) {
    return null; // Render nothing if post is undefined
  }

  const { text, image } = post;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 mb-6">
      {image && (
        <div className="mb-6">
          <img src={image} alt="Uploaded" className="w-full rounded-lg" />
        </div>
      )}
      <div className="mb-4">
        <p className="text-gray-800 text-lg">{text}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <PostForm onSubmit={handleSubmit} />
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};