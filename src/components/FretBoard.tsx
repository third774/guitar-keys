import React from "react";
import {Note, NormalizedNote} from "utils/notes";
import {GuitarString} from "components/GuitarString";

interface FretBoardProps {
  tuning: Note[];
  scale: NormalizedNote[];
}

export const FretBoard: React.SFC<FretBoardProps> = ({tuning, scale}) => (
  <div>
    {tuning.map((openNote, i) => (
      <GuitarString key={i} notes={scale} rootNote={openNote} />
    ))}
  </div>
);
