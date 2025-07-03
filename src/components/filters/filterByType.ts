import type { Car } from '../../types/cars';

export const filterByType = (cars: Car[], type: string): Car[] => {
  if (!type) return cars;
  return cars.filter((car) => car.type.toLowerCase() === type.toLowerCase());
};
