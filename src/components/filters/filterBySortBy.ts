import type { Car } from '../../types/cars';

export const filterBySortBy = (cars: Car[], sortBy: string): Car[] => {
  const carsCopy = [...cars];

  switch (sortBy) {
    case 'price':
      return carsCopy.sort((a, b) => a.price - b.price);
    case 'rating':
      return carsCopy.sort((a, b) => b.rating - a.rating);
    default:
      return cars;
  }
};
