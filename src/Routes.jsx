import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import NotFound from "pages/NotFound";
const HomePage = React.lazy(() => import("pages/HomePage"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const HomePageFive = React.lazy(() => import("pages/HomePageFive"));
const HomePageFour = React.lazy(() => import("pages/HomePageFour"));
const HomePageThree = React.lazy(() => import("pages/HomePageThree"));
const SearchButtonThree = React.lazy(() => import("pages/SearchButtonThree"));
const SearchButtonOne = React.lazy(() => import("pages/SearchButtonOne"));
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const MessageOne = React.lazy(() => import("pages/MessageOne"));
const SignUpOne = React.lazy(() => import("pages/SignUpOne"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const SignUpFive = React.lazy(() => import("pages/SignUpFive"));
const Frame = React.lazy(() => import("pages/Frame"));
const UserProfileOne = React.lazy(() => import("pages/UserProfileOne"));
const UserProfileThree = React.lazy(() => import("pages/UserProfileThree"));
const UserProfileTwo = React.lazy(() => import("pages/UserProfileTwo"));
const UserProfile = React.lazy(() => import("pages/UserProfile"));
const UserProfileFour = React.lazy(() => import("pages/UserProfileFour"));
const Message = React.lazy(() => import("pages/Message"));
const MessageTwo = React.lazy(() => import("pages/MessageTwo"));
const MessageThree = React.lazy(() => import("pages/MessageThree"));
const NotificationOne = React.lazy(() => import("pages/NotificationOne"));
const Notification = React.lazy(() => import("pages/Notification"));
const NotificationTwo = React.lazy(() => import("pages/NotificationTwo"));
const SearchButtonTwo = React.lazy(() => import("pages/SearchButtonTwo"));
const SearchButtonFour = React.lazy(() => import("pages/SearchButtonFour"));
const HomePage21One = React.lazy(() => import("pages/HomePage21One"));
const HomePage21 = React.lazy(() => import("pages/HomePage21"));
const HomePage22 = React.lazy(() => import("pages/HomePage22"));
const HomePageTwo = React.lazy(() => import("pages/HomePageTwo"));
const SignUpFour = React.lazy(() => import("pages/SignUpFour"));
const SignUp21 = React.lazy(() => import("pages/SignUp21"));
const Rentcomponent = React.lazy(() => import("pages/Rentcomponent"));
const Hirecomponent = React.lazy(() => import("pages/Hirecomponent"));

const SignUpThree = React.lazy(() => import("pages/SignUpThree"));
const SignUpTwo = React.lazy(() => import("pages/SignUpTwo"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const LandingTwo = React.lazy(() => import("pages/LandingTwo"));
const Landing1 = React.lazy(() => import("pages/Landing1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landing1" element={<Landing1 />} />
          <Route path="/landingtwo" element={<LandingTwo />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/frametwo" element={<FrameTwo />} />
         
          <Route path="/aboutus" element={<AboutUs />} />
       
          <Route path="/signup21" element={<SignUp21 />} />
          <Route path="/signuptwo" element={<SignUpTwo />} />
          <Route path="/signupthree" element={<SignUpThree />} />
          <Route path="/signupfour" element={<SignUpFour />} />
          <Route path="/homepagetwo" element={<HomePageTwo />} />
          <Route path="/homepage22" element={<HomePage22 />} />
          <Route path="/homepage21" element={<HomePage21 />} />
          <Route path="/homepage21one" element={<HomePage21One />} />
          <Route path="/searchbuttonfour" element={<SearchButtonFour />} />
          <Route path="/searchbuttontwo" element={<SearchButtonTwo />} />
          <Route path="/notificationtwo" element={<NotificationTwo />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/notificationone" element={<NotificationOne />} />
          <Route path="/messagethree" element={<MessageThree />} />
          <Route path="/messagetwo" element={<MessageTwo />} />
          <Route path="/message" element={<Message />} />
          <Route path="/user/:activepage" element={<UserProfileFour />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userprofiletwo" element={<UserProfileTwo />} />
          <Route path="/userprofilethree" element={<UserProfileThree />} />
          <Route path="/userprofileone" element={<UserProfileOne />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/signupfive" element={<SignUpFive />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupone" element={<SignUpOne />} />
          <Route path="/messageone" element={<MessageOne />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/searchbuttonone" element={<SearchButtonOne />} />
          <Route path="/searchbuttonthree" element={<SearchButtonThree />} />
          <Route path="/rentcomponent" element={<Rentcomponent />} />
          <Route path="/hirecomponent" element={<Hirecomponent />} />
          <Route path="/homepagethree" element={<HomePageThree />} />
          <Route path="/homepagefour" element={<HomePageFour />} />
          {/* <Route  path="/user/:activepage" element={<UserProfileFourPage/>}/> */}
          <Route path="/homepagefive" element={<HomePageFive />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
