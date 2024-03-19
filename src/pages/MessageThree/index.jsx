import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const MessageThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-quicksand sm:gap-10 md:gap-10 items-start justify-between mx-auto pl-[18px] w-full">
        <Sidebar className="!sticky !w-[236px] bg-white-A700 flex h-screen md:hidden justify-start md:mt-0 mt-8 overflow-auto md:px-5 rounded-[21px] top-[0]">
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[143px] mr-[93px]"
            onClick={() => navigate("/homepage21one")}
            leftIcon={
              <div className="mt-[18px] mb-[11px] mr-2.5 bg-white-A700">
                <Img src="images/img_line10.svg" alt="Line 10" />
              </div>
            }
          >
            <div className="font-bold leading-[normal] md:text-[23px] sm:text-[21px] text-[25px] text-left text-white-A700">
              Go Back
            </div>
          </Button>
          <div className="flex flex-row gap-[22px] items-center justify-between mt-[61px] w-full">
            <div className="font-ramaraja h-[59px] relative w-[18%]">
              <div className="h-[59px] m-auto w-full">
                <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                  size="txtRamaraja35Gray900"
                >
                  D
                </Text>
              </div>
              <div className="absolute bg-red-900 h-3 right-[0] rounded-[50%] top-[0] w-3"></div>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer font-bold font-quicksand leading-[normal] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
              onClick={() => navigate("/messageone")}
            >
              <>
                Denis Kravets
                <br />
                Sent you a message
              </>
            </Button>
          </div>
          <div className="flex flex-row font-ramaraja gap-[22px] items-center justify-between mt-[25px] w-full">
            <div className="h-[59px] relative w-[18%]">
              <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                size="txtRamaraja35Gray900"
              >
                D
              </Text>
            </div>
            <div className="flex flex-col font-quicksand items-center justify-start">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtQuicksandBold22WhiteA700"
              >
                <span className="text-white-A700 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                  Sent you a message
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-row font-ramaraja gap-[22px] items-center justify-between mt-[25px] w-full">
            <div className="h-[59px] relative w-[18%]">
              <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                size="txtRamaraja35Gray900"
              >
                D
              </Text>
            </div>
            <div className="flex flex-col font-quicksand items-center justify-start">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtQuicksandBold22WhiteA700"
              >
                <span className="text-white-A700 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                  Sent you a message
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-row font-ramaraja gap-[22px] items-center justify-between mt-[25px] w-full">
            <div className="h-[59px] relative w-[18%]">
              <div className="h-[59px] m-auto w-full">
                <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                  size="txtRamaraja35Gray900"
                >
                  D
                </Text>
              </div>
              <div className="absolute bg-red-900 h-3 right-[0] rounded-[50%] top-[0] w-3"></div>
            </div>
            <div className="flex flex-col font-quicksand items-center justify-start">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtQuicksandBold22WhiteA700"
              >
                <span className="text-white-A700 font-quicksand text-left font-semibold">
                  <>
                    Denis Kravets
                    <br />
                  </>
                </span>
                <span className="text-gray-500 font-quicksand text-left text-lg font-medium">
                  Sent you a message
                </span>
              </Text>
            </div>
          </div>
        </Sidebar>
        <div className="flex-1 h-[900px] md:h-[920px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-[98%]">
            <div className="flex md:flex-col flex-row font-ramaraja md:gap-5 items-center justify-start w-[99%] md:w-full">
              <div className="h-[59px] relative w-[5%] md:w-full">
                <div className="absolute bg-white-A700 h-[42px] inset-x-[0] mx-auto rounded-[50%] top-[7%] w-[42px]"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-[48%] sm:w-full"
                  size="txtRamaraja35Gray900"
                >
                  D
                </Text>
              </div>
              <div className="flex flex-col font-quicksand items-center justify-start md:ml-[0] ml-[22px]">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtQuicksandSemiBold22"
                >
                  Denis Kravets
                </Text>
              </div>
              <Img
                className="common-pointer h-[42px] md:h-auto md:ml-[0] ml-[768px] object-cover w-[42px]"
                src="images/img_maskgroup_42x42.png"
                alt="maskgroup"
                onClick={() => navigate("/message")}
              />
            </div>
            <Text
              className="mt-[467px] text-blue_gray-900 text-lg"
              size="txtQuicksandMedium18Bluegray900"
            >
              Start a conversation with your client
            </Text>
            <Input
              name="group183"
              placeholder="Write a message"
              className="font-medium font-quicksand leading-[normal] p-0 placeholder:text-gray-500 text-left text-lg w-full"
              wrapClassName="mt-[200px] rounded-[30px] w-full"
              color="white_A700"
              size="xs"
            ></Input>
          </div>
          <div className="absolute flex inset-[0] justify-center m-auto w-full">
            <Line className="bg-white-A700 h-[900px] my-auto w-px" />
            <Line className="bg-white-A700 h-px ml-[-1px] mr-auto mt-[116px] w-full z-[1]" />
            <Img
              className="h-[261px] ml-[undefinedpx] mr-auto my-auto object-cover w-[261px] z-[1]"
              src="images/img_messageicon.png"
              alt="messageicon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageThreePage;
