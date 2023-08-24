import React from "react";
import './BattlefieldWrapper.module.css'
import style from "./BattlefieldWrapper.module.css"
import {Battlefield} from "./Battlefield/Battlefield";

export const BattlefieldWrapper:React.FC<any> = ({...props}) => {
    return <div className={style.battlefields}>
        <Battlefield side={'enemy'}/>
        <Battlefield side={'user'}/>
    </div>
}