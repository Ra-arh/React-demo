import './input.css'
import Email_icon from '../Assets/email.png';


export function EmailInput(){
    return(
        <div className="input">
            <img src={Email_icon} alt="EmailIcon" />
            <input type="email" placeholder='Please Enter Email'/>
        </div>
    );
}