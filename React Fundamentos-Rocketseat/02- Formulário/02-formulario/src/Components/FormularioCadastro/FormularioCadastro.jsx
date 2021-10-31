import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel} from '@material-ui/core';


function FormularioCadastro({aoEnviar}){
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
   
    return(
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes})

            }}>
            <TextField 
                value = {nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome" 
                color="secondary" 
                label="Nome" 
                variant="outlined" 
                margin="normal"
                fullWidth 
                
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
                 onChange={(event) => {
                    setCpf(event.target.value);
                }}
                value={ cpf }
                id="CPF" 
                label="CPF" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />  
            <FormControlLabel
                label="Promoções" 
                control={
                    <Switch 
                    checked={promocoes} 
                    onChange={(event) => {
                    setPromocoes(event.target.checked);
                }}
                name="promoções" 
                defaultChecked={promocoes} 
                color="primary" 
                />
            }
            />
             <FormControlLabel
                label="Novidades" 
                control={
                    <Switch
                    checked={novidades}
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                    name="novidades" 
                    defaultChecked={novidades}
                    color="primary" 
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>

        </form>);
}

export default FormularioCadastro;