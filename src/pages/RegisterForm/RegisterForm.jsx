import AvatarMod from "../../components/Avatar/Avatar.jsx";
import {FormTextField, TextPassword, TextUserName} from "../../components/TextMod/TextMod.jsx";
import LogInButton, {CreateAccountButton} from "../../components/ButtonsMod/ButtonsMod.jsx";
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import './StyleForm.css'

export default function RegisterForm() {

    return(
        <div className={'parent'}>
            <div className={'div-mod'}>

                <div>
                    <h1>Sign Up</h1>
                </div>
                <br/><br/>
                <div>
                   <FormTextField ho={' First Name'} P1={'First Name'} M1={'only-8 Characters'}/>
                </div>
                <br/>
                <div>
                    <FormTextField ho={' E-mail'} P1={'E-mail'} M1={'only @ Gmail'}/>
                </div>
                <br/>
                <div>
                    <FormTextField ho={' Password'} P1={'Password'} M1={'only-8 Characters'}/>
                </div>
                <br/><br/>
                <div>
                    <Divider sx={{ borderColor:'Black'}}/>
                    <br/>

                    <LogInButton name={'Log in'}/>

                </div>

            </div>
        </div>



    )

}