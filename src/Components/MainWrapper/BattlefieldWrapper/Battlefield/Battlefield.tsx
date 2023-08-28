import React from "react";
import style from "./Battlefield.module.css";
import crossImage from "./../../../../icons/xmark-solid.svg";
import fireImage from "./../../../../icons/fire-fill.svg";
import explosionImage from "./../../../../icons/explosion.svg";

type BattlefieldPropsType = {
    side: 'user' | 'enemy'
}


const state = {
    enemy: ['baseEnemy', 'missShotEnemy', 'hitShotEnemy', 'deadShipEnemy'],
    ally: ['baseAllied', 'missShotAllied', 'hitShotAllied', 'deadShipAllied', 'livingShipAllied']
}


export const Battlefield: React.FC<BattlefieldPropsType> = (props) => {


    return <div className={`${style.battlefield} ${props.side}`}>
        <table border={1}>
            <tr>
                <td></td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
            </tr>
            <tr>
                <td>A</td>
                <td className={style.baseEnemy}></td>
                <td className={style.missShotEnemy}>
                    <img src={crossImage} width={"100%"} height={"100%"}/>
                </td>
                <td className={style.hitShotEnemy}>
                    <img src={fireImage} width={"100%"} height={"100%"}/>
                </td>
                <td className={style.deadShipEnemy}>
                    <img src={explosionImage} width={'100%'} height={'100%'}/>
                </td>
                <td className={style.missShotAllied}></td>
                <td className={style.hitShotAllied}></td>
                <td className={style.deadShipAllied}></td>
                <td className={style.livingShipAllied}></td>
            </tr>
            <tr>
                <td>B</td>
                <td className={style.baseAllied}></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>C</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>D</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>E</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>F</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>G</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>H</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </div>

}