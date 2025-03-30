import React from "react";
interface StepProps {
  header: string;
  subheader: string;
  children?: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ header, subheader, children }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">{header}</h2>
      <p className="text-gray-400 text-center mb-8">{subheader}</p>
      <>{children}</>
    </div>
  );
};

export default Step;
