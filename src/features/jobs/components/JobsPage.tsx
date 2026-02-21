import { useState, useMemo} from "react";
import { useJobs } from "../hooks/useJobs";
import { JobCard } from "./JobCard";
import type { Candidate } from "../../../shared/constants/types";
import { Pagination } from "./Pagination";
import { SearchBar } from "./SearchBar";
import { Spinner } from "../../../shared/components/Spinner";

interface Props {
  candidate: Candidate;
}

export const JobsPage = ({ candidate }: Props) => {
  const { jobs, loading, error } = useJobs();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const jobsPerPage = 6;

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [jobs, search]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const paginatedJobs = filteredJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  if (loading) return <div className="flex justify-center items-center h-[90vh]"><Spinner /></div>;
  if (error) return <div className="p-10 text-red-400">{error}</div>;

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-10">
      <h3 className="text-4xl font-bold text-primary text-center">Available Jobs</h3>
      <p className="text-center text-primary font-medium">Browse and apply to available job opportunities</p>
      <SearchBar value={search} onChange={handleSearchChange} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {paginatedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            candidate={candidate}
          />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </div>
  );
};