import React, { useState } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom"; // Import Link
import { Button, Img, Input, Text } from "components";
import { account } from "services/appwrite";
import { AppwriteException } from "appwrite";

const SignInPage = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const { username }=location.state && location.state.username ? location.state.username : "";
  const [identifier, setIdentifier] = useState(""); // Use identifier for both email or username
  const [password, setPassword] = useState("");

  // Initialize Appwrite
 
  const handleSignIn = async () => {
    if (!identifier || !password) {
      alert("Please enter both identifier and password.");
      return;
    }

    try {
      const response = await account.createEmailPasswordSession(identifier, password);
       // Store session data in local storage
       localStorage.setItem("session", JSON.stringify(response));

      console.log(response); // Handle successful authentication
      navigate("/HomePageTwo",{state:{username:username}}); // Redirect to the home page
    } catch (error) {
      console.error("Error signing in:", error);
      if (error instanceof AppwriteException) {
        alert("Error signing in. Please check your credentials and try again.");
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-quicksand sm:gap-10 md:gap-10 gap-[107px] h-[900px] justify-start mx-auto p-8 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_signin.png')" }}
      >
        <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[7px] md:px-5 w-[11%] md:w-full"  >
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[143px]"
            onClick={() => navigate("/Landingtwo")}
            leftIcon={
              <div className="mt-[18px] mb-[11px] mr-2.5 ">
                <Img className="h-3" src="images/img_line10.svg" alt="Line 10" />
              </div>
            }
          >
            <div className="font-bold leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left text-white-A700">
              Go Back
            </div>
          </Button>
        </div>
        <div className="flex flex-col items-center mb-[42px] md:ml-[0] ml-[7px] mr-[105px] sm:pl-5 pl-[97px] md:px-5 w-[92%] md:w-full">
          <div className="flex md:h-[1019px] h-[653px] relative w-full">
            <div className="bg-white-A700 h-[621px] m-auto rounded-[18px] w-[98%]"></div>
            <div className="absolute border-2 border-gray-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[18px] w-full" style={{paddingLeft:"1rem"}}>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-[98%] md:w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[216px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-gray-500 text-lg"
                      size="txtQuicksandRegular18"
                    >
                      Email ID or Username *
                    </Text>
                    <Input
                      name="email"
                      type="text"
                      placeholder=""
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className="p-0 w-full"
                      wrapClassName="flex h-12 mt-0.5 w-full"
                      shape="round"
                    />
                    <Text
                      className="mt-4 text-gray-500 text-lg"
                      size="txtQuicksandRegular18"
                    >
                      Password *
                    </Text>
                    <Input
                      name="password"
                      type="password"
                      placeholder=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="p-0 w-full"
                      wrapClassName="border border-gray-900 border-solid flex flex-col items-end justify-start mt-0.5 p-2 rounded-[9px] w-full"
                      shape="round"
                    />
                    <a href="javascript:" className="mt-1.5 text-[15px] text-red-900">
                      <Text size="txtQuicksandRegular15">Forgot Password?</Text>
                    </a>
                  </div>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[122px] mt-[58px] rounded-[22px] text-center text-lg"
                    color="gray_500"
                    size="md"
                    variant="fill"
                    onClick={handleSignIn}
                  >
                    Continue
                  </Button>
                  <a className="mt-[9px] text-lg text-red-900">
                    <Text
                      className="common-pointer"
                      size="txtQuicksandMedium18"
                      onClick={() => navigate("/frametwo")}
                    >
                      <span className="text-gray-900 font-quicksand text-left font-medium">
                        Don’t have an account?
                      </span>
                      <span className="text-red-900 font-quicksand text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-deep_orange-A200 font-quicksand text-left font-semibold">
                        Sign Up
                      </span>
                    </Text>
                  </a>
                </div>
                <Img
                  className="h-[621px] md:h-auto object-cover rounded-br-[18px] rounded-tr-[18px]"
                  src="images/img_30847931.png"
                  alt="30847931"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
