import React, {ChangeEvent} from "react";
import {Scale, scales} from "utils/scales";
import {Label} from "./Label";

type ChangeHandler = (newValue: string) => void;

interface ModeDropdownProps {
  value: string;
  onChange: ChangeHandler;
}

const onChangeHandler = (onChange: ChangeHandler) => (
  e: ChangeEvent<HTMLSelectElement>
) => onChange(e.target.value);

export const ModeDropdown: React.SFC<ModeDropdownProps> = ({
  value,
  onChange
}) => (
  <Label>
    Mode:
    <select value={value} onChange={onChangeHandler(onChange)}>
      {Object.keys(scales).map(key => {
        const scale: Scale = scales[key];
        return (
          <option key={scale.label} value={key}>
            {scale.label}
          </option>
        );
      })}
    </select>
  </Label>
);
