import React from 'react';
import { Link } from 'react-router';

const FoodCards = ({food}) => { 
    const {name, category, price, location, image} = food

    return (
        <div>
              <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure>
        <img
          src={food.image}
          alt={food.name}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{food.name}</h2>
        <p className="text-sm text-gray-500">{food.category}</p>
        <p className="text-green-600 font-bold">{food.price}</p>
        <p className="text-sm text-gray-600">📍 {food.location}</p>
        <div className="card-actions justify-end mt-4">
          <Link>
            <button className="inline-block btn bg-yellow-500 hover:bg-yellow-600 text-white font-semibold btn-sm transition ">Order Now</button>
          </Link>
        </div>
      </div>
    </div>

        </div>
    );
};

export default FoodCards;