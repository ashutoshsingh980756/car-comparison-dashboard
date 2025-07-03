import { useState } from 'react';

import { filterByBrand } from './components/filters/filterByBrand';
import { filterByType } from './components/filters//filterByType';
import { filterByPrice } from './components/filters/filterByPrice';
import { filterBySortBy } from './components/filters/filterBySortBy';

import { cars } from './data/cars';
import { FilterBar } from './components/filters/FilterBar';
import { CarList } from './components/CarList';
import { ComparisonTable } from './components/ComparisonTable';

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPrice, setSelectedPrice] = useState(50000);
  const [selectedSortBy, setSelectedSortBy] = useState('');

  // Add your new filter options here
  let filteredCars = filterByBrand(cars, selectedBrand);
  filteredCars = filterByType(filteredCars, selectedType);
  filteredCars = filterByPrice(filteredCars, selectedPrice);
  filteredCars = filterBySortBy(filteredCars, selectedSortBy);

  return (
    <main className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Car Comparison Dashboard
      </h1>
      <FilterBar
        selectedBrand={selectedBrand}
        selectedType={selectedType}
        selectedPrice={selectedPrice}
        selectedSortBy={selectedSortBy}
        onBrandChange={setSelectedBrand}
        onTypeChange={setSelectedType}
        onPriceChange={setSelectedPrice}
        onSoryByChange={setSelectedSortBy}
      />
      <div className="grid md:grid-cols-2 gap-4">
        <CarList cars={filteredCars} />
        <ComparisonTable />
      </div>
    </main>
    // To do: 1. optimize the App file. 2. Add new features. 3. Write Test cases.
  );
}
