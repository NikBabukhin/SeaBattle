import React from "react";
import './BattlefieldWrapper.module.css'
import style from "./BattlefieldWrapper.module.css"

export const BattlefieldWrapper:React.FC<any> = ({...props}) => {
    return <div className={style.battlefields}>Battlefields</div>
}