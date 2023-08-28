import style from './MainWrapper.module.css';
import {BattlefieldWrapper} from "./BattlefieldWrapper/BattlefieldWrapper";
import {InterfaceArea} from "./InterfaceArea/InterfaceArea";
import {ConsoleArea} from "./ConsoleArea/ConsoleArea";


export const MainWrapper:React.FC<any> = () => {

    return <div className={style.wrapper}>
            <div className={style.main_content}>
                <BattlefieldWrapper/>
                <InterfaceArea/>
            </div>
            <ConsoleArea isVisible={true}/>
        </div>
}
