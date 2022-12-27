import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid red",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        minWidth: "25%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input
        style={{ border: "none", outline: "none" }}
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
