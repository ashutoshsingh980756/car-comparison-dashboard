import type { Car } from '../types/cars';

import toyotaSedanImg from '../assets/images/camry.jpg';
import hondaSedanImg from '../assets/images/accord.jpg';
import bmwSedanImg from '../assets/images/bmw.jpg';
import audiSedanImg from '../assets/images/audi.jpg';
import fortunerSuv from '../assets/images/toyota-suv.jpg';
import elevateImg from '../assets/images/honda-suv.jpg';
import bmwSuvImg from '../assets/images/bmw-suv.jpg';
import audiSuvImg from '../assets/images/audi-suv.jpg';

export const cars: Car[] = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Camry',
    price: 25000,
    weight: 1500,
    rating: 4.5,
    imageUrl: toyotaSedanImg,
    type: 'Sedan',
  },
  {
    id: '2',
    brand: 'Honda',
    model: 'Accord',
    price: 15000,
    weight: 1450,
    rating: 4.6,
    imageUrl: hondaSedanImg,
    type: 'Sedan',
  },
  {
    id: '3',
    brand: 'Bmw',
    model: '5 series',
    price: 20000,
    weight: 1450,
    rating: 4.0,
    imageUrl: bmwSedanImg,
    type: 'Sedan',
  },
  {
    id: '4',
    brand: 'Audi',
    model: 'A5',
    price: 20000,
    weight: 1450,
    rating: 4.7,
    imageUrl: audiSedanImg,
    type: 'Sedan',
  },
  {
    id: '5',
    brand: 'Toyota',
    model: 'Fortuner',
    price: 14000,
    weight: 1500,
    rating: 4.8,
    imageUrl: fortunerSuv,
    type: 'SUV',
  },
  {
    id: '6',
    brand: 'Honda',
    model: 'Elevate',
    price: 26000,
    weight: 1450,
    rating: 3.5,
    imageUrl: elevateImg,
    type: 'SUV',
  },
  {
    id: '7',
    brand: 'Bmw',
    model: '5x series',
    price: 30000,
    weight: 1450,
    rating: 3.7,
    imageUrl: bmwSuvImg,
    type: 'SUV',
  },
  {
    id: '8',
    brand: 'Audi',
    model: 'X5',
    price: 15000,
    weight: 1450,
    rating: 2.7,
    imageUrl: audiSuvImg,
    type: 'SUV',
  },
  // Add more car data here
];
