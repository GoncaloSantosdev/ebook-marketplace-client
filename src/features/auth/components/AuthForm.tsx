import { useState } from "react";
// Components
import { AuthFormEmailStep, AuthFormProfileStep } from "..";

export interface AuthFormData {
  email: string;
  username: string;
  profileImage: File | null;
}

const AuthForm = () => {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  return (
    <div className="bg-background p-6 rounded-lg shadow-sm border border-primary-light max-w-md w-full mx-auto">
      <div className="text-center">
        <h1 className="text-xl font-serif text-text mb-2">
          Join our community
        </h1>
        <p className="text-text-light text-xs">
          {step === 1
            ? "Start by entering your email address"
            : "Complete your profile information"}
        </p>
      </div>

      <div className="mt-8">
        {step === 1 ? (
          <AuthFormEmailStep onNext={handleNextStep} />
        ) : (
          <AuthFormProfileStep onPrev={handlePrevStep} />
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <div className="flex space-x-2">
          <div
            className={`h-2 w-8 rounded-full ${
              step === 1 ? "bg-primary" : "bg-primary-light"
            }`}
          ></div>
          <div
            className={`h-2 w-8 rounded-full ${
              step === 2 ? "bg-primary" : "bg-primary-light"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
