import styled from "styled-components";

interface FretNoteProps {
  isRoot: boolean;
}

export const FretNote = styled.span<FretNoteProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isRoot ? "crimson" : "#333")};
  color: white;
  border-radius: 50%;
  margin: 12px 0;
  height: 28px;
  width: 28px;
  font-size: 12px;
`;
