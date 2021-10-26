import React from 'react';
import { Button, TextField, Switch, FormControlLabel, Typography} from '@material-ui/core';

function FormularioCadastro(){
    return(
        <form>
            <TextField 
                id="nome" 
                color="secondary" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField 
                id="CPF" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />  
            <FormControlLabel
                label="Promoções" 
                control={<Switch name="promoções" 
                defaultChecked={true} color="primary" />}
            />
             <FormControlLabel
                label="Novidades" 
                control={<Switch name="novidades" 
                defaultChecked={true} color="primary" />}
            />

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>

        </form>);
}

export default FormularioCadastro;