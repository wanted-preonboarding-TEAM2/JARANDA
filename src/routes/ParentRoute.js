import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from 'constants/routesPath';
import RouteIf from './RouteIf';
import ROLE from 'constants/role.js';
import Parents from 'pages/Parents/Parents.jsx';
import { useSelector } from 'react-redux';
import { selectCurrentUserRole } from 'services/redux/slices/user';

export default function ParentRoute() {
  const myRole = useSelector(selectCurrentUserRole);

  return (
    <Switch>
      <RouteIf
        admin
        exact
        role={ROLE.PARENT}
        myRole={myRole}
        component={Parents}
        path={`${ROUTES.PARENT}`}
      />
      <Route path={`${ROUTES.PARENT}/search`} component={Parents} />
      <RouteIf
        admin
        role={ROLE.PARENT}
        myRole={myRole}
        component={Parents}
        path={`${ROUTES.PARENT}/request_recommendation`}
      />
      <RouteIf
        admin
        role={ROLE.PARENT}
        myRole={myRole}
        component={Parents}
        path={`${ROUTES.PARENT}/recommendation`}
      />
      <RouteIf
        admin
        role={ROLE.PARENT}
        myRole={myRole}
        component={Parents}
        path={`${ROUTES.PARENT}/visit`}
      />
      <RouteIf
        admin
        role={ROLE.PARENT}
        myRole={myRole}
        component={Parents}
        path={'/story'}
      />
    </Switch>
  );
}
