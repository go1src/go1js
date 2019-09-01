import { createStyles, InputBase, Theme, WithStyles, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const styles = (theme: Theme) => createStyles({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '120',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '120',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
        placeholder: 'Search topics, courses and resources…',
      },
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export interface SearchProps extends WithStyles<typeof styles> {}

class SearchInput extends React.Component<SearchProps> {
  public static propTypes = {};

  constructor(props) {
    super(props);
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
      </div>
    );
  }
}

export default withStyles(styles)(SearchInput);
