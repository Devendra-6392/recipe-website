import React from "react";
import { Link, useLocation } from "react-router-dom";

const Singlerecipe = () => {
  let location = useLocation();
  console.log(location.state.recipe);
  return (
    <div className=" container">
      <div className="row">
        <div className="col-md-6">
          <img
            style={{ height: "25rem", width: "30rem" }}
            src={location.state.recipe.image}
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center"> Dish Name: {location.state.recipe.label} </h1>
          <h1 className="text-center">MealType: {location.state.recipe.mealType[0]} </h1>
          <h1 className="text-center">DishType: {location.state.recipe.dishType[0]} </h1>
          <div className="col-md-3 m-auto mt-4">
            <Link to = {location.state.recipe.url} className="btn btn-warning">SEE FULL RECIPE </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4>INGREDIENTS {location.state.recipe.ingredients.length} </h4>
          <ul>
            {location.state.recipe.ingredients.map((e) => {
              return <li>{e.text} </li>;
            })}
          </ul>
        </div>
        <div className="col-md-6">
          <h1 className="text-center"> TOTAL NUTRIENTS </h1>
          <div className="row">
            <div className="col-md-4 bg-danger  text-center p-4">
              <h5>{location.state.recipe.totalNutrients.ENERC_KCAL.label} </h5>
              <p>
                {location.state.recipe.totalNutrients.ENERC_KCAL.quantity}{" "}
                {location.state.recipe.totalNutrients.ENERC_KCAL.unit}
              </p>
            </div>
            <div className="col-md-4 bg-danger ms-auto text-center p-4">
              <h5>{location.state.recipe.totalNutrients.PROCNT.label} </h5>
              <p>
                {location.state.recipe.totalNutrients.PROCNT.quantity}{" "}
                {location.state.recipe.totalNutrients.PROCNT.unit}
              </p>
            </div>
            <div className="col-md-4 bg-danger ms-auto text-center p-4 ">
              <h5>{location.state.recipe.totalNutrients.SUGAR.label} </h5>
              <p>
                {location.state.recipe.totalNutrients.SUGAR.quantity}
                {location.state.recipe.totalNutrients.SUGAR.unit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlerecipe;
