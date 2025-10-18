import React, { useContext, useState, useEffect } from "react";
import "./index.css";
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { MyContext } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mailAnchor, setMailAnchor] = useState(null);
  const context = useContext(MyContext);
  const location = useLocation();

  useEffect(() => {
    // Only use location.pathname to decide showing/hiding header.
    // This will correctly restore header/sidebar when user navigates back.
    if (location.pathname === "/login" || location.pathname === "/sign-up") {
      context.setSidebarHeader("change"); // hide header on these routes
    } else {
      context.setSidebarHeader(""); // show header on other routes
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]); // do NOT depend on context here

  const open = Boolean(anchorEl);
  const mailOpen = Boolean(mailAnchor);

  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleProfileClose = () => setAnchorEl(null);

  const handleMailClick = (event) => setMailAnchor(event.currentTarget);
  const handleMailClose = () => setMailAnchor(null);

  return (
    <div
      className={`container-fluid head ${
        context.isSidebarHeader === "change" ? "changes" : ""
      }`}
    >
      <div className="row d-flex align-items-center py-3" style={{ backgroundColor: "white" }}>
        <div className="col-sm-2">
          <div className="logo-sec d-flex align-items-center">
            <img
              style={{ width: "50px", height: "50px" }}
              src="data:image/png;base64,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" // keep your logo data
              alt="Logo"
            />
            <h3 style={{ marginLeft: "20px" }}>Dashboard</h3>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="d-flex align-items-center">
            <IconButton
              onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}
              aria-label="MenuOpenIcon"
              size="large"
              style={{ backgroundColor: "rgba(203, 234, 246, 1)" }}
            >
              {context.isToggleSidebar ? <MenuIcon /> : <MenuOpenIcon />}
            </IconButton>

            <div
              className="search ms-3 py-2"
              style={{
                backgroundColor: "rgba(203, 234, 246, 1)",
                borderRadius: "5px",
                width: "100%",
              }}
            >
              <input
                className="px-3"
                type="text"
                placeholder="Search"
                style={{
                  backgroundColor: "rgba(203, 234, 246, 1)",
                  border: "none",
                  outline: "none",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-sm-7 d-flex justify-content-end align-items-center">
          <IconButton size="large" style={{ backgroundColor: "rgba(203, 234, 246, 1)" }}>
            <LightModeIcon />
          </IconButton>

          <IconButton size="large" style={{ backgroundColor: "rgba(203, 234, 246, 1)", marginLeft: 10 }}>
            <AddShoppingCartIcon />
          </IconButton>

          <IconButton
            size="large"
            onClick={handleMailClick}
            style={{ backgroundColor: "rgba(203, 234, 246, 1)", marginLeft: 10 }}
          >
            <MailOutlineIcon />
          </IconButton>

          <Menu
            anchorEl={mailAnchor}
            id="mail-menu"
            open={mailOpen}
            onClose={handleMailClose}
            onClick={handleMailClose}
            slotProps={{
              paper: {
                elevation: 3,
                sx: { width: 360, maxHeight: 400 },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
              {[1, 2, 3].map((i) => (
                <ListItem alignItems="flex-start" key={i}>
                  <ListItemAvatar>
                    <Avatar src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                  </ListItemAvatar>
                  <ListItemText
                    primary="New message"
                    secondary={
                      <>
                        <Typography component="span" variant="body2" sx={{ color: "text.primary", display: "inline" }}>
                          User {i}
                        </Typography>
                        {" — Check your inbox for updates…"}
                        <span className="d-block">
                          <Link to="/">few seconds ago</Link>
                        </span>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Menu>

          <IconButton size="large" style={{ backgroundColor: "rgba(203, 234, 246, 1)", marginLeft: 10 }}>
            <NotificationsNoneIcon />
          </IconButton>

          {!context.isLoggedIn ? (
            <Link to="/login">
              <Button
                className="ms-2"
                variant="contained"
                color="primary"
                onClick={() => context.setSidebarHeader("change")}
              >
                Sign-in
              </Button>
            </Link>
          ) : (
            <div className="pic-sec d-flex align-items-center ms-3">
              <Tooltip title="Account settings">
                <IconButton onClick={handleProfileClick} size="small">
                  <Avatar
                    alt="Cindy Baker"
                    sx={{ width: 56, height: 56 }}
                    src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                    style={{ borderColor: "blue", border: "3px solid skyblue" }}
                  />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleProfileClose}
                onClick={handleProfileClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleProfileClose}>
                  <Avatar /> My account
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <SecurityIcon fontSize="small" />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
