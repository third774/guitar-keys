import React, {ChangeEvent} from "react";
import {chromaticScaleWithRootC, Note} from "utils/notes";

type ChangeHandler = (newValue: string) => void;

const changeHandler = (handler: ChangeHandler) => (
  e: ChangeEvent<HTMLSelectElement>
) => handler(e.target.value);

interface RootNoteDropdownProps {
  onChange: ChangeHandler;
  value: any;
}

export const RootNoteDropdown: React.SFC<RootNoteDropdownProps> = ({
  onChange,
  value
}) => (
  <div>
    <select value={value} onChange={changeHandler(onChange)}>
      {chromaticScaleWithRootC.map(n => {
        const note = n.type === "natural" ? n.note : n.sharpNote;
        return (
          <option key={note} value={Note[note]}>
            {n.type === "natural" ? n.label : n.sharpLabel}
          </option>
        );
      })}
    </select>
  </div>
);
