import {
  MapPinHouse,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Stepper from "./components/stepper/Stepper";
import Step from "./components/stepper/Step";
import SkipSizeSelector, {
  WasteType,
} from "./components/skipsize/SkipSizeSelector";
import { useState } from "react";

function App() {
  const chachedSelectedSize = localStorage.getItem("selectedSize");
  const [selectedSize, setSelectedSize] = useState<WasteType | null>(
    chachedSelectedSize ? JSON.parse(chachedSelectedSize) : null
  );
  const steps = [
    {
      id: 1,
      label: "Postcode",
      icon: <MapPinHouse />,
      children: (
        <Step
          header="Postcode"
          subheader="Select the location that suits your needs"
        />
      ),
    },
    {
      id: 2,
      label: "Waste type",
      icon: <Trash2 />,
      children: (
        <Step
          header="Waste type"
          subheader="Select the wastetype that suits your needs"
        />
      ),
    },
    {
      id: 3,
      label: "Select Skip",
      icon: <Truck />,
      children: (
        <Step
          header="Choose Your Skip Size"
          subheader="Select the skip size that best suits your needs"
          children={
            <SkipSizeSelector
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          }
        />
      ),
    },
    {
      id: 4,
      label: "Permit Check",
      icon: <Shield />,
      children: <Step header="Permit Check" subheader="" />,
    },
    {
      id: 5,
      label: "Choose Date",
      icon: <Calendar />,
      children: <Step header="Date" subheader="" />,
    },
    {
      id: 6,
      label: "Payment",
      icon: <CreditCard />,
      children: <Step header="Payment" subheader="" />,
    },
  ];
  return (
    <>
      <Layout>
        <Stepper steps={steps} selectedSize={selectedSize} />
      </Layout>
    </>
  );
}

export default App;
