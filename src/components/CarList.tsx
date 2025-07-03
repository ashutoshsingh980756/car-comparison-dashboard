import React, { useContext } from 'react';
import type { Car } from '../types/cars';
import { CarContext } from '../context/CarContext';

interface CarListProps {
  cars: Car[];
}

export const CarList: React.FC<CarListProps> = ({ cars }) => {
  const { selectedCars, toggleCarSelection } = useContext(CarContext);

  return (
    <div className="space-y-4">
      {cars.length === 0 ? (
        <p>No cars match your filters.</p>
      ) : (
        cars.map((car) => (
          <div
            key={car.id}
            className="border p-4 rounded shadow hover:bg-gray-50">
            <img
              src={car.imageUrl}
              alt={`This is ${car.model} model car by ${car.brand} `}
              className="w-full h-40 object-cover mb-2"
              loading="lazy"
            />
            <h2 className="text-xl font-semibold">
              {car.brand} {car.model}
            </h2>
            <p>Price: ${car.price}</p>
            <p>Weight: {car.weight}kg</p>
            <p>Rating: {car.rating} ⭐</p>
            <p>Type: {car.type}</p>
            <button
              onClick={() => toggleCarSelection(car)}
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              {selectedCars.find((c) => c.id === car.id)
                ? 'Remove from Compare'
                : 'Add to Compare'}
            </button>
          </div>
          // To Do: 1. Add scroll bar to card list.
        ))
      )}
    </div>
  );
};
