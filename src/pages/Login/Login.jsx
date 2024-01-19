import './StyleLogin.css'
import AvatarMod from "../../components/Avatar/Avatar.jsx";
import {TextPassword, TextUserName} from "../../components/TextMod/TextMod.jsx";
import LogInButton from "../../components/ButtonsMod/ButtonsMod.jsx";
import Box from "@mui/material/Box";

export default function Login() {

    return (
        <div className={'div-mod'}>

            <div>
                <AvatarMod/>
            </div>
            <br/><br/>
            <div>
                <TextUserName/>
            </div>
            <br/>
            <div>
                <TextPassword/>
            </div>
            <br/><br/>
            <div>
                <LogInButton/>
            </div>
            <br/><br/>

            <div className={'para-mod'}>
                <p>Remember me</p>
            </div>
            <div className={'para-mod1'}>
                <p>Forgot password?</p>
            </div>




        </div>

    )

}