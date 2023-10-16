import { useState } from "react";
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
`
const LoginContainer = styled.div`
    width: 600px;
    height: 420px;
    border-radius: 10px;
    border:10px solid #BEADFA;
    > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 4%;
    
        > p {
            width: 500px;
            font-size: 16px;
            text-align: left;
        }
    }
   
`
const LoginInput = styled.input`
    width: 480px;
    height: 30px;
    border: 1px solid #beadfa;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
`
const LoginButton = styled.button`
    width: 300px;
    height: 60px;
    border-radius: 5px;
    background-color: #D0BFFF;
    color: white;
    border: none;
    font-size: 24px;
    margin-top: 3%;
`
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        //로그인 로직 
        console.log(username);
        console.log(password);
    }
    return (
        <MainContainer>
            <div> Login</div>
            <LoginContainer>
                <div>
                    <p>아이디</p>
                    <LoginInput
                        placeholder="아이디를 입력해주세요"
                        valie={username}
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <p>비밀번호</p>
                    <LoginInput
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        valie={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <LoginButton onClick={handleLogin}>로그인</LoginButton>
                </div>
            </LoginContainer>
        </MainContainer>
    );
};

export default Login;