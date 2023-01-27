
import Home from './pages/Home'
import Login from './pages/Login';
import Registro from './pages/Registro';
import './style.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";  
import { useContext } from 'react';
import { AuthContext } from './components/context/AuthContext';
function App() {

  const {usuarioAtual} = useContext(AuthContext)

  const ProtectedRoute = ({children}) =>{
    if (!usuarioAtual) {
      return <Navigate to='/login'/>
    }

    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element=
          {<ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
