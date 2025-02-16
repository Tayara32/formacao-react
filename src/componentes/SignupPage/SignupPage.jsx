import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


function SignupPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('en');

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const getGreeting = (nationality) => {
        switch (nationality) {
            case 'de': return 'Hallo';
            case 'fr': return 'Bonjour';
            default: return 'Hello';
        }
    };


  return (
    <div className="container mt-4">
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className={email ? (validateEmail(email) ? 'is-valid' : 'is-invalid') : ''}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className={password ? (validatePassword(password) ? 'is-valid' : 'is-invalid') : ''}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="nationality">Nationality</Label>
                    <Input 
                        type="select" 
                        id="nationality" 
                        value={nationality} 
                        onChange={(e) => setNationality(e.target.value)}
                    >
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </Input>
                </FormGroup>

                <p>{getGreeting(nationality)}</p>
                <p>Your email address is {email}</p>
                {email && (
                    validateEmail(email) ? 
                    <p>Your email address is correct</p> : 
                    ''
                )}
                <Button color="primary">Sign Up</Button>
            </Form>
        </div>
  )
}

export default SignupPage