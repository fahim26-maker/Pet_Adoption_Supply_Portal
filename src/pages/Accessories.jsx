import React from 'react';
import { useLoaderData } from 'react-router';
import PetAcc from '../components/PetAcc';

const Accessories = () => {
      const data = useLoaderData();
    console.log(data)
    return (
        <div>
             <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">🎒 Pet Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {data.map(acc => <PetAcc acc={acc} key={acc._id}></PetAcc>)}
      </div>
    </div>

        </div>
    );
};

export default Accessories;