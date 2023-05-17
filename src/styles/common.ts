import styled, {css} from "styled-components";

export const FlexBox = (direction?: string, justify?: string, align?: string) => css`
  display: flex;
  flex-direction: ${direction || "row"};
  justify-content: ${justify || "initial"};
  align-items: ${align || "initial"};
`;

export const FlexDiv = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}>`
  ${props => FlexBox(props.direction, props.justify, props.align)}
  gap: ${props => props.gap || 0};
`;
