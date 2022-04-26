import styled from "styled-components";

export const Container = styled.main`
  max-width: 70%;

  padding: 2rem 2.5rem;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5%;
`;

export const MarkDownArea = styled.textarea`
  resize: none;
  height: 70vh;
  width: 50%;

  border: 1px solid #000;

  padding: 1.25rem 1.5rem;

  font-size: 1rem;
  font-family: Arial;

  overflow-y: scroll ;
`;

export const HtmlArea = styled.div`
  height: 70vh;
  width: 50%;

  border: 1px solid #000;

  padding: 1.25rem 1.5rem;

  font-family: Arial;

  overflow-y: scroll;

  word-wrap: break-word;
`;
