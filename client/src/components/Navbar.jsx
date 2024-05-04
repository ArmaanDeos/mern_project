import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
`;

const LogoImg = styled.img`
  width: 40%;
  height: 40px;
  object-fit: cover;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  margin: 0px 10px;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 5px;
  outline: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  transition: 0.1s ease-in;

  &:hover {
    color: royalblue;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"}>
            <LogoImg src="https://i.ibb.co/vjtKmPM/LOGO.png" />
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search here..." />
            <SearchIcon style={{ color: "gray", fontSize: "18px" }} />
          </SearchContainer>
        </Center>
        <Right>
          <Link to={user ? "/logout" : "/login"}>
            <MenuItem>{user ? "Logout" : "Sign In"}</MenuItem>{" "}
          </Link>
          {!user && (
            <Link to={"/register"}>
              <MenuItem>Register</MenuItem>
            </Link>
          )}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
