import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/Login/SignIn';
import AllProducts from './Pages/AllProducts/AllProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
      </Routes>
    </div>
  );
}

export default App;
