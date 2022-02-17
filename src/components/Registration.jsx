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

    insertData=(key, value)=>{
        this.setState({ registration: {
            ...this.state.registration,
            [key]:value,
            },
        });
    }

    acceptedForm=()=>{
        let passValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(
            this.state.registration.name.length>=2 &&
            this.state.registration.email.length>=3 &&
            this.state.registration.password.length>=2 &&
            this.state.registration.password.match(passValid)&&
            this.state.registration.password===this.state.registration.confirmPass){

                this.setState({
                    confirmedRegistration:true
                })
            }
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
                        <Form onSubmit={this.insertData}>
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
                                type='text'
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
                            <Button type='submit' disabled={!this.acceptedForm}>
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