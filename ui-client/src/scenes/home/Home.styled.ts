import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  margin-bottom: 4px;
  background-color: #ae84d9;
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
  border: 1px solid white;

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
