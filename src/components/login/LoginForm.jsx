import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [isHide, setIsHide] = useState(true);
    const [isValidated, setIsValidated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
        if(form.checkValidity() === false){
            e.stopPropagation();
        }
        setIsValidated(true);
    }

    const handleShowPassword = () => {
      setIsHide(false);
    }

    const handleHidePassword = () => {
      setIsHide(true);
    }

  return (
    <>
      <div className=''>
        <h4 className='text-center mb-4 fw-normal'>Welcome to LiveAuctioneers!</h4>
        <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor='username' className='fw-light'>EMAIL ADDRESS / USERNAME</Form.Label>
            <FormControl
                required
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter your email address / username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <div className='row mt-4'>
              <div className='col-md-6'>
                <Form.Label htmlFor='password' className='fw-light'>PASSWORD</Form.Label>
              </div>
              <div className='col-md-6 text-end'>
                {isHide ? (
                  <span onClick={handleShowPassword} className='fw-light' role='button'><FiEye />&nbsp;SHOW</span>
                ) : (
                  <span onClick={handleHidePassword} className='fw-light' role='button'><FiEyeOff />&nbsp;HIDE</span>
                )}                
              </div>
            </div>              
            <FormControl
                required
                type={isHide ? `password` : `text`}
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type='invalid'>
              Please enter your password.
            </Form.Control.Feedback>
          </Form.Group>

          <div className='form-group mt-4 mb-2'>
            <button type='submit' className='btn btn-danger text-uppercase fw-bold w-100'>Log in</button>
          </div>
        </Form>

        <div className='text-center mt-2'>
          <a href='#' className='link-underline-primary'>Forgot Password?</a>
        </div>

        <div className='text-center mt-3'>
          <span>Don&apos;t have an account?&nbsp;</span><Link to={'/sign-up'}>Join</Link>
        </div>
      </div>
    </>
  )
}

export default LoginForm