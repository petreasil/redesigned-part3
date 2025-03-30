import { Check, Truck } from "lucide-react";
import { WasteType } from "../skipsize/SkipSizeSelector";
interface SkipcardProps {
  data: WasteType;
  selectedSize: WasteType | null;
  handleSizeSelection: (data: WasteType | null) => void;
}

const SkipCard: React.FC<SkipcardProps> = ({
  data,
  selectedSize,
  handleSizeSelection,
}) => {
  return (
    <div
      key={data?.id}
      onClick={() => handleSizeSelection({ ...data })}
      className={` 
      relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300
      ${
        selectedSize?.id === data?.id
          ? "scale-105 ring-4 ring-blue-500"
          : "hover:scale-103 hover:shadow-xl"
      }
      bg-gradient-to-br from-blue-100 to-blue-200 cursor-pointer
    `}
    >
      {selectedSize?.id === data?.id && (
        <div className="absolute top-[5px] right-[5px] z-10">
          <div className="bg-blue-500 text-white rounded-full p-1">
            <Check size={21} />
          </div>
        </div>
      )}

      {/* Plan Content */}
      <div className="p-6 relative z-0">
        <div className="flex items-center justify-between mb-4  gap-2">
          <div className="flex items-center  space-x-4 flex-wrap">
            <span className="text-4xl ">
              <Truck className="text-blue-600 w-12 h-12" />
            </span>
            <div className="flex flex-col w-full">
              <h2 className="text-xl font-bold text-gray-900">
                {data?.size} Yard Skip
              </h2>
              <p className="text-sm text-gray-600">
                {data?.hire_period_days} day hire period
              </p>
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-500">
              £{data?.price_before_vat}
            </div>
            <div className="text-2xl font-bold text-gray-800">per week</div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700 space-x-2">
            <Check size={16} className="text-blue-500" />
            <span className="text-sm">{data?.size} Yard Skip</span>
          </div>
          <div className="flex items-center text-gray-700 space-x-2">
            <Check size={16} className="text-blue-500" />
            <span className="text-sm">
              {data?.hire_period_days} day hire period
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className={`
          w-full py-3 rounded-lg transition-all
          ${
            selectedSize?.id === data?.id
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }
        `}
        >
          {selectedSize?.id === data?.id ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
