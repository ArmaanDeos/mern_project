import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/products/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

const App = () => {
  // Retrieve isAdmin status from localStorage
  const isAdmin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.data.isAdmin;
  // const isAdmin = false;

  return (
    <BrowserRouter>
      <ConditionalTopbar />
      <div className="fixedContainer">
        <ConditionalSidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          {!isAdmin && <Route path="/login" element={<Login />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const ConditionalTopbar = () => {
  const location = useLocation();

  // Hide the topbar on the /login page
  if (location.pathname === "/login") {
    return null;
  }

  return <Topbar />;
};

const ConditionalSidebar = () => {
  const location = useLocation();

  // Hide the sidebar on the /login page
  if (location.pathname === "/login") {
    return null;
  }

  return <Sidebar />;
};

export default App;
