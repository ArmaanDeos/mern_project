import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/products/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

const App = () => {
  const isAdmin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.data.user.isAdmin;

  // console.log(
  //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  //     .currentUser.data.user.isAdmin
  // );

  return (
    <BrowserRouter>
      {isAdmin && (
        <>
          <Topbar />
          <div className="fixedContainer">
            <Sidebar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      )}

      {!isAdmin && (
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
