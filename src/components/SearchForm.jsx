import React from "react";
import { TextField, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import ShuffleIcon from "@mui/icons-material/Shuffle"

const SearchForm = ({ searchTerm, setSearchTerm, searchMeals, getRandomMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMeals();
  };

  return (
   <Box 
    component='form'
    onSubmit={handleSubmit}
    display='flex'
    justifyContent='center'
    alignItems='center'
    marginBottom='20px'
   >
    <TextField
      variant="outlined"
      placeholder="Search for Recipes or keywords"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginRight: '10px', width: '60%', backgroundColor: 'transparent' }}
      inputProps={{
        style: { color: '#f5f5f5' },
      }}
      InputLabelProps={{
        style: { color: 'f5f5f5' },
      }}
      sx={{
        "& .MuiOutlined-root": {
          "& fieldset": {
            borderColor: "#f5f5f5",
          },
          "&:hover fieldset": {
            borderColor: "f5f5f5",
          },
          "&.Mui-focused fieldset": {
            borderColor: "f5f5f5",
          },
        },
      }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={searchMeals}
        style={{ marginRight: '10px', minWidth: '50px', padding: '10px' }}
        type='submit'
      />
      <Button 
        variant="contained"
        color="secondary"
        startIcon={<ShuffleIcon />}
        onClick={getRandomMeal}
        style={{ minWidth: '50px', padding: '10px' }}
      />
   </Box>
  );
};

export default SearchForm;