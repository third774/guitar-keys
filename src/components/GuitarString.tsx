import React from "react";
import styled from "styled-components";
import {NormalizedNote, Note} from "utils/notes";
import {shiftToBack} from "utils/shiftToBack";
import {FretNote} from "./FretNote";

const Container = styled.div`
  display: flex;
`;

interface FretProps {
  distanceFromRoot: number;
}

const Fret = styled.div<FretProps>`
  display: flex;
  justify-content: ${props =>
    props.distanceFromRoot > 0 ? "center" : "flex-end"};
  align-items: center;
  flex-grow: ${props => (props.distanceFromRoot > 0 ? 1 : 0)};
  flex-basis: 40px;
  flex-shrink: 0;
  border: ${props => (props.distanceFromRoot > 0 ? "1px solid #333" : "none")};
  border-right: ${props =>
    props.distanceFromRoot > 0 ? "1px solid #333" : "8px solid #333"};
  padding: ${props => (props.distanceFromRoot > 0 ? "inherit" : "0 16px")};
`;

interface GuitarStringProps {
  rootNote: Note;
  notes: NormalizedNote[];
}

export const GuitarString: React.SFC<GuitarStringProps> = ({
  notes,
  rootNote
}) => {
  return (
    <Container>
      {shiftToBack(notes.findIndex(n => n.note === rootNote), notes).map(
        (n, i) => (
          <Fret key={n.note} distanceFromRoot={i}>
            {n.inKey && (
              <FretNote isRoot={n.distanceFromRoot === 0}>{n.label}</FretNote>
            )}
          </Fret>
        )
      )}
    </Container>
  );
};
