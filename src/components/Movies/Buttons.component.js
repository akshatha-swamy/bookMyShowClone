import React,{useState} from "react";
import {RxCross2} from "react-icons/rx";

const Buttons=()=>{
    const [buttonStates, setButtonStates] = useState({});

    const handleButtonClick = (buttonId) => {
      setButtonStates((prevButtonStates) => ({
        ...prevButtonStates,
        [buttonId]: {
          isVisible: !prevButtonStates[buttonId]?.isVisible,
          bgColor: prevButtonStates[buttonId]?.isVisible ? '' : 'bg-buttonPink-300 text-white border border-buttonPink-300',
        },
      }));
    };
    
    return(
      <>
       
          <div className="flex gap-5 p-4 ">
          <button  className={`px-3 py-2 border border-grayIcon-200 rounded-full text-buttonPink-300 flex            items-center gap-2 ${
              buttonStates['kannada']?.bgColor || ''
              }`} onClick={() => handleButtonClick('kannada')}
              >Kannada{buttonStates['kannada']?.isVisible && <RxCross2 />}
         </button>
  
         <button  className={`px-3 py-2 border border-grayIcon-200 rounded-full text-buttonPink-300 flex            items-center gap-2 ${
              buttonStates['Hindi']?.bgColor || ''
              }`} onClick={() => handleButtonClick('Hindi')}
              >Hindi{buttonStates['Hindi']?.isVisible && <RxCross2 />}
         </button>
  
         <button  className={`px-3 py-2 border border-grayIcon-200 rounded-full text-buttonPink-300 flex            items-center gap-2 ${
              buttonStates['English']?.bgColor || ''
              }`} onClick={() => handleButtonClick('English')}
              >English{buttonStates['English']?.isVisible && <RxCross2 />}
         </button>
  
         <button  className={`px-3 py-2 border border-grayIcon-200 rounded-full text-buttonPink-300 flex            items-center gap-2 ${
              buttonStates['Telugu']?.bgColor || ''
              }`} onClick={() => handleButtonClick('Telugu')}
              >Telugu{buttonStates['Telugu']?.isVisible && <RxCross2 />}
         </button>

         <button  className={`px-3 py-2 border border-grayIcon-200 rounded-full text-buttonPink-300 flex            items-center gap-2 ${
              buttonStates['Tamil']?.bgColor || ''
              }`} onClick={() => handleButtonClick('Tamil')}
              >Tamil{buttonStates['Tamil']?.isVisible && <RxCross2 />}
         </button>

         <button  className={`px-3 py-2 border border-grayIcon-200 rounded-full text-buttonPink-300 flex            items-center gap-2 ${
              buttonStates['Malayalam']?.bgColor || ''
              }`} onClick={() => handleButtonClick('Malayalam')}
              >Malayalam{buttonStates['Malayalam']?.isVisible && <RxCross2 />}
         </button>
          </div>
          </>
    );
          
  
};

export default Buttons;