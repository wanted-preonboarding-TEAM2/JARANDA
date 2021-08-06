import ROLE from 'constants/role.js';
import Forbidden from 'pages/Forbidden/Forbidden.jsx';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function RouteIf({
  component: Component,
  myRole,
  role,
  admin,
  redirect,
  ...rest
}) {
  console.log(redirect);
  return (
    <Route
      {...rest}
      render={() => {
        if (myRole === role || (admin && myRole === ROLE.ADMIN)) {
          return <Component />;
        }
        return redirect ? <Redirect to={redirect} /> : <Forbidden />;
      }}
    ></Route>
  );
}
