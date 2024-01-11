import { CityInput } from "../Atoms/CityInput";
import { EmailInput } from "../Atoms/EmailInput";
import { Header } from "../Atoms/Header";
import { MobileInput } from "../Atoms/MobileInput";
import { NameInput } from "../Atoms/NameInput";
import { PasswordInput } from "../Atoms/PasswordInput";
import { Submit } from "../Atoms/Submit";
import './Container.css'


export function SignUp(){
    return(
        <div className="container">
        <div className="inputs">
        <Header/>
        <NameInput/>
        <EmailInput/>
        <MobileInput/>
        <CityInput/>
        <PasswordInput/>
        <Submit/>
        </div>
        </div>
    );
}