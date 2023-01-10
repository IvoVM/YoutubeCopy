import { useState, useEffect } from "react";
import { Box, getBottomNavigationUtilityClass, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box
    p={2}
    sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
    className="caja"
  >
    <Typography
      variant="h4"
      sx={{ color: "#fff" }}
      fontWeight="bold"
      mb={2}
    >
      Search results for:
      <span style={{ color: "#f31503" }}>{searchTerm}</span>
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;
