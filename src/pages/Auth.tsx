import { AuthForm } from "../features/auth";

const Auth = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif text-text">Create your account</h1>
          <p className="text-text-light text-sm mt-2">
            Join our community of book lovers
          </p>
        </div>

        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
