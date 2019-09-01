import { App } from '@go1js/schema';
import { AppBar, Button, createStyles, LinearProgress, Tab, Tabs, Theme, Toolbar, withStyles } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { loadComponent } from '../config/loadComponent';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  tabNav: {
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      'display': 'flex',
      'justifyContent': 'center',
      'backgroundColor': 'transparent',
      '& > div': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#66ccff',
      },
    },
  },
  tabItem: {
    'textTransform': 'none',
    'minWidth': 72,
    'marginRight': theme.spacing(2),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#ffff00',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'inherit',
    textTransform: 'none',
  },
});

class AppNav extends React.Component<App.Nav> {
  public state = {
    value: location.pathname,
  };
  private nav: App.NavItem[];
  private component = loadComponent('@go1js/discovery', 'SearchInput');

  constructor(props: App.Nav) {
    super(props);
    this.nav = props.items;
  }

  public handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({value: newValue});
    console.log(newValue);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position='static' color='default' className={classes.appBar}>
          <Suspense fallback='Loading...'>
          {
            this.nav.map( (link) => {
              if ( link.component ) {
                return React.createElement(this.component);
              }
            })
          }
          </Suspense>
          <Tabs value={this.state.value} indicatorColor='primary' onChange={this.handleChange} className={classes.tabNav} aria-label='Application Navigation Bar'>
            {
              this.nav.map( (link) => {
                if ( !link.component ) {
                  return <Tab label={link.text} component={RouterLink} to={link.pathname} className={classes.tabItem} key={link.text} value={link.pathname}/>;
                }
              })
            }
          </Tabs>
          {/* <Toolbar>
            <Suspense fallback='Loading...'>
              {
                this.nav.map( (link) => {
                  if ( link.component ) {
                    const component = loadComponent(link.library, link.component);
                    return React.createElement(component);
                  } else {
                      return <Link variant='button' className={classes.menuButton} to={link.pathname} component={RouterLink}>{link.text}</Link>;
                  }
                })
              }
            </Suspense>
          </Toolbar> */}
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppNav);
