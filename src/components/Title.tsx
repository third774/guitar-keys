import styled from "styled-components";

import {Mobile} from "utils/MediaQuery";

export const Title = styled.h1`
  font-size: 4rem;
  margin: 3rem 0;
  text-align: center;
  font-weight: 300;

  ${Mobile.landscapeLowRes(`
    font-size: 3rem;
  `)} ${Mobile.portrait(`
    font-size: 2rem;
  `)};
`;
