import { ClassComponensts } from "./Componenets/Atoms/ClassComponents";
import { FunctionComponents } from "./Componenets/Atoms/FunctionComponents";
import { SignUp } from "./Componenets/Moleclues/SignUp";

export function App(){
    return(
        <div>
            {/* <FunctionComponents></FunctionComponents>
            <ClassComponensts></ClassComponensts> */}
            <SignUp></SignUp>
        </div>
    );
}