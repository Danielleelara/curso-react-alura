import React from "react";
import { TextField, Button } from '@mui/material';


function Login(){
    return (

        <form>
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Senha" variant="filled" />
            <Button className= "button" variant="contained" color='primary'>Enviar</Button>
        </form>

    );
}

export default Login;
