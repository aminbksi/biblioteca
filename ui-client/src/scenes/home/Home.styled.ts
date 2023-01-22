import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 5px;
  background-color: #343a40;
`;

export const InnerContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

export const Div = styled.div``;

export const HomeButton = styled.button`
  padding: 10px 10px;
  font-size: 1.25rem;
  line-height: 1;
  background: transparent;
  border: 1px solid grey;
  background: #343a40;

  color: white;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background: #17546e;
  }
`;

export const Text = styled.p`
  width: 640px;
  flex: 0 0 640px;
  max-width: 640px;
  font-size: 16px;
`;

export const HomeContainer = styled.div`
  overflow-y: scroll;
  margin: 80px 0 54px;
`;

export const BottomContainer = styled.div`
  margin-bottom: 5px;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const InnerDiv = styled.div`
  position: relative;
  width: 50%;
  min-height: 1px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const BottomTitle = styled.h1`
  font-size: 84px;
  line-height: 1.17;
  letter-spacing: -1.5px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  justify-content: flex-end;
  margin-bottom: 30px;
`;
