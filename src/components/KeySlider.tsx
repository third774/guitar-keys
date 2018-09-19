import * as React from "react";
import styled from "styled-components";
import Slider, {Handle} from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-slider/assets/index.css";

import {Note, chromaticScaleWithRootC, normalizeNotes} from "utils/notes";

import "./KeySlider.css";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  flex: none;
  margin: 0 20px;
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

const handle = (props: any) => {
  const {value, dragging, index, ...restProps} = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={normalizedChromaticC[value].label}
      visible={true}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export const KeySlider: React.SFC<KeySliderProps> = ({onChange, value}) => (
  <Container>
    <Label>Root:</Label>
    <Slider
      min={0}
      max={11}
      value={normalizedChromaticC.findIndex(n => Note[n.note] === value)}
      onChange={changeHandler(onChange)}
      handle={handle}
    />
  </Container>
);
