import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login() {
    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            foto: '',
            senha: '',
            token: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token !== ""){
                    history('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!');
            }
        }

    return (
        <Grid className="container">
        <Box className="container-login">
            <Box className="wrap-login">
                <form onSubmit={onSubmit}>
                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='login-form-title'>Bem vindo!</Typography>

                <div className="wrap-input">
                <TextField data-placeholder="" className='decoration-none' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                
                </div>
                    
                <div className="wrap-input">
                <TextField className="focus-input"  data-placeholder="" value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                
                </div>

                    
                <Box className="container-login-form-btn">
                    <Button className="login-form-btn" type='submit' variant='contained'>
                                Logar
                    </Button>
                </Box>
                </form>

                
                    <Box className="text-center" >
                        <Typography className="txt1" variant='subtitle1'>Não possui uma conta?</Typography>
                   
                    <Link to='/cadastrousuario'>
                        <Typography className="txt2" variant='subtitle1'>Cadastre-se</Typography>
                    </Link>
                    </Box> 
                
            </Box>
        </Box>
        <Grid className="imagem">    
        </Grid>
    </Grid>    
    );
}

export default Login;