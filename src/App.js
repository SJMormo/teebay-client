import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/Login/SignIn';
import AllProducts from './Pages/AllProducts/AllProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/Login/SignUp';
import Header from './Pages/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<AllProducts></AllProducts>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
