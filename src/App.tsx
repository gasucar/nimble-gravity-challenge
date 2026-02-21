import { EmailForm } from "./features/candidate/components/EmailForm";
import { useCandidate } from "./features/candidate/hooks/useCandidate";
import { JobsPage } from "./features/jobs/components/JobsPage";

function App() {
  const { candidate, login, loading } = useCandidate();

  if (!candidate) {
    return (
      <EmailForm
        onSuccess={login}
        loading={loading}
      />
    );
  }

  return <JobsPage candidate={candidate} />;
}

export default App;