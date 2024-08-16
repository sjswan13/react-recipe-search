import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
  return (
    <Grid container spacing={2} style={{ marginTop: 20 }}>
      {meals.map((meal) => (
        <Grid item xs={12} sm={6} md={4} key={meal.idMeal}>
          <Link to={`/recipe/${meal.idMeal}`} style={{ textDecoration: "none" }}>
            <Card
              style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
            >
              <CardMedia component="img" height="140" image={meal.strMealThumb} alt={meal.strMeal} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" align="center">
                  {meal.strMeal}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MealList;
