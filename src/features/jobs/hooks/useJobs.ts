import { useEffect, useState } from "react";
import { getJobs } from "../api/jobs.api";
import type { Job } from "../../../shared/constants/types";

export const useJobs = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getJobs()
            .then((data) => {
                setJobs(data);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { jobs, loading, error };
};