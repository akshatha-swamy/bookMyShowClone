import React,{useState} from "react";
import {RxCross2} from "react-icons/rx";

const Button=(props)=>{
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
                buttonStates[props.lang]?.bgColor || ''
                }`} onClick={() => handleButtonClick(props.lang)}
                >{props.lang}{buttonStates[props.lang]?.isVisible && <RxCross2 />}
           </button>
           </div>
           </>
    );
}

export default Button;