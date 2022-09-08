import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
} from 'styled-system';

export const StyledTitle = styled.h1`
  text-align: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position
);

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;