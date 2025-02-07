import { watch } from 'fs';
import React from 'react';

const Watches = () => {

const watchData = [
  { id: 1, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/watch-02.png'},
  { id: 2, name: 'Omega', price: 8000, description: 'Sporty watch', image: '/watch-01.png'},
  { id: 3, name: 'Patek Philippe', price: 13000, description: 'Elegent watch', image: '/watch-09.png'},
  { id: 4, name: 'TAG Heuer', price: 18000, description: 'Sporty and Stylish watch', image: '/watch-06.png'},
  { id: 5, name: 'Breitling', price: 16000, description: 'Bold and rugged watch', image: '/watch-08.png'},
  { id: 6, name: 'Seiko', price: 17000, description: 'Affordable and reliable watch', image: '/watch-05.png'},
  { id: 7, name: 'TOMI', price: 900, description: 'stylish watch', image: '/watch-07.png'},
  { id: 8, name: 'Positif', price: 899, description: 'Affordable watch', image: '/watch-04.png'},
  { id: 9, name: 'Montblan', price: 1299, description: 'Bold watch', image: '/watch-03.png'},
]

  return (
      <div className="watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card bg-white p-5 rounded-md shadow-md text-center">
            <img src={watch.image} alt={watch.name} className="w-full rounded-md transition-transform duration-300 transform hover:scale-110" />
            <h3 className="mt-4 text-2xl font-bold">{watch.name}</h3>
            <p className="text-gray-500">{watch.description}</p>
            <div className="price text-blue-500 text-xl font-semibold mt-2">${watch.price}</div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Add to card</button>
          </div>
        ))}
      </div>
  );
};

export default Watches;
