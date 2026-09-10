import {
  Activity,
  Edit3,
  MapPin,
  MoreVertical,
  Trash2,
  Crown,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const statusConfig = {
  active: {
    label: "Active",
    className: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-500",
  },
  inactive: {
    label: "Inactive",
    className: "bg-slate-100 text-slate-600",
    dot: "bg-slate-400",
  },
  maintenance: {
    label: "Maintenance",
    className: "bg-amber-50 text-amber-700",
    dot: "bg-amber-500",
  },
};

const strengthConfig = {
  weak: "text-red-600",
  moderate: "text-amber-600",
  strong: "text-emerald-600",
};

const HiveCard = ({
  hive,
  onView,
  onEdit,
  onDelete,
}) => {
  const status =
    statusConfig[hive.status] || statusConfig.active;

  const navigate = useNavigate();

  const strengthClass =
    strengthConfig[hive.colonyStrength] ||
    "text-slate-600";

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Header */}
      <div className="mb-5 flex items-start justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <Activity
                size={20}
                className="text-amber-600"
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {hive.hiveId}
              </h3>

              <p className="text-xs text-slate-500">
                {hive.hiveType}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${status.dot}`}
          />

          {status.label}
        </div>
      </div>

      {/* Location */}
      <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
        <MapPin size={16} className="text-slate-400" />

        <span className="truncate">
          {hive.location}
        </span>
      </div>

      {/* Information */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <p className="mb-1 text-xs text-slate-500">
            Colony Strength
          </p>

          <p
            className={`text-sm font-semibold capitalize ${strengthClass}`}
          >
            {hive.colonyStrength}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-3">
          <p className="mb-1 text-xs text-slate-500">
            Queen
          </p>

          <div className="flex items-center gap-1.5">
            <Crown
              size={14}
              className={
                hive.queenPresent
                  ? "text-amber-500"
                  : "text-slate-400"
              }
            />

            <p className="text-sm font-semibold text-slate-700">
              {hive.queenPresent
                ? "Present"
                : "Not Present"}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
        <button
          onClick={() =>
            navigate(`/beekeeper/hives/${hive._id}`)
        }
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          <Eye size={15} />
          View
        </button>

        <button
          onClick={() => onEdit(hive)}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
          title="Edit hive"
        >
          <Edit3 size={16} />
        </button>

        <button
          onClick={() => onDelete(hive)}
          className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
          title="Delete hive"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default HiveCard;