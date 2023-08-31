import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Pages/Login/SignIn";
import AllProducts from "./Pages/AllProducts/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Pages/Login/SignUp";
import Header from "./Pages/Header";
import ProductList from "./Pages/ProductList";
import { FormProvider } from "./Context/FormContext";
import Form from "./Pages/AddProduct/MainForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MyProducts from "./Pages/MyProducts/MyProducts";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<AllProducts></AllProducts>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/productlist" element={<ProductList></ProductList>}></Route>
          <Route path="/myproducts" element={<MyProducts></MyProducts>}></Route>

          <Route
            path="/addproduct"
            element={
              <FormProvider>
                <Form></Form>
              </FormProvider>
            }
          ></Route>
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
