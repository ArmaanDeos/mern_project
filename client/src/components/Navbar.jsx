import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

const Logo = styled.h2`
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
  color: royalblue;
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
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>rymoShop</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search here..." />
            <SearchIcon style={{ color: "gray", fontSize: "18px" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="success">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
