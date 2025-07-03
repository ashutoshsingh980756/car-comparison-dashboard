import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';

export const ComparisonTable: React.FC = () => {
  const { selectedCars } = useContext(CarContext);

  if (selectedCars.length === 0) return <p>Select cars to compare.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">Attribute</th>
            {selectedCars.map((car) => (
              <th key={car.id} className="border px-4 py-2">
                {car.brand} {car.model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Price</td>
            {selectedCars.map((car) => (
              <td key={car.id} className="border px-4 py-2">
                ${car.price}
              </td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2">Weight</td>
            {selectedCars.map((car) => (
              <td key={car.id} className="border px-4 py-2">
                {car.weight}kg
              </td>
            ))}
          </tr>
          <tr>
            <td className="border px-4 py-2">Rating</td>
            {selectedCars.map((car) => (
              <td key={car.id} className="border px-4 py-2">
                {car.rating} ⭐
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
