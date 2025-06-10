
import LoadingSpinner from "./LoadingSpinner";

const AppLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-sm text-muted-foreground mt-4">Loading...</p>
    </div>
  </div>
);

export default AppLoading;
