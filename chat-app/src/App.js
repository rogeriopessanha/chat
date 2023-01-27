
import Home from './pages/Home'
import Login from './pages/Login';
import Registro from './pages/Registro';
import './style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
