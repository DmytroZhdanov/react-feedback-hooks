import styled from 'styled-components';

export const OptionsList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;

export const OptionBtn = styled.button`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.5);
  }
`;
