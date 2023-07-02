// import React from 'react'

import axios from "axios"
import { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [meals,setMeals] = useState([]);
  const [isLoading,setIsloading] = useState(true)
  const getMeals = async () =>{
    const {data} = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    //console.log(data.meals);
    setMeals(data.meals);
    setIsloading(false);
  };

  useEffect(()=>{
    getMeals();
  },[])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ): (
        <div className="flex flex-wrap gap-5 py-10">
          {meals?.map(meal=>
            <Card key={meal.idMeal} meal={meal} />
          )}
    </div>
      )}
    </>
  )
}

export default Meals