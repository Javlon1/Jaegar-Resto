import './App.scss';
import Home from './Page/Home/Home';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './Page/Login/Login';
import { useEffect } from 'react';
function App() {
  const local = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (window.sessionStorage.getItem('token') !== 'rtqwqyuygdgyguyldaljkhannusgoey6sghhuqu7uu') {
      navigate('/')
    }
  }, [local.pathname])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
