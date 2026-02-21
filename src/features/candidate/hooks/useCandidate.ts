import axios from "axios";
import { getCandidateByEmail } from "../api/candidate.api";
import { useState } from "react";
import type { Candidate } from "../../../shared/constants/types";
import { toast } from "react-toastify";

export const useCandidate = () => {
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [loading, setLoading] = useState(false);

    const login = async (email: string) => {
        setLoading(true);

        try {
            const data = await getCandidateByEmail(email);
            setCandidate(data);
            return true;
        } catch (error: unknown) {
            let message = "Something went wrong";

            if (axios.isAxiosError(error)) {
                message =
                    error.response?.data?.error ??
                    message;
            }

            toast.error(message);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { candidate, login, loading };
};