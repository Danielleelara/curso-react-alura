import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import "fontsource-roboto";
class App extends Component {
  render(){
  return (
    <Container component="article" maxWidth="sm" >
    <Typography variant='h3' align='center'component='h1'>Formulário de Cadastro</Typography>
    <FormularioCadastro/>
    </Container>
  );
 }
}

export default App;
