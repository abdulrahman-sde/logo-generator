
import UserLogoCard from "@/components/my-work/user-logo-card";
import EmptyState from "@/components/my-work/empty-state";
import { sampleUserLogos } from "@/constants/constants";

export default function MyWorkPage() {
  // Fetch user logos from the server or use a mock data

  return (
    <div className="container px-4 py-12 mx-auto sm:px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          My Work
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Manage and download your generated logos.
        </p>

        <div className="mt-10">
          {sampleUserLogos.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sampleUserLogos.map((logo) => (
                <UserLogoCard key={logo.id} logo={logo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
