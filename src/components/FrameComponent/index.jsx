import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent = (prop) => {
const navigate = useNavigate(); 
  const onLineClick = useCallback(() => {
    navigate("/Landing");
  }, [navigate]);

  return (
    <div className="flex flex-col items-end justify-start relative gap-[27rem_0rem] text-left text-[1.563rem] text-gray font-quicksand">
      <b className="relative z-[1] mq450:text-[1.25rem]">ABOUT US</b>
      <div className="w-[43.875rem] h-[56.313rem] absolute !m-[0] top-[-15.937rem] left-[-39.125rem]">
        {/* <img
          className="absolute top-[0rem] left-[10.125rem] w-[33.719rem] h-[26.844rem] ml-12 object-contain"
          loading="lazy"
          alt="hey"
          src="/whitesrc.png" */}
        {/* /> */}
        <img
          className="absolute top-[25.438rem] left-[-0.031rem] w-[41.281rem] h-[30.844rem] ml-16 object-contain z-[1]"
          alt=" hey1"
          src="/land1.png"
        />
        </div>
    
      <div className="flex flex-row absolute right-0 left-2  top-[200px] z-10 py-[0rem] px-[0.438rem]">
        <img
          className=" h-auto w-8 !m-20   cursor-pointer"
          loading="lazy"
          alt="jw"
          src="/wsc.png"
          onClick={onLineClick}
          />
      </div>
     
    </div>
  );
};
export  { FrameComponent };