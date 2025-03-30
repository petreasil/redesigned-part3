import { useState, useEffect } from "react";
import SkipCard from "../layout/SkipCard";

export interface WasteType {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

const SkipSizeSelector = () => {
  const chachedSelectedSize = localStorage.getItem("selectedSize");
  const [skipSizes, setSkipSizes] = useState<WasteType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSize, setSelectedSize] = useState<number | null>(
    chachedSelectedSize ? parseInt(chachedSelectedSize) : null
  );

  const handleSizeSelection = (size: number) => {
    setSelectedSize(size);
    localStorage.setItem("selectedSize", size.toString());
  };

  useEffect(() => {
    const fetchSkipSizes = async () => {
      const response = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      );
      const data = await response.json();
      setSkipSizes(data);
      setLoading(false);
    };
    fetchSkipSizes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 grid-template-columns: repeat(auto-fill, minmax(0, 1fr)) justify-items-center justify-center">
      {skipSizes.map((size: WasteType) => (
        <SkipCard
          key={size.id}
          data={size}
          selectedSize={selectedSize}
          handleSizeSelection={handleSizeSelection}
        />
      ))}
    </div>
  );
};

export default SkipSizeSelector;
