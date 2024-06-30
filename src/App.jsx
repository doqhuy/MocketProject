import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/log-in' element={ <Login /> } />
            <Route path='/sign-up' element={ <Register /> } />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
