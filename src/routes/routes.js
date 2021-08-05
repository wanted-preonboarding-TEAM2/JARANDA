import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from 'constants/routesPath';
import * as Pages from 'pages';
import Layout from 'components/Layout/Layout.js';
import ParentRoute from './ParentRoute';
import TeacherRoute from './TeacherRoute.js';
import AdminRoute from './AdminRoute.js';
import RouteIf from './RouteIf';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginSuccess,
  selectCurrentUserRole,
} from 'services/redux/slices/user';
import ROLE from 'constants/role.js';
import { useEffect } from 'react';
import { getLoginValidation } from 'services/LocalStorageWorker';

export default function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = getLoginValidation();
    if (loggedInUser) {
      dispatch(loginSuccess(loggedInUser));
    }
  }, [dispatch]);
  const myRole = useSelector(selectCurrentUserRole);

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Pages.Home} />
          <Route path={ROUTES.ADMIN} component={AdminRoute} />
          <Route path={ROUTES.TEACHER} component={TeacherRoute} />
          <Route path={ROUTES.PARENT} component={ParentRoute} />
          <Route path={ROUTES.HELP} component={Pages.Help} />
          <Route path={ROUTES.APPLY_TEACHER} component={Pages.ApplyTeacher} />
          <RouteIf
            myRole={myRole}
            role={ROLE.NO_LOGIN}
            path={ROUTES.SIGNIN}
            component={Pages.Signin}
            redirect={ROUTES.HOME}
          />
          <RouteIf
            myRole={myRole}
            role={ROLE.NO_LOGIN}
            path={ROUTES.SIGNUP}
            component={Pages.Signup}
            redirect={ROUTES.HOME}
          />
          <Route component={Pages.RouteNoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
}
