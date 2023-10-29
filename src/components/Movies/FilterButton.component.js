import React,{useState} from "react";
import {RxCross2} from "react-icons/rx";

const FilterButton=(props)=>{
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
         
            <div className="flex gap-5 p-2 ">
            <button  className={`px-3 py-2 border border-grayIcon-200  text-buttonPink-300 flex  items-center gap-2 ${
                buttonStates[props.filter]?.bgColor || ''
                }`} onClick={() => handleButtonClick(props.filter)}
                >{props.filter}{buttonStates[props.filter]?.isVisible && <RxCross2 />}
           </button>
           </div>
           </>
    );
}

export default FilterButton;