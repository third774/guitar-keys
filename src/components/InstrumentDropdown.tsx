import React from "react";
import {InstrumentType, instruments} from "utils/Instrument";
import {Label} from "./Label";
import styled from "styled-components";

const Container = styled.div`
  width: 92px;
`;

interface InstrumentDropdownProps {
  onChange: (instrumentType: InstrumentType) => void;
}

export const InstrumentDropdown: React.SFC<InstrumentDropdownProps> = ({
  onChange
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(parseInt(e.target.value, 10));
  return (
    <Container>
      <Label>
        Instrument:
        <select onChange={handleChange}>
          {instruments.map((i, idx) => (
            <option key={idx} value={i.type}>
              {i.label}
            </option>
          ))}
        </select>
      </Label>
    </Container>
  );
};
