import { useState } from 'react';
import { Form, FormCheck, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    const [isValidated, setIsValidated] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.stopPropagation();
        }
        setIsValidated(true);
    }
    
  return (
    <>
      <div className=''>
        <h4 className='text-center mb-2 fw-normal'>Welcome to LiveAuctioneers!</h4>
        <h6 className='text-center mb-4 fw-light'>Sign up and begin your treasure hunt.</h6>
        <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='email' className='fw-light'>EMAIL ADDRESS</Form.Label>
            <FormControl
                required
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter your email address.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mt-4'>
            <FormCheck className='d-inline-block' required />
            <span>&nbsp;I accept the <a href='#' className='link-underline-primary'>Terms</a> and <a href='#' className='link-underline-primary'>Cookie Policy</a>.</span>
            <Form.Control.Feedback type='invalid' />
          </Form.Group>

          <div className='form-group mt-4 mb-2'>
            <button type='submit' className='btn btn-danger text-uppercase fw-bold w-100'>Start Now</button>
          </div>
        </Form>

        <div className='text-center mt-3'>
          <span>Already have an account?&nbsp;</span><Link to={'/log-in'}>Log In</Link>
        </div>
      </div>
    </>
  )
}

export default RegisterForm