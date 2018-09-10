import styled from "styled-components";

interface FretNoteProps {
  inKey: boolean;
}

export const FretNote = styled.span<FretNoteProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.inKey ? "black" : "white")};
  color: ${props => (props.inKey ? "white" : "black")};
  border-radius: 50%;
  margin: 16px;
  height: 32px;
  width: 32px;
  font-size: 14px;
`;
