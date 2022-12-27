import { categories } from "../utils/constants";
import { Box, Stack } from "@mui/material";

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        heigth: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
        onClick={()=>setSelectedCategory(category.name)}
          className="category-btn"
          style={{
            backgroundColor:
              category.name === selectedCategory ? "#fc1503 " : "#000 ",
          }}
          key={category.name}
        >
          <span
            className="category-icon"
            style={{
              color: category.name === selectedCategory ? "white" : "",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
export default Sidebar;
