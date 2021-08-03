import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from 'constants/routesPath';
import * as Pages from 'pages';
import Layout from 'components/Layout/Layout.js';

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Pages.Home} />
          <Route path={ROUTES.ADMIN} component={Pages.Admin} />
          <Route path={ROUTES.TEACHER} component={Pages.Teacher} />
          <Route path={ROUTES.PARENTS} component={Pages.Parents} />
          <Route path={ROUTES.SIGNIN} component={Pages.Signin} />
          <Route path={ROUTES.SIGNUP} component={Pages.Signup} />
          <Route component={Pages.RouteNoMatch} />
        </Switch>
      </Layout>
    </Router>
  );
}
