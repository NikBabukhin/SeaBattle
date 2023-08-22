import React, {useState} from "react";
import style from './MainWrapper.module.css';
import {BattlefieldWrapper} from "./BattlefieldWrapper/BattlefieldWrapper";
import {InterfaceArea} from "./InterfaceArea/InterfaceArea";
import {ConsoleArea} from "./ConsoleArea/ConsoleArea";


export const MainWrapper:React.FC<any> = () => {
    const [isVisible, setVisible] = useState(false)

    const onClickHandler = () => {
        setVisible(!isVisible)
    }

    return <>
        <button onClick={onClickHandler}>Click</button>
        <div className={style.wrapper}>
            <div className={style.main_content}>
                <BattlefieldWrapper/>
                <InterfaceArea/>
            </div>
            <ConsoleArea isVisible={isVisible}/>
        </div>
    </>
}
