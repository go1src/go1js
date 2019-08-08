import { App } from '@go1js/schema';
import React from 'react';
import { Link } from 'react-router-dom';

class AppNav extends React.Component<App.Nav> {
  private nav: App.NavItem[];
  constructor(props: App.Nav) {
    super(props);
    this.nav = props.items;
  }

  public render() {
    return (
      <ul>
        {
          this.nav.map( (link) => {
            return <li key={link.text}><Link to={link.pathname} >{link.text}</Link></li>;
          })
        }
      </ul>
    );
  }
}

export default AppNav;
