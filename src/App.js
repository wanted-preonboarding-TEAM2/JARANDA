import AppRouter from 'routes/routes';
import { Global } from '@emotion/react';
import reset from 'GlobalStyle';

function App() {
  return (
    <>
      <Global styles={reset} />
      <AppRouter />
    </>
  );
}

export default App;
