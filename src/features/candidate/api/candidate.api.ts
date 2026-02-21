import { api } from "../../../shared/api/axios";
import type { Candidate } from "../../../shared/constants/types";

export const getCandidateByEmail = async (
  email: string
): Promise<Candidate> => {
  const { data } = await api.get<Candidate>(
    `/api/candidate/get-by-email?email=${email}`
  );
  return data;
};