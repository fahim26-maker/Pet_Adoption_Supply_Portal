import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AdoptedCards from '../components/AdoptedCards';

const PetAdoption = ({adopted}) => {

    const data = useLoaderData();
    console.log(data)
    return (
        <div>
        <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 mt-4">🐶 Pet Adoption Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
       {data.map(adopted => <AdoptedCards key={adopted._id} adopted={adopted}/>)}
      </div>
    </div>

        </div>
    );
};

export default PetAdoption;