import { ReportView } from '@go1js/analytics';
import { App as AppType } from '@go1js/schema';
import { createStyles, CssBaseline, LinearProgress, Theme, withStyles } from '@material-ui/core';
import React, { Component, Suspense } from 'react';
import AppNav from './components/AppNav';

import {
  BrowserRouter, Route,
} from 'react-router-dom';
import { loadComponent } from './config/loadComponent';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
});

interface AppProps {
  classes?: any;
}

class App extends Component<AppProps> {
  private app: AppType.App;
  constructor(props) {
    super(props);
    this.app = require('./appConfig.json');
  }

  public render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline/>
          <div className={classes.root} >
            { this.app.nav && <AppNav {...this.app.nav}/> }
            <Suspense fallback={'Loading...'}>
              {Object.keys(this.app.features).map( (key) => {
                const { pathname, library, component } = this.app.features[key];
                return <Route key={pathname} exact path={pathname} component={loadComponent(library, component)}/>;
              })}
              <Route key='/report' exact path={'/report'} component={ReportView}/>
            </Suspense>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
