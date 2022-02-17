import {Component} from 'react';
import {Form, Button} from 'react-bootstrap'

class Registration extends Component{
    state={
        registration:{
            name: '',
            email: '',
            password:'',
            confirmPass:''
        },
        confirmedRegistration:false
    }

    //change the value every time the user put the relative info in the form
    insertData=(key, value)=>{
        this.setState({ registration: {
            ...this.state.registration,
            [key]:value,
            },
        });
    }


    //enable the button form, when the user put all the necessary info
    enableButton=()=>{
        let formOk=false
        if(
            this.state.registration.name.length>=2 &&
            this.state.registration.email.length>=3 &&
            this.state.registration.password.length>=8 &&
            this.state.registration.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)&&
            this.state.registration.password===this.state.registration.confirmPass){

                formOk=true
            }
        return formOk
    }


    //to control if the user is accepted or need to register
    handleRegistration=(e)=>{
        e.preventDefault();
        this.setState({
            confirmedRegistration:true
        })
    }

    render(){
        return(
            <div>
                {this.state.confirmedRegistration?(
                    <>
                    <h1>Welcome in our family!</h1>
                    <h3>This is your id:</h3>
                    <div>{this.state.registration.name}</div>
                    <div>{this.state.registration.email}</div>
                    </>
                ):(
                <Form onSubmit={this.handleRegistration}>
                    <Form.Group>
                        <Form.Label>Enter your name...</Form.Label>
                        <Form.Control 
                        type='text'
                        required
                        onChange={(e)=>this.insertData('name', e.target.value)}
                        value={this.state.registration.name}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your email...</Form.Label>
                        <Form.Control 
                        type='email'
                        required
                        onChange={(e)=>this.insertData('email', e.target.value)}
                        value={this.state.registration.email}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your password...</Form.Label>
                        <Form.Control 
                        type='password'
                        required
                        onChange={(e)=>this.insertData('password', e.target.value)}
                        value={this.state.registration.password}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm your password</Form.Label>
                        <Form.Control 
                        type='password'
                        required
                        onChange={(e)=>this.insertData('confirmPass', e.target.value)}
                        value={this.state.registration.confirmPass}/>
                    </Form.Group>
                    <Button type='submit' disabled={!this.enableButton()}>
                        Register
                    </Button>
                </Form>
                
                )
            }
            </div>
        )
    }
}

export default Registration