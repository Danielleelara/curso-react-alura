import React from "react";
import { TextField,Button } from "@material-ui/core";

function Cadastro(){
    return (
        <form>
            <TextField id="filled-basic" label="Email" variant="filled" />
                <div className="nome"> //
                    <TextField id="filled-basic" label="Nome" variant="filled" />
                </div>
                <div>
                    <TextField id="filled-basic" label="Senha" variant="filled" />
                </div>
                <div className="email">
                    <Button variant="contained"color="secondary">Enviar</Button>
                </div>
        </form>
    )
}

export default Cadastro;