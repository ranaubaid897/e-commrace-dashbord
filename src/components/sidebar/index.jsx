import React, { useState, useContext } from "react";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "./index.css";
import { MyContext } from "../../App";

const Sidebar = () => {
  const context = useContext(MyContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // perform logout logic
    context.setIsLoggedIn(false);
    context.setSidebarHeader("change"); // hide header/sidebar
    navigate("/"); // navigate to login
  };

  const menuItems = [
    { label: "Dashboard", icon: <DashboardIcon />, link: "/" },
    {
      label: "Products",
      icon: <CategoryIcon />,
      link: "#",
      subItems: [
        { label: "Product List", link: "/products" },
        { label: "Product View", link: "/product-view" },
        { label: "Product Upload", link: "/product-upload" },
      ],
    },
    { label: "Orders", icon: <AddShoppingCartIcon />, link: "/" },
    { label: "Messages", icon: <MailOutlineIcon />, link: "/" },
    { label: "Notification", icon: <NotificationsActiveIcon />, link: "/" },
    { label: "Settings", icon: <SettingsSuggestOutlinedIcon />, link: "/" },
    { label: "Login", icon: <PersonOutlineOutlinedIcon />, link: "/login" },
    {
      label: "Logout",
      icon: <PersonOutlineOutlinedIcon />,
      link: "/sign-up", // Link if clicked, but we'll handle via onClick
      onClick: handleLogout,
    },
  ];

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {menuItems.map((item, index) => {
            const isActive = index === activeIndex;
            const color = isActive ? "green" : "inherit";

            return (
              <li key={index} className="nav-item">
                <Button
                  className="py-3 sidebar-btn"
                  component={Link}
                  to={item.link}
                  onClick={() => {
                    setActiveIndex(isActive ? null : index);
                    if (item.onClick) item.onClick();
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textTransform: "none",
                    color,
                    fontSize: "18px",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", color, transition: "color 0.3s ease" }}>
                    {React.cloneElement(item.icon, { style: { color, transition: "color 0.3s ease" } })}
                    <span>{item.label}</span>
                  </span>

                  {item.subItems ? (
                    isActive ? (
                      <KeyboardArrowDownOutlinedIcon style={{ color, transition: "transform 0.3s ease, color 0.3s ease" }} />
                    ) : (
                      <KeyboardArrowRightIcon style={{ transition: "transform 0.3s ease, color 0.3s ease" }} />
                    )
                  ) : (
                    <KeyboardArrowRightIcon style={{ opacity: 0.4 }} />
                  )}
                </Button>

                {item.subItems && (
                  <ul
                    className="submenu"
                    style={{
                      maxHeight: isActive ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease",
                      paddingLeft: "40px",
                      marginTop: isActive ? "5px" : "0",
                    }}
                  >
                    {item.subItems.map((sub, subIndex) => (
                      <li key={subIndex} style={{ listStyle: "none" }}>
                        <Button
                          component={Link}
                          to={sub.link}
                          style={{
                            textTransform: "none",
                            color: "#555",
                            fontSize: "16px",
                            justifyContent: "flex-start",
                            width: "100%",
                            padding: "6px 0",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => (e.target.style.color = "green")}
                          onMouseLeave={(e) => (e.target.style.color = "#555")}
                        >
                          {sub.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
