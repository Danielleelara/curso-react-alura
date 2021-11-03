import React from "react";
import { TextField, Button } from '@mui/material';


function Login(){
    return (

        <div>
            <form>
                <TextField id="filled-basic" label="Email" variant="filled" />
                <div className="nome">
                    <TextField id="filled-basic" label="Senha" variant="filled" />
                </div>
                <div className="email">
                <Button variant="contained"color="secondary" >Enviar</Button>
                </div>
                <a href=' '>Primeiro Acesso</a>
            </form>
           
        </div>

                );
                }

                export default Login;
