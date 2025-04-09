// Components
import { Button, Input } from "../../../../components";

interface AuthFormEmailStepProps {
  onNext: () => void;
}

const AuthFormEmailStep = ({ onNext }: AuthFormEmailStepProps) => {
  return (
    <div className="space-y-8">
      <Input
        id="email"
        label="Email Address"
        type="email"
        placeholder="your@email.com"
      />

      <div className="mt-8">
        <Button variant="primary" fullWidth onClick={onNext} type="button">
          Continue
        </Button>
      </div>

      <div className="text-center mt-4">
        <p className="text-text-light text-xs">
          This project is for portfolio purposes only.{" "}
          <a
            href="https://somedigitalguys.com/"
            className="text-primary hover:text-primary-dark border-b border-primary pb-0.5 transition-colors duration-200"
            target="_blank"
          >
            Some Digital Guys
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthFormEmailStep;
