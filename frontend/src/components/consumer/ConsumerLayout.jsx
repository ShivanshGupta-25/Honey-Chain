
import { useState } from "react";
import ConsumerSidebar from "./consumerSidebar";
import ConsumerHeader from "./consumerHeader";
import DashboardStats from "./DashboardStats";

const ConsumerLayout = ({ children, title, subtitle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const stats = {
    verifiedBatches: 0,
    totalScans: 0,
    trustedSources: 0,
    recentVerification: "N/A",
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <ConsumerSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <ConsumerHeader
          onMenuClick={() => setIsSidebarOpen(true)}
          title={title}
          subtitle={subtitle}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="space-y-6">
                {/* Welcome Section */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    Your Honey Journey
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                    Discover the origin and authenticity of your honey.
                    </p>
                </div>

                {/* Statistics */}
                <DashboardStats stats={stats} />

                {/* Future Dashboard Sections */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-800">
                        Recent Verifications
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Your recently verified honey batches will appear here.
                    </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="text-lg font-semibold text-slate-800">
                        Explore Honey
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Verify a honey batch to explore its journey from hive to jar.
                    </p>
                    </div>
                </div>
                </div>
        </main>
      </div>
    </div>
  );
};

export default ConsumerLayout;