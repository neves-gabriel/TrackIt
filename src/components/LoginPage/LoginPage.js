import { postLogIn } from "../../service/trackit";
import { Body, Container, Logo, Input, Button, GoTo } from '../shared/StyledComponents.js';
import logo from '../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function LoginPage() {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const history = useHistory();

    function login (event) {

        event.preventDefault();

        const body = {
            email,
            password
        }

        postLogIn(body).then( () => history.push('/habitos') ).catch( err => console.log(err.response.data.message) )
    }
  
    return (
        <Body>
            <Logo src={logo}/>
            <Container>
                <form onSubmit={login}> 
                    <Input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    <Input type="password" name="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                    <Button>Entrar</Button>
                </form>
                <Link to={`/cadastro`}>
                    <GoTo>Não tem uma conta? Cadastre-se!</GoTo>
                </Link>
            </Container>
        </Body>
    );
}