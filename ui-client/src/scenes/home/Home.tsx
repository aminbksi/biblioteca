import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "shared/hooks/useStore";
import { Footer, Navbar } from "../../ui-kit";

import * as styled from "./Home.styled";
import { BookItem } from "./pages";

const Home = () => {
  const { homeStore } = useStore();

  useEffect(() => {
    homeStore.fetchBooks();
  }, [homeStore]);
  return (
    <>
      <Navbar />
      <styled.HomeContainer>
        <styled.BooksContainer>
          <styled.ArrowButton
            onClick={() => homeStore.setIndex(homeStore.books.length)}
          >
            &lt;
          </styled.ArrowButton>
          <styled.BooksRow>
            <BookItem book={homeStore.currentBook} />
          </styled.BooksRow>
          <styled.ArrowButton
            onClick={() => homeStore.setIndex(homeStore.books.length)}
          >
            &gt;
          </styled.ArrowButton>
        </styled.BooksContainer>
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

export default observer(Home);
