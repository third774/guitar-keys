import styled from "styled-components";

interface FretNoteProps {
  isRoot: boolean;
}

export const FretNote = styled.span<FretNoteProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isRoot ? "crimson" : "black")};
  color: white;
  border-radius: 50%;
  margin: 16px 0;
  height: 32px;
  width: 32px;
  font-size: 14px;
`;
