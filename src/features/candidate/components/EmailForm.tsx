import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../../shared/components/Button";
import { Input } from "../../../shared/components/Input";

interface Props {
  onSuccess: (email: string) => Promise<boolean>;
  loading: boolean;
}

export const EmailForm = ({ onSuccess, loading }: Props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email format";
    return null;
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateEmail(email));
  };

  const handleSubmit = async () => {
    const validationError = validateEmail(email);
    setError(validationError);
    setTouched(true);

    if (validationError) return;

    const success = await onSuccess(email);

    if (success) {
      toast.success("Email validated successfully 🚀");
    }
  };

  const isDisabled =
    loading || !email || !!validateEmail(email);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-2xl border border-borderDark bg-cardBg p-10 shadow-xl">
        <h1 className="text-2xl font-bold text-primary">
          Enter your email to continue
        </h1>

        <div className="space-y-1">
          <Input
            placeholder="your@email.com"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onBlur={handleBlur}
          />

          {touched && error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          {loading ? "Validating..." : "Continue"}
        </Button>
      </div>
    </div>
  );
};