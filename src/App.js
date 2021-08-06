import { Global } from '@emotion/react';
import { useEffect } from 'react';
import AppRouter from 'routes/routes';
import reset from 'styles/reset.js';
import { localStorageHelper } from 'utils/localStorageHelper';
import usersData from 'pages/Admin/users.json';
import LS_KEY from 'constants/localStorageKey.js';

function App() {
  useEffect(() => {
    const users = localStorageHelper.getItem(LS_KEY.USER_INFO);
    !users?.length && localStorageHelper.setItem(LS_KEY.USER_INFO, usersData);
  }, []);

  return (
    <>
      <Global styles={reset} />
      <AppRouter />
    </>
  );
}

export default App;
