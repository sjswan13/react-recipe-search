import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import SearchForm from "./components/SearchForm";
import MealList from "./components/MealList";
import SingleMeal from "./components/SingleMeal";

const App = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMeals([]);
    setSearchTerm('');
    setSearched(false);
    navigate('/')
  }, []);

  const searchMeals = async () => {
    if (searchTerm.trim()) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await res.json();
      setMeals(data.meals || []);
      setSearched(true);
      navigate('/'); 
    } else {
      alert("Please enter a search term");
    }
  };

  const getRandomMeal = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    const data = await res.json();
    const randomMeal = data.meals[0];
    setMeals([randomMeal]);
    setSearched(true);
    navigate(`/recipe/${randomMeal.idMeal}`); 
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Recipe Search
      </Typography>
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMeals={searchMeals}
        getRandomMeal={getRandomMeal}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {searched && searchTerm && meals.length > 0 && (
                <Typography variant="h4" align="center" gutterBottom>
                  Search results for '{searchTerm}':
                </Typography>
              )}
              {searched && searchTerm && meals.length === 0 && (
                <Typography variant="h4" align="center" gutterBottom>
                  There are no search results for '{searchTerm}'. Try Again!
                </Typography>
              )}
              <MealList meals={meals} />
            </>
          }
        />
        <Route path="/recipe/:id" element={<SingleMeal />} />
      </Routes>
    </Container>
  );
};

export default App;
