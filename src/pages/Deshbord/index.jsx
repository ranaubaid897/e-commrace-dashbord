import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./index.css";

const Deshbord = () => {
  const [menu1, setMenu1] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const [menu3, setMenu3] = useState(null);
  const [menu4, setMenu4] = useState(null);
  const [menu5, setMenu5] = useState(null);

  const [showBy, setShowBy] = React.useState("");
  const [categoryBy, setCategoryBy] = React.useState("");

  const handleShowByChange = (event) => {
    setShowBy(event.target.value);
  };

  const handleCategoryByChange = (event) => {
    setCategoryBy(event.target.value);
  };

  const options = ["Option 1", "Option 2", "Option 3"];
  const ITEM_HEIGHT = 48;

  const handleOpen = (setter) => (event) => setter(event.currentTarget);
  const handleClose = (setter) => () => setter(null);

  const data = [
    { name: "2013", value: 25.9, color: "#3b82f6" },
    { name: "2014", value: 30.3, color: "#f87171" },
    { name: "2015", value: 17.1, color: "#facc15" },
    { name: "2016", value: 26.7, color: "#22c55e" },
  ];

  return (
    <div className="boxz pt-3">
      <div className="row">
        <div className="col-md-8">
          {/* ----------- Row 1 ----------- */}
          <div className="row gx-4 gy-4 pb-3">
            {/* Card 1 */}
            <div className="col-md-6 col-sm-12">
              <div
                style={{
                  background: "linear-gradient(135deg, #00c853, #00bfa5)",
                  borderRadius: "16px",
                  color: "white",
                  height: "200px",
                  width: "100%",
                  padding: "20px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6 style={{ margin: 0 }}>Total Users</h6>
                  <IconButton
                    onClick={handleOpen(setMenu1)}
                    sx={{ color: "white" }}
                  >
                    <MoreVertIcon style={{ opacity: 0.7 }} />
                  </IconButton>
                  <Menu
                    anchorEl={menu1}
                    open={Boolean(menu1)}
                    onClose={handleClose(setMenu1)}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} onClick={handleClose(setMenu1)}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                <h2 style={{ fontSize: "48px", marginTop: "10px" }}>277</h2>
                <div style={{ opacity: 0.8 }}>Last Month</div>
                <PersonOutlineOutlinedIcon
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "25px",
                    fontSize: "60px",
                    opacity: 0.15,
                  }}
                />
                <ArrowUpwardIcon
                  style={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                    fontSize: "50px",
                    opacity: 0.1,
                  }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-sm-12">
              <div
                style={{
                  background: "linear-gradient(135deg, #2962ff, #448aff)",
                  borderRadius: "16px",
                  color: "white",
                  height: "200px",
                  width: "100%",
                  padding: "20px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6 style={{ margin: 0 }}>Active Users</h6>
                  <IconButton
                    onClick={handleOpen(setMenu2)}
                    sx={{ color: "white" }}
                  >
                    <MoreVertIcon style={{ opacity: 0.7 }} />
                  </IconButton>
                  <Menu
                    anchorEl={menu2}
                    open={Boolean(menu2)}
                    onClose={handleClose(setMenu2)}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} onClick={handleClose(setMenu2)}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                <h2 style={{ fontSize: "48px", marginTop: "10px" }}>150</h2>
                <div style={{ opacity: 0.8 }}>This Week</div>
                <PersonOutlineOutlinedIcon
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "25px",
                    fontSize: "60px",
                    opacity: 0.15,
                  }}
                />
              </div>
            </div>
          </div>

          {/* ----------- Row 2 ----------- */}
          <div className="row gx-4 gy-4 pb-3">
            {/* Card 3 */}
            <div className="col-md-6 col-sm-12">
              <div
                style={{
                  background: "linear-gradient(135deg, #00c853, #00bfa5)",
                  borderRadius: "16px",
                  color: "white",
                  height: "200px",
                  width: "100%",
                  padding: "20px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6 style={{ margin: 0 }}>Total Users</h6>
                  <IconButton
                    onClick={handleOpen(setMenu3)}
                    sx={{ color: "white" }}
                  >
                    <MoreVertIcon style={{ opacity: 0.7 }} />
                  </IconButton>
                  <Menu
                    anchorEl={menu3}
                    open={Boolean(menu3)}
                    onClose={handleClose(setMenu3)}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} onClick={handleClose(setMenu3)}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                <h2 style={{ fontSize: "48px", marginTop: "10px" }}>277</h2>
                <div style={{ opacity: 0.8 }}>Last Month</div>
                <PersonOutlineOutlinedIcon
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "25px",
                    fontSize: "60px",
                    opacity: 0.15,
                  }}
                />
                <ArrowUpwardIcon
                  style={{
                    position: "absolute",
                    left: "20px",
                    bottom: "20px",
                    fontSize: "50px",
                    opacity: 0.1,
                  }}
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-sm-12">
              <div
                style={{
                  background: "linear-gradient(135deg, #2962ff, #448aff)",
                  borderRadius: "16px",
                  color: "white",
                  height: "200px",
                  width: "100%",
                  padding: "20px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6 style={{ margin: 0 }}>Active Users</h6>
                  <IconButton
                    onClick={handleOpen(setMenu4)}
                    sx={{ color: "white" }}
                  >
                    <MoreVertIcon style={{ opacity: 0.7 }} />
                  </IconButton>
                  <Menu
                    anchorEl={menu4}
                    open={Boolean(menu4)}
                    onClose={handleClose(setMenu4)}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} onClick={handleClose(setMenu4)}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                <h2 style={{ fontSize: "48px", marginTop: "10px" }}>150</h2>
                <div style={{ opacity: 0.8 }}>This Week</div>
                <PersonOutlineOutlinedIcon
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "25px",
                    fontSize: "60px",
                    opacity: 0.15,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----------- Pie Chart Card ----------- */}
        <div className="col-md-4" style={{ padding: "15px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #1565c0, #1e88e5)",
              borderRadius: "16px",
              color: "white",
              padding: "20px",
              height: "400px",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6 style={{ margin: 0 }}>Total Sales</h6>
              <IconButton
                onClick={handleOpen(setMenu5)}
                sx={{ color: "white" }}
              >
                <MoreVertIcon style={{ opacity: 0.7 }} />
              </IconButton>
              <Menu
                anchorEl={menu5}
                open={Boolean(menu5)}
                onClose={handleClose(setMenu5)}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} onClick={handleClose(setMenu5)}>
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>

            <h2
              style={{
                fontSize: "36px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              $3,787,681.00
            </h2>
            <p style={{ opacity: 0.8, fontSize: "14px", marginBottom: "20px" }}>
              $3,578.90 in last month
            </p>

            <div style={{ width: "100%", height: "220px" }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ value }) => `${value}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    iconSize={10}
                    formatter={(value) => (
                      <span style={{ color: "white" }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div
          style={{
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <div>
            <h3>Best Selling Products</h3>
          </div>
          <div className="d-flex my-3">
            {/* Show By */}
            <div className="me-4">
              <span>Show By</span>
              <Box>
                <FormControl sx={{ minWidth: 200 }}>
                  <Select
                    value={showBy}
                    onChange={handleShowByChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select without label" }}
                    MenuProps={{
                      disablePortal: false,
                      PaperProps: {
                        sx: { mt: 0 },
                      },
                    }}
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "white",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      "& .MuiSelect-select": {
                        padding: "10px 14px",
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            {/* Category By */}
            <div>
              <span>Category By</span>
              <Box>
                <FormControl sx={{ minWidth: 200 }}>
                  <Select
                    value={categoryBy}
                    onChange={handleCategoryByChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select without label" }}
                    MenuProps={{
                      disablePortal: false,
                      PaperProps: {
                        sx: { mt: 0 },
                      },
                    }}
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "white",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                      "& .MuiSelect-select": {
                        padding: "10px 14px",
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
         <div
  className="table-div py-4"
  style={{
    width: "100%",
    overflowX: "auto",
  }}
>
            <table className="table table-striped">
              <thead className="table-primary">
                <tr className="text-center ">
                  <th scope="col">UID</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col">BRAND</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">STOCK</th>
                  <th scope="col">RATING</th>
                  <th scope="col">ORDER</th>
                  <th scope="col">SALES</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>#1</td>
                  <td>
                    <div className="d-flex">
                      <div className="me-2 image-wrapper">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="Product"
                          className="responsive-image"
                        />
                      </div>

                      <div className="product-text">
                        <h6 className="title">
                          Tops and skirt set for Female...
                        </h6>
                        <span className="description">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      $21.00{" "}
                    </span>{" "}
                    <br />
                    <span style={{ color: "Red" }}> $21.00 </span>
                  </td>
                  <td>
                    <Rating name="read-only" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5, // space between icons
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* View Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#f3d5ff",
                          color: "#8e24aa",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#e1bee7",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      {/* Edit Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#d7f7e4",
                          color: "#2e7d32",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#ffd6d6",
                          color: "#c62828",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#ef9a9a",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#1</td>
                  <td>
                    <div className="d-flex">
                      <div className="me-2 image-wrapper">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="Product"
                          className="responsive-image"
                        />
                      </div>

                      <div className="product-text">
                        <h6 className="title">
                          Tops and skirt set for Female...
                        </h6>
                        <span className="description">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      $21.00{" "}
                    </span>{" "}
                    <br />
                    <span style={{ color: "Red" }}> $21.00 </span>
                  </td>
                  <td>
                    <Rating name="read-only" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5, // space between icons
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* View Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#f3d5ff",
                          color: "#8e24aa",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#e1bee7",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      {/* Edit Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#d7f7e4",
                          color: "#2e7d32",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#ffd6d6",
                          color: "#c62828",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#ef9a9a",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </td>
                </tr>

                <tr className="align-middle">
                  <td>#1</td>
                  <td>
                    <div className="d-flex">
                      <div className="me-2 image-wrapper">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="Product"
                          className="responsive-image"
                        />
                      </div>

                      <div className="product-text">
                        <h6 className="title">
                          Tops and skirt set for Female...
                        </h6>
                        <span className="description">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      $21.00{" "}
                    </span>{" "}
                    <br />
                    <span style={{ color: "Red" }}> $21.00 </span>
                  </td>
                  <td>
                    <Rating name="read-only" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5, // space between icons
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* View Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#f3d5ff",
                          color: "#8e24aa",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#e1bee7",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      {/* Edit Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#d7f7e4",
                          color: "#2e7d32",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#ffd6d6",
                          color: "#c62828",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#ef9a9a",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#1</td>
                  <td>
                    <div className="d-flex">
                      <div className="me-2 image-wrapper">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="Product"
                          className="responsive-image"
                        />
                      </div>

                      <div className="product-text">
                        <h6 className="title">
                          Tops and skirt set for Female...
                        </h6>
                        <span className="description">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      $21.00{" "}
                    </span>{" "}
                    <br />
                    <span style={{ color: "Red" }}> $21.00 </span>
                  </td>
                  <td>
                    <Rating name="read-only" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5, // space between icons
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* View Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#f3d5ff",
                          color: "#8e24aa",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#e1bee7",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      {/* Edit Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#d7f7e4",
                          color: "#2e7d32",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#ffd6d6",
                          color: "#c62828",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#ef9a9a",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#1</td>
                  <td>
                    <div className="d-flex">
                      <div className="me-2 image-wrapper">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="Product"
                          className="responsive-image"
                        />
                      </div>

                      <div className="product-text">
                        <h6 className="title">
                          Tops and skirt set for Female...
                        </h6>
                        <span className="description">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      $21.00{" "}
                    </span>{" "}
                    <br />
                    <span style={{ color: "Red" }}> $21.00 </span>
                  </td>
                  <td>
                    <Rating name="read-only" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5, // space between icons
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* View Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#f3d5ff",
                          color: "#8e24aa",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#e1bee7",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      {/* Edit Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#d7f7e4",
                          color: "#2e7d32",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#ffd6d6",
                          color: "#c62828",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#ef9a9a",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
                <tr className="align-middle">
                  <td>#1</td>
                  <td>
                    <div className="d-flex">
                      <div className="me-2 image-wrapper">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="Product"
                          className="responsive-image"
                        />
                      </div>

                      <div className="product-text">
                        <h6 className="title">
                          Tops and skirt set for Female...
                        </h6>
                        <span className="description">
                          Women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    {" "}
                    <span style={{ textDecoration: "line-through" }}>
                      $21.00{" "}
                    </span>{" "}
                    <br />
                    <span style={{ color: "Red" }}> $21.00 </span>
                  </td>
                  <td>
                    <Rating name="read-only" value={4} readOnly />
                  </td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1.5, // space between icons
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* View Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#f3d5ff",
                          color: "#8e24aa",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#e1bee7",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>

                      {/* Edit Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#d7f7e4",
                          color: "#2e7d32",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#c8e6c9",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <EditIcon />
                      </IconButton>

                      {/* Delete Button */}
                      <IconButton
                        sx={{
                          backgroundColor: "#ffd6d6",
                          color: "#c62828",
                          borderRadius: "12px",
                          "&:hover": {
                            backgroundColor: "#ef9a9a",
                          },
                          width: 45,
                          height: 45,
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <span>Showing 1 to 6 of total entries</span>
            </div>
            <div>
              <Pagination
                color="primary"
                count={10}
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
