import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin';
import Table from './components/Table'
import Homepage from './components/Homepage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
