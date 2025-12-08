import React from 'react';
import { Link } from 'react-router';

const PetAcc = ({acc}) => {
    const {name, image, category, price, location,} = acc
    return (
        <div>
             <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure>
        <img
          src={acc.image}
          alt={acc.name}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{acc.name}</h2>
        <p className="text-sm text-gray-500">{acc.category}</p>
        <p className="text-green-600 font-bold">{acc.price}</p>
        <p className="text-sm text-gray-600">📍 {acc.location}</p>
        <div className="card-actions justify-end mt-4">
          <Link>
            <button className="btn btn-secondary btn-sm">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>

        </div>
    );
};

export default PetAcc;