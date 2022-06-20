import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
// import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../assets/logo.png";
import { logoutUser, selectUserData } from "../../features/user/userSlice";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const { position } = props;
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logout() {
    dispatch(logoutUser());
    handleCloseUserMenu();
  }

  return (
    <AppBar
      position={position ? position : "static"}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: "initial" }}>
          <Box
            component="img"
            sx={{ height: 45 }}
            alt="T-blog logo"
            src={Logo}
          />
        </Box>
        {userData && (
          <Box>
            <Tooltip title="Open settings">
              <Button
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: "#ffffff", textTransform: "inherit" }}
              >
                <Avatar
                  alt={userData.first_name}
                  src="/static/images/avatar/2.jpg"
                  sx={{ mr: 1 }}
                ></Avatar>
                {userData.first_name}
                <ArrowDropDownIcon />
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem divider onClick={handleCloseUserMenu}>
                <Link href="/profile" color="inherit" underline="none">
                  Profile
                </Link>
              </MenuItem>
              {/* <MenuItem divider onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem> */}
              <MenuItem onClick={() => logout()}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={88} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={8} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
