import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const LandingTwo = () => {
  const navigate = useNavigate();
  const onLineClick = useCallback(() => {
    navigate("/landing-2");
  }, [navigate]);

  const onSignInSignUpClick = useCallback(() => {
    console.log("hello")
    // Please sync "Sign In" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Frame" to the project
  }, []);

  return (
    <div className="w-auto h-auto bg-gray  overflow-y-hidden flex flex-row items-start justify-start py-0 pr-[25px] pl-0 box-border relative gap-[0px_36px] tracking-[normal] mq750:gap-[0px_18px] ">
      <div className="mb-[-124px] h-[1024px] w-[15px] relative box-border border-r-[15px] border-solid border-white" />
      <section className="mb-0 h-auto flex-1 overflow-y-auto flex flex-col items-start justify-start gap-[121px_0px] max-w-[calc(100%_-_51px)] text-left text-6xl text-chocolate font-quicksand lg:gap-[60px_0px] mq450:gap-[15px_0px] mq750:gap-[30px_0px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <b className="w-40 mt-6 relative inline-block">SKILLSPHERE</b>
            <b className="h-[31px] mt-6  relative inline-block text-white whitespace-nowrap">
              ABOUT US
            </b>
          </div>
        </div>
        <div className="self-stretch h-[936px] relative shrink-0 max-w-full text-[140px] text-white font-ramaraja">
          <div className="absolute top-[0px] left-[613px] w-[744px] flex flex-row items-center justify-start max-w-full">
            <img
              className="h-[493px] w-auto relative max-w-full"
              loading="lazy"
              alt="hey"
              src="/main.png"
            />
            <img
              className="h-[175px] w-auto !m-20 right-[0px] bottom-[152px]  cursor-pointer"
              loading="lazy"
              alt=""
              src="/sc.png"
              onClick={onLineClick}
            />
          </div>
          <div className="absolute top-[48px] left-[0px] flex flex-col items-start justify-start gap-[91px_0px]">
            <div className="flex flex-col items-end justify-start gap-[5px_0px]">
              <h1 className="m-0 w-[591px] h-[186px] relative text-inherit font-normal font-inherit inline-block mq450:text-[35px] mq1050:text-[56px]">
                Collaborate
              </h1>
              <div className="w-[591px] relative text-[22px] font-medium font-quicksand inline-block box-border pl-[3px] mq450:text-[18px]">
                Collaborate seamlessly with fellow developers and designers to
                bring your projects to fruition. By fostering a culture of
                teamwork, you can leverage diverse skill sets and perspectives
                to tackle challenges and deliver exceptional results.
              </div> 
              {/* heading area */}
            </div>
            <div className="w-[304px] flex flex-row items-start justify-start py-0 px-8 box-border text-6xl font-quicksand">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-row items-start justify-start relative">
                  <button className="bg-white relative z-[1] mq450:text-xl mx-0 hover:bg-black h-[53px] w-[137px] rounded-full  cursor-pointer hover:text-white ml-5 font-bold font-   justify-items-center  font-quicksand text-[1.4rem] outline outline-2 outline-offset-2 "
                    onClick={onSignInSignUpClick}
                  >Sign In </button>
<button className="bg-white relative z-[1] mq450:text-xl mx-0 hover:bg-black h-[53px] w-[137px] rounded-full cursor-pointer hover:text-white ml-5 font-bold font-quicksand text-[1.4rem] justify-items-center outline outline-2 outline-offset-2 "
                    onClick={onSignInSignUpClick}
                  >Sign Up </button>




                  {/* <b className="relative z-[1] mq450:text-xl">Sign In</b> */}
                </div>
                <div className="flex flex-row items-start justify-start relative text-gray">
                  {/* <div
                    className="h-[53px] w-[137px] absolute !m-[0] top-[calc(50%_+_7.5px)] right-[-22px] rounded-31xl bg-white cursor-pointer"
                    onClick={onRectangleClick}
                  />
                  <b className="relative whitespace-nowrap z-[1] mq450:text-xl">
                    Sign Up */}
                  {/* </b> */}
                  
                </div>
              </div>
            </div>
          </div>
          {/* <img
            className="absolute top-[530px] left-[565px] w-[540px] h-[405.7px]   object-contain"
            loading="lazy"
            alt=""
            src="/land2.png" */}
          
        </div>
      </section>
    </div>
  );
};

export default LandingTwo;