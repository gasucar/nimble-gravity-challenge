import { useState } from "react";
import { applyToJob } from "../api/jobs.api";
import type { Candidate, Job } from "../../../shared/constants/types";
import { Card } from "../../../shared/components/Card";
import { Input } from "../../../shared/components/Input";
import { Button } from "../../../shared/components/Button";
import { Spinner } from "../../../shared/components/Spinner";
import { toast } from "react-toastify";
import { extractAxiosError } from "../../../shared/utils/extractAxiosError";


interface Props {
  job: Job;
  candidate: Candidate;
}

export const JobCard = ({ job, candidate }: Props) => {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validateRepoUrl = (value: string) => {
    if (!value) return "Repository URL is required";

    const isValidGithub =
      /^https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/?$/.test(value);

    if (!isValidGithub)
      return "Please enter a valid GitHub repository URL";

    return null;
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateRepoUrl(repoUrl));
  };

  const handleApply = async () => {
    const validationError = validateRepoUrl(repoUrl);
    setError(validationError);
    setTouched(true);

    if (validationError) return;

    try {
      setLoading(true);

      await applyToJob({
        uuid: candidate.uuid,
        jobId: job.id,
        candidateId: candidate.candidateId,
        repoUrl,
      });

      toast.success("Application submitted successfully 🚀");
      setRepoUrl("");
      setTouched(false);
      setError(null);

    } catch (error: unknown) {
      const message = extractAxiosError(error);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    loading || !repoUrl || !!validateRepoUrl(repoUrl);

  return (
    <Card>
      <h2 className="mb-4 text-xl font-bold text-primary">
        {job.title}
      </h2>

      <div className="space-y-4">
        <div className="space-y-1">
          <Input
            placeholder="https://github.com/your-username/repo"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            onBlur={handleBlur}
          />

          {touched && error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}
        </div>

        <Button
          disabled={isDisabled}
          onClick={handleApply}
        >
          {loading ? <Spinner /> : "Submit Application"}
        </Button>
      </div>
    </Card>
  );
};