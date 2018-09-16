import styled from "styled-components";

interface FlexProps {
  direction?: "row" | "column";
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  direction: ${p => p.direction || "row"};
`;
