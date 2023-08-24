import React from "react";
import style from "./ConsoleArea.module.css";

export const ConsoleArea:React.FC<any> = (props) => {
    return <div className={`${style.console} ${props.isVisible?style.open:''}`}>Console</div>
}