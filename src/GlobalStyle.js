import { css } from '@emotion/react';

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul,
  li {
    list-style: none;
  }
`;
export default reset;
