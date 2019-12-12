import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import Avatar from '@material-ui/core/Avatar';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
  green:{
    background:'#4caf50'
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function UserMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let userIcon=<Avatar variant="rounded" >rp</Avatar>
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {props.name}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <CheckIcon fontSize="small"/>
          </ListItemIcon>
          <ListItemText primary="zemosolabs" />
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Organisation Settings" />
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="more" />
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="my profile" />
        </StyledMenuItem>
        <StyledMenuItem>
        <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}