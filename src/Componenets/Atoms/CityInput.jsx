import './input.css'
import City_icon from '../Assets/location.png';


export function CityInput(){
    return(
        <div className="input">
            <img src={City_icon} alt="CityIcon" />
            <input type="text" placeholder='Please Enter City'/>
        </div>
    );
}