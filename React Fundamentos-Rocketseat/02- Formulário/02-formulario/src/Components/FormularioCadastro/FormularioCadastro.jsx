import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel, Typography} from '@material-ui/core';


function FormularioCadastro(){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    
    return(
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                console.log(nome, sobrenome);
                
                
            }}>
            <TextField 
                value = {nome}
                onChange={(event) => {
                    let tmpNome = event.target.value;
                        if(tmpNome.length >= 3){
                            tmpNome=tmpNome.substr(0,3);
                        }
                    setNome(tmpNome);
                }}
                id="nome" 
                color="secondary" 
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />
            <TextField 
                value = { sobrenome }
                onChange={(event) => {
                    setSobrenome(event.target.value);

                }}
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