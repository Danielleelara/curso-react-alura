import React from "react";
import { TextField } from '@mui/material';


function Login(){
    return (

        <form>
            <TextField id="filled-basic" label="Nome" variant="filled" />
            <TextField id="filled-basic" label="Senha" variant="filled" />
            <button>Enviar

            </button>
        </form>

    );
}

export default Login;
