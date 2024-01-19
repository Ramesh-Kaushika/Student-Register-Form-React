import './StyleLogin.css'
import AvatarMod from "../../components/Avatar/Avatar.jsx";
import {TextPassword, TextUserName} from "../../components/TextMod/TextMod.jsx";
import LogInButton, {CreateAccountButton} from "../../components/ButtonsMod/ButtonsMod.jsx";
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import React from "react";
import {Link,useNavigate} from 'react-router-dom'

export default function Login() {

    const [position, setPosition] = React.useState(50);

    return (

        <div className={'set-image'}>

            <div className={'div-mod'}>
                <h1 style={{color:"white"}} >Student Register Form</h1>
                <br/>
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
                    <LogInButton name={'Log in'}/>
                    <br/>
                    <Box sx={{textAlign:'center'}}>
                        <p style={{color:'white'}}>Forgot password?</p>
                    </Box>
                    <br/>
                    <Divider sx={{ borderColor:'Black'}}/>


                    <br/>
                    <Link to={'/form'}>
                        <CreateAccountButton/>
                    </Link>

                </div>

            </div>
        </div>


    )

}