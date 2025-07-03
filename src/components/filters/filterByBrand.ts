import type { Car } from '../../types/cars';

export const filterByBrand = (cars: Car[], brand: string): Car[] => {
  if (!brand) return cars;
  return cars.filter((car) => car.brand.toLowerCase() === brand.toLowerCase());
};
