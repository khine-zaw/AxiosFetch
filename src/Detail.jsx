// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AiFillYoutube } from "react-icons/ai";

const Detail = () => {
  const {id} = useParams();
  const [meal,setMeal] = useState([])
  const getSingleMeal = async() => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals);
    setMeal(data?.meals[0]);
  }

  useEffect(()=>{
    getSingleMeal()
  },[])

  return (
    <div className="flex flex-col gap-5">
      {/* Details-{id} */}
      <img src={meal.strMealThumb} alt="" width={"300px"} className="rounded-xl shadow-xl"/>
      <div className="text-whit bg-green-500 w-20 text-center text-sm rounded-lg">
        {meal.strCategory}
      </div>
      <h1 className="text-2xl">{meal.strMeal}</h1>
      <div>
        <h2 className="text-2xl mb-2">Instruction</h2>
        <p className="tracking-wider leading-6 text-gray-500">{meal.strInstructions}</p>
      </div>
      <div className="flex gap-5 items-center">
      <a href={meal.strYoutube} target="__">
        <AiFillYoutube className="text-red-600 text-5xl cursor-pointer"/>
      </a>
      <p className="text-gray-500">Watch on youtube</p>
      </div>
    </div>
  )
}

export default Detail