import { Global } from '@emotion/react';
import { useEffect } from 'react';
import AppRouter from 'routes/routes';
import reset from 'styles/reset.js';
import { localStorageHelper } from 'utils/localStorageHelper';
import usersData from 'pages/Admin/users.json';

function App() {
  useEffect(() => {
    const users = localStorageHelper.getItem('userInfo');
    !users?.length && localStorageHelper.setItem('userInfo', usersData);
  }, []);

  return (
    <>
      <Global styles={reset} />
      <AppRouter />
    </>
  );
}

export default App;
