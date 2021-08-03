import { css } from '@emotion/react';

const reset = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  li {
    list-style: none;
  }
  button {
    border: none;
    background: none;
  }
  em {
    font-style: normal;
  }
  input: focus {
    outline: none;
  }
`;

export default reset;
