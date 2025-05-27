
import LogosList from '@/components/my-work/logos-list'
import { Suspense } from 'react';

export default async function MyWorkPage() {
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

        <Suspense fallback="loading...">
          <LogosList />
        </Suspense>
      </div>
    </div>
  );
}
