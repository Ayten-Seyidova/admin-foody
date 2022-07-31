import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { categoryAPI } from "../../api/category";

export default function SelectCategory() {
  const [category, setCategory] = React.useState([]);
  const [cat, setCat] = React.useState("");

  React.useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        setCategory([...new Set(res.data.category.map((item) => item.name))]);
      })
      .catch((err) => {});
  };

  const handleChange = (event) => {
    setCat(event.target.value);
  };

  return (
    <Box sx={{ minWidth: "40%", height: 35 }}>
      <Select
        value={cat}
        onChange={handleChange}
        sx={{
          height: 35,
          width: 150,
          fontFamily: "Roboto",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        {category.map((item) => (
          <MenuItem key={item} value={item} sx={{ fontSize: 14 }}>
            {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
