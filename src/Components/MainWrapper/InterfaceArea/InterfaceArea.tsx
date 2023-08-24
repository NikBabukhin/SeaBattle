import style from "./InterfaceArea.module.css";
import React from "react";

export const InterfaceArea = () => {
    return <div className={style.interface}>
        <div className={style.buttons_wrapper}>
            <button>play</button>
            <button>?</button>
        </div>
        <button className={style.console_button}>console</button>
    </div>
}