// Components
import { Button, Input } from "../../../../components";
// Icons
import { BsCamera } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";

interface AuthFormProfileStepProps {
  onPrev: () => void;
}

const AuthFormProfileStep = ({ onPrev }: AuthFormProfileStepProps) => {
  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onPrev}
        className="text-text-light hover:text-text flex items-center text-xs mb-4 transition-colors duration-200 cursor-pointer"
      >
        <HiOutlineArrowLeft className="mr-1" />
        Back
      </button>

      <div className="flex flex-col items-center mb-6">
        <div className="h-24 w-24 rounded-full bg-primary-light flex items-center justify-center cursor-pointer overflow-hidden border-2 border-primary-light hover:border-primary transition-all duration-200">
          <BsCamera size={24} className="text-primary" />
        </div>
        <p className="text-text-light text-xs mt-2">
          Click to upload profile picture
        </p>
      </div>

      <Input
        id="username"
        label="Username"
        type="text"
        placeholder="Choose a username"
      />

      <div className="mt-8">
        <Button variant="primary" fullWidth type="button">
          Create Account
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

export default AuthFormProfileStep;
