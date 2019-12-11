import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
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

export default function HelpMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let helpIcon=<HelpOutlineOutlinedIcon/>
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
        {helpIcon}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="quick start" />
        </StyledMenuItem>  
        
        <StyledMenuItem>
          <ListItemText primary="Help with features" />
        </StyledMenuItem>  
        
        <StyledMenuItem>
          <ListItemText primary="ways to use" />
        </StyledMenuItem>  
        
        <StyledMenuItem>
          <ListItemText primary="privacy policy" />
        </StyledMenuItem>  
        
        <StyledMenuItem>
          <ListItemText primary="contact support" />
        </StyledMenuItem>  
        
        <StyledMenuItem>
          <ListItemText primary="watch tutorials" />
        </StyledMenuItem>  
        
        <StyledMenuItem>
          <ListItemText primary="feedback" />
        </StyledMenuItem>  
        
      </StyledMenu>
    </div>
  );
}