import fetchdata from "../../lib/fetchdata";

import UserLogoCard from "@/components/my-work/user-logo-card";
import EmptyState from "@/components/my-work/empty-state";

export default async function LogosList() {
  const logos = await fetchdata();
  return (
    <div className="mt-10">
      {logos.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((logo) => (
            <UserLogoCard
              key={logo._id}
              imageUrl={logo.imageUrl}
              createdAt={logo.createdAt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
