import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HomeButton = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  background: transparent;
  border: 1px solid grey;

  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 10px;

  :hover {
    background-color: #17546e;
  }
`;
