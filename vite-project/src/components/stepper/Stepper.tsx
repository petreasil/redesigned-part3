import { ArrowRight } from "lucide-react";
import React from "react";
import Loader from "../loader/Loader";

type GeneralStepperProps = {
  steps: {
    id: number;
    label: string;
    icon: React.ReactElement;
    children: React.ReactNode;
  }[];
};
const Stepper = ({ steps = [] }: GeneralStepperProps) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [isLoadingStep, setIsloadingStep] = React.useState<boolean>(false);

  const handlePrev = () => {
    setIsloadingStep(true);
    setActiveStep((prev) => Math.max(prev - 1, 0));
    setTimeout(() => {
      setIsloadingStep(false);
    }, 1000);
  };
  const handleNext = () => {
    setIsloadingStep(true);
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    setTimeout(() => {
      setIsloadingStep(false);
    }, 1000);
  };

  return (
    <div className="relative flex flex-col w-full min-h-screen">
      <div className="flex items-center justify-center gap-2 mb-8 flex-wrap px-2 py-4">
        {steps.map((step, index) => (
          <>
            <button
              key={step.id}
              className={`flex items-center justify-center whitespace-nowrap cursor-pointer py-4`}
              onClick={() => setActiveStep(index)}
            >
              {step.icon &&
                React.cloneElement(
                  step.icon as React.ReactElement<{ className: string }>,
                  {
                    className: `${
                      index === activeStep ? "text-[#0037C1] " : "text-white"
                    } w-6 h-6`,
                  }
                )}
              <span
                className={`${
                  index === activeStep ? "text-[#0037C1] " : "text-white"
                } ml-2 `}
              >
                {step.label}
              </span>
            </button>
            {index !== steps.length - 1 && (
              <div
                key={`bar-${index}`}
                className={`w-16 h-px bg-[#0037C1] `}
              ></div>
            )}
          </>
        ))}
      </div>
      <div className="flex-grow px-2 pb-4">
        {isLoadingStep ? <Loader /> : steps[activeStep].children}
      </div>

      <div className="sticky bottom-0 w-full flex items-center justify-between bg-[#1C1C1C] border-t border-[#2A2A2A] p-4  z-50">
        <div>text</div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeStep === 0}
            aria-label="Previous Step"
            className="bg-[#333] hover:bg-[#444] text-white font-[400] py-2 px-4 rounded-md cursor-pointer"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            aria-label="Next Step"
            className="flex items-center gap-2 bg-[#0037C1] hover:bg-[#0037C1/50] cursor-pointer text-white font-[400] py-2 px-4 rounded-md"
          >
            Continue
            <ArrowRight name="arrow-right" className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
