import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';
import CustomizedMenus from './menu';
import HelpMenus from './help';
import UserMenu from './usermenu';
import CustomButton from '../Atoms/CustomButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  avatar:{
    background:'#4caf50',
      width: 24,
      height: 24,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
//   container:{
//       display:"flex",
//     flexDirection:"row-reverse",
//   },
  
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
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
  inputRoot: {
    color: 'inherit',
  },
//   StyledButton:{
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 30,
//     padding: '0 5px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 500,
      },
    },
  },
}));



export default function SearchAppBar() {
  const theme1 = createMuiTheme({
    overrides: {
      MuiSelect: {
        select: {
          "&:focus": {
            background: "$labelcolor"
          }
        }
      }
    }
  });
  const classes = useStyles();
  let addIcon=<AddCircleIcon color="secondary"/>
  let helpIcon=<HelpOutlineOutlinedIcon/>
  let userIcon=<Avatar variant="rounded" className={classes.avatar} src="/home/user/Pictures/rahul.png"/>
  return (
    <MuiThemeProvider theme={theme1}>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Home
          </Typography>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              variant="rounded"
              squared="false"
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <CustomizedMenus/>
            </div>
          <div>
              <HelpMenus/>
          </div>
          <div>
          <CustomButton type="warning" name="upgrade"/>
          </div>
          <div>
              <UserMenu name={userIcon}/>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}

