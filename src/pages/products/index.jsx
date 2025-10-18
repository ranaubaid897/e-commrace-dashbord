import React from "react";
import {
  Box,
  Breadcrumbs,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Rating,
  IconButton,
  Pagination,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Products = () => {
  // ✅ Cards data
  const cards = [
    {
      title: "Total Users",
      value: 277,
      color: "linear-gradient(135deg, #00c853, #00bfa5)", // green
      icon: <PersonIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.4)" }} />,
    },
    {
      title: "Total Orders",
      value: 277,
      color: "linear-gradient(135deg, #d500f9, #ff4081)", // pink-purple
      icon: (
        <ShoppingCartIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.4)" }} />
      ),
    },
    {
      title: "Total Sales",
      value: 277,
      color: "linear-gradient(135deg, #2979ff, #00b0ff)", // blue
      icon: (
        <ShoppingBagIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.4)" }} />
      ),
    },
  ];

  // ✅ States
  const [categoryBy, setCategoryBy] = React.useState("");
  const [showBy, setShowBy] = React.useState("");

  // ✅ Handlers
  const handleCategoryByChange = (event) => setCategoryBy(event.target.value);
  const handleShowByChange = (event) => setShowBy(event.target.value);

  return (
    <>
      {/* ✅ Header */}
      <div className="card shadow border-0 w-100 flex-row p-4 align-items-center">
        <h5 className="mb-0">Product List</h5>

        {/* ✅ Breadcrumb Section */}
        <Breadcrumbs
          aria-label="breadcrumb"
          className="ms-auto breadcrumbs_"
          sx={{
            "& .MuiChip-root": { fontSize: "16px", fontWeight: 500 },
          }}
        >
          <Chip
            label="Dashboard"
            icon={<HomeIcon fontSize="small" />}
            component="a"
            href="/"
            clickable
            sx={{
              backgroundColor: "#f5f5f5",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          />
          <Chip
            label="Products"
            sx={{
              backgroundColor: "#1976d2",
              color: "#fff",
              "& .MuiChip-icon": { color: "#fff" },
            }}
          />
        </Breadcrumbs>
      </div>

      {/* ✅ Statistic Cards */}
      <div className="d-flex flex-wrap gap-4 justify-content-center p-4">
        {cards.map((card, index) => (
          <button
            key={index}
            className="border-0 shadow-lg text-start"
            style={{
              background: card.color,
              borderRadius: "16px",
              width: "300px",
              height: "150px",
              padding: "20px",
              position: "relative",
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h5 style={{ fontWeight: "600" }}>{card.title}</h5>
            <h2 style={{ fontWeight: "700", marginTop: "10px" }}>{card.value}</h2>

            <div
              style={{
                position: "absolute",
                right: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "10px",
              }}
            >
              {card.icon}
            </div>
          </button>
        ))}
      </div>

      {/* ✅ Product Table Section */}
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

          {/* ✅ Filters */}
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

          {/* ✅ Table */}
          <div
            className="table-div py-4"
            style={{
              width: "100%",
              overflowX: "auto",
            }}
          >
            <table className="table table-striped">
              <thead className="table-primary">
                <tr className="text-center">
                  <th>UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>RATING</th>
                  <th>REVIEWS</th>
                  <th>ORDERS</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, i) => (
                  <tr className="align-middle" key={i}>
                    <td>#{i + 1}</td>
                    <td>
                      <div className="d-flex">
                        <div className="me-2 image-wrapper">
                          <img
                            src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                            alt="Product"
                            className="responsive-image"
                            width="60"
                          />
                        </div>
                        <div className="product-text">
                          <h6 className="title">
                            Tops and skirt set for Female...
                          </h6>
                          <span className="description">
                            Women's exclusive summer set
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>Women</td>
                    <td>Richman</td>
                    <td>
                      <span style={{ textDecoration: "line-through" }}>
                        $21.00
                      </span>
                      <br />
                      <span style={{ color: "red" }}>$18.00</span>
                    </td>
                    <td>
                      <Rating name="read-only" value={4} readOnly />
                    </td>
                    <td>4.9 (16)</td>
                    <td>380</td>
                    <td>$38k</td>
                    <td>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1.5,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <IconButton
                          sx={{
                            backgroundColor: "#f3d5ff",
                            color: "#8e24aa",
                            borderRadius: "12px",
                            "&:hover": { backgroundColor: "#e1bee7" },
                            width: 45,
                            height: 45,
                          }}
                        >
                          <VisibilityIcon />
                        </IconButton>

                        <IconButton
                          sx={{
                            backgroundColor: "#d7f7e4",
                            color: "#2e7d32",
                            borderRadius: "12px",
                            "&:hover": { backgroundColor: "#c8e6c9" },
                            width: 45,
                            height: 45,
                          }}
                        >
                          <EditIcon />
                        </IconButton>

                        <IconButton
                          sx={{
                            backgroundColor: "#ffd6d6",
                            color: "#c62828",
                            borderRadius: "12px",
                            "&:hover": { backgroundColor: "#ef9a9a" },
                            width: 45,
                            height: 45,
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Pagination */}
          <div className="d-flex justify-content-between">
            <span>Showing 1 to 6 of total entries</span>
            <Pagination color="primary" count={10} showFirstButton showLastButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
