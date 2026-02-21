interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => (
  <input
    className="w-full rounded-xl border border-borderDark bg-cardBg p-3 outline-none focus:border-primary"
    placeholder="Search job..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);