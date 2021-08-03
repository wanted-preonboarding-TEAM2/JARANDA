import { Global } from '@emotion/react';
import AppRouter from 'routes/routes';
import reset from 'styles/reset.js';

function App() {
  return (
    <>
      <Global styles={reset} />
      <AppRouter />
    </>
  );
}

export default App;
