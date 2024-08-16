import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

const SingleMeal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setMeal(data.meals[0]);
    };
    fetchMeal();
  }, [id]);

  if (!meal) return <Typography variant="h4" align="center">Loading...</Typography>;

  return (
    <Container maxWidth="sm" style={{ marginTop: 40 }}>
      <Typography variant="h3" align="center" gutterBottom>{meal.strMeal}</Typography>
      <Card>
        <CardMedia component="img" height="300" image={meal.strMealThumb} alt={meal.strMeal} />
        <CardContent>
          <Typography variant="h6" style={{ marginTop: 20 }}>Category: {meal.strCategory}</Typography>
          <Typography variant="h6">Area: {meal.strArea}</Typography>
          <Typography variant="body1" style={{ marginTop: 20 }}>{meal.strInstructions}</Typography>
          <Typography variant="h5" style={{ marginTop: 20 }}>Ingredients:</Typography>
          <ul>
            {[...Array(20).keys()].map((i) => {
              if (meal[`strIngredient${i + 1}`]) {
                return (
                  <li key={i}>
                    {meal[`strIngredient${i + 1}`]} - {meal[`strMeasure${i + 1}`]}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleMeal;
