import type { Car } from '../../types/cars';

export const filterByPrice = (cars: Car[], maxPrice: number): Car[] => {
  if (!maxPrice) return cars;
  return cars.filter((car) => car.price <= maxPrice);
};
