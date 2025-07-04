import { createContext } from 'react';
import type { Car } from '../types/cars';

type CarContextType = {
  selectedCars: Car[];
  toggleCarSelection: (car: Car) => void;
};

export const CarContext = createContext<CarContextType>({
  selectedCars: [],
  toggleCarSelection: () => {},
});
