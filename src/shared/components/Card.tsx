type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => (
  <div className="rounded-2xl border border-borderDark bg-cardBg p-6 shadow-lg transition hover:shadow-sky-500/10">
    {children}
  </div>
);