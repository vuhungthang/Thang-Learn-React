import { stat } from "fs";
import React from "react";
import { useState } from "react";


export function Counter() {
    const [num,setNum] = useState<number>(0);
  
    const increment = () => {
      setNum(num+1);
    }
  
    return(
      <>
        <p>The current click is {num}</p>
        <button onClick={increment}>Click me to Increment</button>
      </>
    )
}

export function Toggle() {
    const [isVisible, setVisible] = useState<boolean>(false)

    const buttonClick = () => {
        setVisible(!isVisible)
    }
    return(
    <>
        {/* {
        !isVisible 
        && <button onClick={buttonClick}>Show message</button>
        }

        {isVisible 
        && <button onClick={buttonClick}>Hide message</button>
        } */}

        <button onClick={buttonClick}>
            {isVisible ? "Hide message" : "Show message"}
        </button>



        {isVisible && <p>Your message is here</p>}
    </>
    )
}