import { Footer, Navbar } from "../../ui-kit";

import * as styled from "./Home.styled";

const Home = () => {
  return (
    <>
      <Navbar />
      <styled.HomeContainer>
        <styled.TopContainer className="header">
          <styled.InnerContainer>
            <styled.Div>
              <styled.Title>Find your next adventure</styled.Title>
              <styled.Text>Where would you like to go next?</styled.Text>
              <styled.HomeButton>Explore Top Books</styled.HomeButton>
            </styled.Div>
          </styled.InnerContainer>
        </styled.TopContainer>
        <styled.BottomContainer>
          <styled.BottomDiv>
            <styled.InnerDiv>
              <styled.BottomTitle>
                Can't find what you are looking for?
              </styled.BottomTitle>

              <styled.ButtonContainer>
                <styled.HomeButton>Sign up</styled.HomeButton>
              </styled.ButtonContainer>
            </styled.InnerDiv>
            <div className="col-lg-4 offset-lg-1 shadow-lg lost-image"></div>
          </styled.BottomDiv>
        </styled.BottomContainer>
      </styled.HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
