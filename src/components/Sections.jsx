import React from 'react';
const petHeroes = [
  {
    name: 'Luna',
    pet: '🐶 Labrador Mix',
    story: 'Luna was shy at first, but now she’s the heart of our home. Adopting her was the best decision we ever made.',
    image: 'https://i.postimg.cc/MG3hwjLd/luna.webp',
  },
  {
    name: 'Simba',
    pet: '🐱 Ginger Tabby',
    story: 'Simba helped me through tough times. He rescued me as much as I rescued him.',
    image: 'https://i.postimg.cc/zXY4qNxt/happy-owner.jpg',
  },
  {
    name: 'Coco',
    pet: '🐕 Senior Poodle',
    story: 'Coco may be older, but she’s full of love. Seniors deserve forever homes too.',
    image: 'https://i.postimg.cc/Gmd0xRYy/coco.jpg',
  },
  
];
const Sections = () => {
    return (
        <div>
            {/* sections */}
         <section className="bg-yellow-50 py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">Why Adopt from PawMart?</h2>
        <p className="text-lg md:text-xl mb-6">
          Every year, millions of loving pets wait in shelters for a second chance. At PawMart, we believe adoption is the most compassionate choice you can make.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">🐶 Save a Life</h3>
            <p>Adopting gives a homeless pet a forever home and a new beginning.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">💸 Affordable & Ethical</h3>
            <p>Adoption is budget-friendly and helps reduce unethical breeding practices.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">🐾 Unmatched Loyalty</h3>
            <p>Rescued pets often form deep, lifelong bonds with their new families.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">🌍 Make a Difference</h3>
            <p>Be part of a movement that values compassion, kindness, and second chances.</p>
          </div>
        </div>
      </div>
    </section>
{/* section 2 */}
 <section className="bg-white py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">🐕 Meet Our Pet Heroes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {petHeroes.map((hero, index) => (
            <div
              key={index}
              className="bg-yellow-50 rounded-xl shadow hover:shadow-lg transition p-6 text-left"
            >
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{hero.name}</h3>
              <p className="text-sm text-yellow-700 mb-2">{hero.pet}</p>
              <p className="text-gray-700 text-base">{hero.story}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Become a Hero — Adopt Now
          </a>
        </div>
      </div>
    </section>

        </div>
    );
};

export default Sections;