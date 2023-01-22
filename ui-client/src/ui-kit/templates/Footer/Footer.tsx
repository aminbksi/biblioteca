import * as styled from "./Footer.styled";
const Footer = () => {
  return (
    <styled.Container className="main-color">
      <styled.FooterContainer className="main-color">
        <styled.HomeButton>Home</styled.HomeButton>
        <styled.HomeButton>Search</styled.HomeButton>
      </styled.FooterContainer>
    </styled.Container>
  );
};

export default Footer;
