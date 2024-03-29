import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #e08800;
  color: white;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: #e08800;
    border: 1px solid #e08800;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #e08800;
    color: white;
    border: 1px solid transparent;
  }
`;

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
