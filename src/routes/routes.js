import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from 'constants/routesPath';
import * as Pages from 'pages';
import Layout from 'components/Layout/Layout.js';
import ParentRoute from './ParentRoute';
import TeacherRoute from './TeacherRoute.js';
import AdminRoute from './AdminRoute.js';
import RouteIf from './RouteIf';
import { useSelector } from 'react-redux';
import { selectCurrentUserRole } from 'services/redux/slices/user';
import ROLE from 'constants/role.js';

export default function AppRouter() {
  const myRole = useSelector(selectCurrentUserRole);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Pages.Home} />
          <Route path={ROUTES.ADMIN} component={AdminRoute} />
          <Route path={ROUTES.TEACHER} component={TeacherRoute} />
          <Route path={ROUTES.PARENT} component={ParentRoute} />
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
