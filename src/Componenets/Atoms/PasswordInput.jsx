import './input.css'
import Password_icon from '../Assets/padlock.png';


export function PasswordInput(){
    return(
        <div className="input">
            <img src={Password_icon} alt="PasswordIcon" />
            <input type='password' placeholder='Please Enter Password'/>
        </div>
    );
}