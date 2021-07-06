import React, { useContext,useState } from "react"
import {
    Container,
    Form,
    Button,
    FormGroup,
    Label,
    Input,
    Row,
    Card,
    Col,
    CardBody,
    CardFooter,
    CardHeader
} from "reactstrap"

import firebase from "firebase/app"
import { UserContext } from "../Context/UserContext"
import { Redirect } from "react-router"
import { toast } from "react-toastify"
import "../Css/SignIn.css"

const SignUp = () => {

    //context for user
    const context = useContext(UserContext)
    
    //states for email n password
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then( res => {
                console.log(res)
                context.setUser({email: res.user.email , uid: res.user.uid})
            })
            .catch(error => {
                console.log(error)
                toast(error.message, {
                    type:"error"
                })
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignUp()
    }
    if(context.user?.uid){
        return <Redirect to="/GithubSearchApp"/>
    }
    return (
        <Container className="text-center">
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                    <Card className="mysigninContainer">
                        <Form onSubmit={handleSubmit}>
                            <CardHeader className='signinformheader'>Sign Up here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label className="feildName" for='email' sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            className="inputSpace"
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='provide your email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label className="feildName" for='password' sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            className="inputSpace"
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='your password here'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' color='success'>
                                    Sign Up
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;

