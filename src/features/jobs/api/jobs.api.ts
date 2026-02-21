import { api } from "../../../shared/api/axios";
import type { Job } from "../../../shared/constants/types";

export const getJobs = async (): Promise<Job[]> => {
  const { data } = await api.get<Job[]>("/api/jobs/get-list");
  return data;
};

export const applyToJob = async (payload: {
  uuid: string;
  jobId: string;
  candidateId: string;
  applicationId: string;
  repoUrl: string;
}) => {
  const { data } = await api.post(
    "/api/candidate/apply-to-job",
    payload
  );
  return data;
};