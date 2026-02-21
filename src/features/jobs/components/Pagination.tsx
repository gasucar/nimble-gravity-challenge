interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onChange }: Props) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            aria-current={page === currentPage ? "page" : undefined}
            type="button"
            onClick={() => onChange(page)}
            className={`rounded-lg px-4 py-2 ${
              page === currentPage
                ? "bg-primary text-black"
                : "bg-cardBg border border-borderDark"
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};