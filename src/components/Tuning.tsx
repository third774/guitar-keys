import React from "react";
import styled from "styled-components";
import {Note} from "utils/notes";
import {RootNoteDropdown} from "./RootNoteDropdown";

type OnTuningChange = (tuning: Note[]) => void;
interface TuningProps {
  tuning: Note[];
  onChange: OnTuningChange;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const onTuningChangeHandler = (
  tuning: Note[],
  index: number,
  onChange: OnTuningChange
) => (newValue: string) => {
  const front = tuning.slice(0, index);
  const end = tuning.slice(index + 1);
  const newNote = Note[newValue];
  onChange([...front, newNote, ...end]);
};

export const Tuning: React.SFC<TuningProps> = ({tuning, onChange}) => (
  <Container>
    {tuning.map((n, i) => (
      <RootNoteDropdown
        key={i}
        value={Note[n]}
        onChange={onTuningChangeHandler(tuning, i, onChange)}
      />
    ))}
  </Container>
);
