/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <OuterBar
      role="progressbar"
      size={size}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <InnerBar value={value} />
    </OuterBar>
  );
};

const OuterBar = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  ${({ size }) => SIZES[size]};
`;

const InnerBar = styled.div`
  width: ${(props) => props.value}%;
  background: ${COLORS.primary};
  height: 100%;
  border-radius: 4px
    ${(props) => (props.value > 99 ? (props.value / 100) * 4 : 0)}px
    ${(props) => (props.value > 99 ? (props.value / 100) * 4 : 0)}px 4px;
`;

const SIZES = {
  small: css`
    height: 8px;
    border-radius: 4px;
  `,
  medium: css`
    height: 12px;
    border-radius: 4px;
  `,
  large: css`
    height: 24px;
    padding: 4px;
    border-radius: 4px;
  `,
};

export default ProgressBar;
