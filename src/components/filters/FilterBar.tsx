import { cars } from '../../data/cars';

type FilterBarProps = {
  selectedBrand: string;
  selectedType: string;
  selectedPrice: number;
  selectedSortBy: string;
  onBrandChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onPriceChange: (value: number) => void;
  onSoryByChange: (value: string) => void;
};

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedBrand,
  selectedType,
  selectedPrice,
  selectedSortBy,
  onBrandChange,
  onTypeChange,
  onPriceChange,
  onSoryByChange,
}) => {
  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
  const uniqueTypes = [...new Set(cars.map((car) => car.type))];

  return (
    <div className="mb-4 flex flex-wrap gap-4">
      <select
        className="border p-2 rounded"
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}>
        <option value="">All Brands</option>
        {uniqueBrands.map((brand, i) => (
          <option key={i}>{brand}</option>
        ))}
      </select>
      <select
        className="border p-2 rounded"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}>
        <option value="">All Types</option>
        {uniqueTypes.map((type, i) => (
          <option key={i}>{type}</option>
        ))}
      </select>
      <select
        className="border p-2 rounded"
        value={selectedSortBy}
        onChange={(e) => onSoryByChange(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price">Prince</option>
        <option value="rating">Rating</option>
      </select>
      <input
        type="range"
        min={10000}
        max={50000}
        step={1000}
        value={selectedPrice}
        onChange={(e) => onPriceChange(+e.target.value)}
        className="w-48"
      />
      <span>Max Price: ${selectedPrice}</span>
    </div>
  );
};
