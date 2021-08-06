import React from 'react';
import { Switch } from 'react-router-dom';
import RouteIf from './RouteIf';
import ROLE from 'constants/role';
import Admin from 'pages/Admin/Admin';
import { useSelector } from 'react-redux';
import { selectCurrentUserRole } from 'services/redux/slices/user';
import ROUTES from 'constants/routesPath';

export default function AdminRoute() {
  const myRole = useSelector(selectCurrentUserRole);
  return (
    <Switch>
      <RouteIf
        exact
        role={ROLE.ADMIN}
        myRole={myRole}
        component={Admin}
        path={`${ROUTES.ADMIN}`}
      />
    </Switch>
  );
}
