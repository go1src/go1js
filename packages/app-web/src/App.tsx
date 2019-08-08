import { App as AppType } from '@go1js/schema';
import React, { Component, lazy, Suspense } from 'react';
import AppNav from './components/AppNav';

import {
  BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom';

export default class App extends Component {
  private app: AppType.App;
  private components = [];
  private modules = [];
  constructor(props) {
    super(props);
    this.app = require('./appConfig.json');
  }

  public render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            { this.app.nav && <AppNav {...this.app.nav}/> }
            <Suspense fallback='Loading...'>
              {Object.keys(this.app.features).map( (key) => {
                const { pathname } = this.app.features[key];
                return <Route exact path={pathname} component={this.loadComponent(this.app.features[key])}/>;
              })}
            </Suspense>
        </React.Fragment>
      </BrowserRouter>
    );
  }

  private loadComponent(feature: AppType.AppFeature): React.LazyExoticComponent<any> {
    const {library, component } = feature;
    if ( library ) {
      switch ( library ) {
        case '@go1js/learning':
            return lazy(() => import('@go1js/learning').then((module) => ({default: module[component]}) ));
        case '@go1js/discovery':
          return lazy(() => import('@go1js/discovery').then((module) => ({default: module[component]}) ));
      }
    } else {
      return lazy(() => import(`${component}`));
    }
  }
}
