import React from 'react';
import { useLoaderData } from 'react-router';
import CareCards from '../components/CareCards';

const PetCare = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
             <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">🧼 Pet Care Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {data.map(car => <CareCards key={car._id} car={car}></CareCards>)}
      </div>
    </div>

        </div>
    );
};

export default PetCare;