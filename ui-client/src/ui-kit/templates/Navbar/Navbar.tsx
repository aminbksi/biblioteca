import * as styled from "./Navbar.styled";

const Navbar = () => {
  return (
    <styled.NavContainer className="main-color">
      <styled.LeftContainer>
        <styled.Logo>Biblioteca</styled.Logo>
        <styled.HomeButton>Home</styled.HomeButton>
        <styled.HomeButton>Search</styled.HomeButton>
      </styled.LeftContainer>
      <styled.HomeButton>Signin</styled.HomeButton>
    </styled.NavContainer>
  );
};

export default Navbar;
