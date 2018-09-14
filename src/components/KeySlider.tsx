import * as React from "react";
import styled from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import {Note, chromaticScaleWithRootC, normalizeNotes} from "utils/notes";

const StyledSlider = styled(Slider)`
  margin: 30px 0;
`;

const normalizedChromaticC = normalizeNotes(chromaticScaleWithRootC);

type ChangeHandler = (note: string) => void;

const changeHandler = (onChange: ChangeHandler) => (i: number) => {
  const rootNote = Note[normalizedChromaticC[i].note];
  onChange(rootNote);
};

interface KeySliderProps {
  onChange: ChangeHandler;
  value: string;
}

export const KeySlider: React.SFC<KeySliderProps> = ({onChange, value}) => (
  <StyledSlider
    min={0}
    max={11}
    value={normalizedChromaticC.findIndex(n => Note[n.note] === value)}
    onChange={changeHandler(onChange)}
  />
);
