import React, { ChangeEvent, useState, useEffect} from 'react'
import './Login.css';
import { Grid, Box, Typography, TextField, Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { addToken } from '../../store/tokens/actions';
import { useDispatch } from 'react-redux';

function Login() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',   
        token:''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=> {
        if(token != '') {
            dispatch(addToken(token));
            history('/home')
        }
    }, [token]) 

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuario logado com sucesso!')
        } catch (error) {
            alert('ERRO! Login incorreto, tente novamente!')
        }
    } 

    return (
        <><Grid className="container">
            <Box className="container-login">
                <Box className="wrap-login">
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='login-form-title'>Login</Typography>

                        <div className="wrap-input">
                            <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='e-mail' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <span className="focus-input" data-placeholder=""></span>
                        </div>

                        <div className="wrap-input">
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <span className="focus-input" data-placeholder=""></span>
                        </div>


                        <Box className="container-login-form-btn">
                            <Button className="login-form-btn" type='submit' variant='contained'>
                                Logar
                            </Button>
                        </Box>
                    </form>


                    <Box className="text-center">
                        <Typography className="txt1" variant='subtitle1'>Não possui uma conta? </Typography><Link to='/cadastrousuario'><Typography className="txt2" variant='subtitle1'>    Cadastre-se</Typography> </Link>
                    </Box>
                </Box>
            </Box>
        </Grid><Grid xs={6} className='imagem'>
            </Grid></>
    );
}

export default Login;