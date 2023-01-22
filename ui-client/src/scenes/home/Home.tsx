import { Footer, Navbar } from "../../ui-kit";

import * as styled from "./Home.styled";

const Home = () => {
  return (
    <>
      <Navbar />
      <styled.Container className="header">
        <styled.InnerContainer>
          <styled.Div>
            <styled.Title>Find your next adventure</styled.Title>
            <styled.Text>Where would you like to go next?</styled.Text>
            <styled.HomeButton>Explore Top Books</styled.HomeButton>
          </styled.Div>
        </styled.InnerContainer>
      </styled.Container>
      <Footer />
    </>
  );
};

export default Home;
