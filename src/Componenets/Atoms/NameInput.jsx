import './input.css'
import User_icon from '../Assets/user.png';

export function NameInput(){
    return(
        <div className='input'>
            <img src={User_icon} alt="user_icon" />
            <input required type="text" placeholder='Please Enter Name'/>
        </div>
    );
}