import styled from 'styled-components';

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 95%;
  bottom: ${(props) => props.bottom || '60px'};
  height: ${(props) => props.height || '20px'};
  font-size: ${(props) => props.fontSize || '3rem'};
  z-index: 1;
  cursor: pointer;
  color: ${(props) => props.color || 'red'};
  /* Add more props here */
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border: ${(props) => props.border || 'none'};
`;