import React from "react";
import { TextField, Button } from '@mui/material';

function Login(){
    return (

        <div>
            <form>
                <span>
                <TextField id="filled-basic" label="Email" variant="filled" />
                </span>
                <div className="nome">
                    <TextField id="filled-basic" label="Senha" variant="filled" />
                </div>
                <div className="email">
                <Button id="Enviar"variant="contained"color="secondary" >Enviar</Button>
                </div>
                <a id="link" href=' '>Primeiro Acesso</a>
            </form>
           
        </div>

    );
}
    export default Login;
