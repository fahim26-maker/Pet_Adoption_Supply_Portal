import React from 'react';
import { Link } from 'react-router';

const CareCards = ({car}) => {
    const {name, image, price, location, category} = car
    return (
        <div>
              <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure>
        <img
          src={car.image}
          alt={car.name}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{car.name}</h2>
        <p className="text-sm text-gray-500">{car.category}</p>
        <p className="text-green-600 font-bold">{car.price}</p>
        <p className="text-sm text-gray-600">📍 {car.location}</p>
        <div className="card-actions justify-end mt-4">
          <Link>
            <button className="inline-block btn bg-yellow-500 hover:bg-yellow-600 text-white font-semibold btn-sm transition ">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>

        </div>
    );
};

export default CareCards;