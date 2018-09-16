import * as React from "react";
import styled from "styled-components";

import {Flex} from "components/Flex";

const Dot = styled.span`
  font-size: 3rem;
`;

const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  justify-content: auto;
`;

const markerPositions = [3, 5, 7, 9];

export const FretMarkers = () => (
  <Flex>
    {Array.from(Array(12).keys()).map(i => (
      <Container key={i}>
        {markerPositions.includes(i) && <Dot>•</Dot>}
      </Container>
    ))}
  </Flex>
);
