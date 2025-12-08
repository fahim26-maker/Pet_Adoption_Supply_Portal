import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCards from '../components/FoodCards';

const PetFood = ({food}) => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
             <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 mt-4">🍖 Pet Food Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {data.map(food => <FoodCards key={food._id} food={food}></FoodCards>)}
      </div>
    </div>

        </div>
    );
};

export default PetFood;