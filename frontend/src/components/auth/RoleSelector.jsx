import { ShieldCheck, UserRound, UsersRound } from "lucide-react";

const roles = [
  {
    id: "beekeeper",
    title: "Beekeeper",
    description:
      "Register and manage your honey batches and traceability records.",
    icon: UserRound,
  },
  {
    id: "admin",
    title: "Administrator",
    description:
      "Verify batches, manage records and oversee the HoneyChain platform.",
    icon: ShieldCheck,
  },
  {
    id: "consumer",
    title: "Consumer",
    description:
      "Verify honey authenticity and trace its journey from hive to home.",
    icon: UsersRound,
  },
];

const RoleSelector = ({ selectedRole, onSelect }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {roles.map((role) => {
        const Icon = role.icon;
        const selected = selectedRole === role.id;

        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onSelect(role.id)}
            className={`group rounded-2xl border p-5 text-left transition ${
              selected
                ? "border-amber-500 bg-amber-50 ring-2 ring-amber-200"
                : "border-gray-200 bg-white hover:border-amber-300 hover:shadow-md"
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                selected
                  ? "bg-amber-500 text-white"
                  : "bg-amber-100 text-amber-600"
              }`}
            >
              <Icon size={24} />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              {role.title}
            </h3>

            <p className="mt-2 text-sm leading-5 text-gray-500">
              {role.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium">
              <span
                className={`h-2 w-2 rounded-full ${
                  selected ? "bg-amber-500" : "bg-gray-300"
                }`}
              />

              {selected ? "Selected" : "Select role"}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default RoleSelector;