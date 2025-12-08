import React from 'react';
import { Link } from 'react-router';

const AdoptedCards = ({adopted}) => {
    const {name, category, price, location, image, } = adopted
    return (
        <div>
             <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure>
        <img
          src={adopted.image}
          alt={adopted.name}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{adopted.name}</h2>
        <p className="text-sm text-gray-500">{adopted.category}</p>
        <p className="text-green-600 font-bold">{adopted.price}</p>
        <p className="text-sm text-gray-600">📍 {adopted.location}</p>
        <div className="card-actions justify-end mt-4">
          <Link>
            <button className="btn btn-primary btn-sm">See Details</button>
          </Link>
        </div>
      </div>
    </div>

        </div>
    );
};

export default AdoptedCards;