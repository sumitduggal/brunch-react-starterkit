import { css } from 'styled-components'
import values from 'styles/values';

export default css`
  body {
    background: ${values.lite_grey};
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    height: 100%;
  }
`;

