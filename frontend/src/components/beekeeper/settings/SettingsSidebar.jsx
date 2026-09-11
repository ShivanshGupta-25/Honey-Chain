import {
  Bell,
  LockKeyhole,
  Settings2,
  Shield,
  TriangleAlert,
} from "lucide-react";

const SettingsSidebar = ({
  activeSection,
  onSectionChange,
}) => {
  const items = [
    {
      id: "general",
      label: "General",
      description: "Application preferences",
      icon: Settings2,
    },
    {
      id: "notifications",
      label: "Notifications",
      description: "Alert preferences",
      icon: Bell,
    },
    {
      id: "security",
      label: "Security",
      description: "Password & account",
      icon: LockKeyhole,
    },
    {
      id: "privacy",
      label: "Privacy",
      description: "Profile visibility",
      icon: Shield,
    },
    {
      id: "danger",
      label: "Danger Zone",
      description: "Account actions",
      icon: TriangleAlert,
    },
  ];

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="px-3 py-3">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Settings
        </p>
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active =
            activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                onSectionChange(item.id)
              }
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                active
                  ? "bg-amber-50 text-amber-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  active
                    ? "bg-white text-amber-600"
                    : "bg-slate-50 text-slate-500"
                }`}
              >
                <Icon size={17} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold">
                  {item.label}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-slate-400">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default SettingsSidebar;