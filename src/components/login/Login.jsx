import { FiX } from 'react-icons/fi';
import imageLogin from '../../assets/images/SignupLadySmall.webp';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='row border border-1 rounded'>
      <div className='col-md-4 p-0'>
        <img
          src={`${imageLogin}`}
          style={{ width: '100%', maxWidth: '240px', height: 'auto', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
        />
      </div>

      <div className='col-md-8 pt-3 pb-3 pe-5 ps-5'>
        <div className='text-end mb-3' role='button'><FiX /></div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login