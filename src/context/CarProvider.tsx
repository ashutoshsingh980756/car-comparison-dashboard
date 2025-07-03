import React, { useState } from 'react';
import { CarContext } from './CarContext';
import type { Car } from '../types/cars';

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const toggleCarSelection = (car: Car) => {
    setSelectedCars((prev) =>
      prev.find((c) => c.id === car.id)
        ? prev.filter((c) => c.id !== car.id)
        : [...prev, car]
    );
  };

  return (
    <CarContext.Provider value={{ selectedCars, toggleCarSelection }}>
      {children}
    </CarContext.Provider>
  );
};
