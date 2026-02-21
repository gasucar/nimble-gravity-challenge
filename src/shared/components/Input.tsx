import type { InputHTMLAttributes } from "react";

export const Input = ({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className="w-full rounded-xl border border-borderDark bg-darkBg px-4 py-2 outline-none focus:border-primary"
    {...props}
  />
);