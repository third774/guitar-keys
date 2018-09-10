import React from "react";
import styled from "styled-components";
import {Note, NormalizedNote} from "utils/notes";
import {GuitarString} from "components/GuitarString";

interface FretBoardProps {
  tuning: Note[];
  scale: NormalizedNote[];
}

const FretBoardContainer = styled.div`
  flex-grow: 1;
`;

export const FretBoard: React.SFC<FretBoardProps> = ({tuning, scale}) => (
  <FretBoardContainer>
    {tuning.map((openNote, i) => (
      <GuitarString key={i} notes={scale} rootNote={openNote} />
    ))}
  </FretBoardContainer>
);
