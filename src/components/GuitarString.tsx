import React from "react";
import styled from "styled-components";
import {NormalizedNote, Note} from "utils/notes";
import {shiftToBack} from "utils/shiftToBack";

const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

const Fret = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  border: 1px solid black;
`;

interface NoteProps {
  inKey: boolean;
}

const FretNote = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: NoteProps) => (props.inKey ? "black" : "white")};
  color: ${(props: NoteProps) => (props.inKey ? "white" : "black")};
  border-radius: 50%;
  padding: 6px;
  margin: 16px;
  height: 32px;
  width: 32px;
`;

interface GuitarStringProps {
  rootNote: Note;
  notes: NormalizedNote[];
}

export const GuitarString: React.SFC<GuitarStringProps> = ({
  notes,
  rootNote
}) => (
  <Container>
    {shiftToBack(notes.findIndex(n => n.note === rootNote), notes).map(n => (
      <Fret key={n.note}>
        {n.inKey && <FretNote inKey={n.inKey}>{n.label}</FretNote>}
      </Fret>
    ))}
  </Container>
);
