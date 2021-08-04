import ROLE from 'constants/role.js';
import Teacher from 'pages/Teacher.jsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import RouteIf from './RouteIf';
import ROUTES from 'constants/routesPath';
import { selectCurrentUserRole } from 'services/redux/slices/user';

export default function TeacherRoute() {
  const myRole = useSelector(selectCurrentUserRole);
  console.log(myRole);
  return (
    <Switch>
      <RouteIf
        exact
        admin
        role={ROLE.TEACHER}
        myRole={myRole}
        component={Teacher}
        path={`${ROUTES.TEACHER}`}
      />
      <RouteIf
        admin
        role={ROLE.TEACHER}
        myRole={myRole}
        component={Teacher}
        path={`${ROUTES.TEACHER}/student_management`}
      />
      <RouteIf
        admin
        role={ROLE.TEACHER}
        myRole={myRole}
        component={Teacher}
        path={`${ROUTES.TEACHER}/class_management`}
      />
      <RouteIf
        admin
        role={ROLE.TEACHER}
        myRole={myRole}
        component={Teacher}
        path={`${ROUTES.TEACHER}/search`}
      />
    </Switch>
  );
}
