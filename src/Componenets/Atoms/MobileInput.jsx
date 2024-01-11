import './input.css'
import Mobile_icon from '../Assets/telephone.png';


export function MobileInput(){
    return(
        <div className="input">
            <img src={Mobile_icon} alt="MobileIcon" />
            <input type='number' placeholder='Please Enter Mobile no.'/>
        </div>
    );
}