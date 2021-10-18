import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
    ),
    url("https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")
    center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin-top: 10px;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input type="password" placeholder="password" />
                    <Input type="password" placeholder="confirm password" />
                    <Agreement>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>.
                    </Agreement>
                </Form>
                <ButtonWrapper>
                    <Button>CREATE</Button>
                </ButtonWrapper>
            </Wrapper>
        </Container>
    )
}

export default Register