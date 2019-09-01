import { lazy } from 'react';

export function loadComponent(library: string, component: string): React.LazyExoticComponent<any> {
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
