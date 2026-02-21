import type { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="rounded-xl bg-primary px-4 py-2 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
    {...props}
  >
    {children}
  </button>
);