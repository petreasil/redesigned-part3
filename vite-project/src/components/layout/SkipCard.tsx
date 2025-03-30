import { Check } from "lucide-react";
import { WasteType } from "../skipsize/SkipSizeSelector";
interface SkipcardProps {
  data: WasteType;
  selectedSize: number | null;
  handleSizeSelection: (size: number) => void;
}

const SkipCard: React.FC<SkipcardProps> = ({
  data,
  selectedSize,
  handleSizeSelection,
}) => {
  console.log(data);
  return (
    <div
      key={data?.id}
      onClick={() => handleSizeSelection(data?.id)}
      className={`
        min-w-[300px] max-w-[300px] h-[200px]
      relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300
      ${
        selectedSize === data?.id
          ? "scale-105 ring-4 ring-blue-500"
          : "hover:scale-103 hover:shadow-xl"
      }
      bg-gradient-to-br from-blue-100 to-blue-200 cursor-pointer
    `}
    >
      {selectedSize === selectedSize && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-blue-500 text-white rounded-full p-1">
            <Check size={24} />
          </div>
        </div>
      )}

      {/* Plan Content */}
      <div className="p-6 relative z-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 flex-wrap">
            <span className="text-5xl">🚛</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {data?.size} Yard Skip
              </h2>
              <p className="text-sm text-gray-600">
                {data?.hire_period_days} day hire period
              </p>
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-800">
            £{data?.price_before_vat} per week
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {(data?.features || []).map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-gray-700 space-x-2"
            >
              <Check size={16} className="text-blue-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          className={`
          w-full py-3 rounded-lg transition-all
          ${
            selectedSize === data?.id
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }
        `}
        >
          {selectedSize === data?.id ? "Selected" : "Select Plan"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
