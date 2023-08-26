import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/Login/SignIn';
import AllProducts from './Pages/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn></SignIn>}></Route>
        <Route path="/allproducts" element={<AllProducts></AllProducts>}></Route>
      </Routes>
    </div>
  );
}

export default App;
