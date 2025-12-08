import React from 'react';
import { Link } from 'react-router';
const categories = [
  {
    name: "Pets (Adoption)",
    icon: "🐶",
    route: "pet-adoption",
    bg: "bg-blue-100",
  },
  {
    name: "Pet Food",
    icon: "🍖",
    route: "pet-food",
    bg: "bg-green-100",
  },
  {
    name: "Accessories",
    icon: "🧸",
    route: "accessories",
    bg: "bg-yellow-100",
  },
  {
    name: "Pet Care Products",
    icon: "💊",
    route: "/category-filtered-product/Pet%20Care%20Products",
    bg: "bg-pink-100",
  },
];

const Home = () => {
    return (
        <div>
             <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-orange-400">
        Browse by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((dog) => (
          <Link
            key={dog.name}
            to={dog.route}
            className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 ${dog.bg}`}
          >
            <span className="text-5xl mb-3">{dog.icon}</span>
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {dog.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>

        </div>
    );
};

export default Home;