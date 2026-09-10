import {
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const batches = [
  {
    id: "HC-026",
    type: "Wildflower",
    quantity: "24 kg",
    status: "Harvested",
  },
  {
    id: "HC-025",
    type: "Mustard",
    quantity: "18 kg",
    status: "Processing",
  },
  {
    id: "HC-024",
    type: "Acacia",
    quantity: "31 kg",
    status: "Packaged",
  },
];

const RecentBatches = () => {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

        <div>
          <h2 className="text-base font-bold text-slate-900">
            Recent Honey Batches
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Latest harvest and traceability records
          </p>
        </div>

        <Link
          to="/beekeeper/batches"
          className="flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-700"
        >
          View all
          <ChevronRight size={14} />
        </Link>

      </div>


      <div className="overflow-x-auto">

        <table className="w-full min-w-[680px]">

          <thead>
            <tr className="border-b border-slate-100">

              <TableHead>Batch</TableHead>
              <TableHead>Honey Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Traceability</TableHead>
              <TableHead />

            </tr>
          </thead>

          <tbody>

            {batches.map((batch) => (
              <BatchRow
                key={batch.id}
                {...batch}
              />
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
};


const BatchRow = ({
  id,
  type,
  quantity,
  status,
}) => {
  return (
    <tr className="border-b border-slate-50 last:border-0">

      <td className="px-6 py-4">
        <Link
          to={`/beekeeper/batches/${id}`}
          className="text-xs font-bold text-slate-800 hover:text-amber-600"
        >
          {id}
        </Link>
      </td>

      <td className="px-6 py-4 text-xs text-slate-600">
        {type}
      </td>

      <td className="px-6 py-4 text-xs font-medium text-slate-700">
        {quantity}
      </td>

      <td className="px-6 py-4">
        <StatusBadge status={status} />
      </td>

      <td className="px-6 py-4">

        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          QR Active

        </span>

      </td>

      <td className="px-6 py-4 text-right">

        <Link
          to={`/beekeeper/batches/${id}`}
          className="text-slate-400 hover:text-slate-700"
        >
          <ExternalLink size={14} />
        </Link>

      </td>

    </tr>
  );
};


const StatusBadge = ({ status }) => {

  const styles = {
    Harvested: "bg-blue-50 text-blue-600",
    Processing: "bg-amber-50 text-amber-600",
    Packaged: "bg-emerald-50 text-emerald-600",
  };

  return (
    <span
      className={`
        rounded-full
        px-2.5
        py-1
        text-[10px]
        font-semibold
        ${styles[status] || "bg-slate-50 text-slate-600"}
      `}
    >
      {status}
    </span>
  );
};


const TableHead = ({ children }) => {
  return (
    <th className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-slate-400">
      {children}
    </th>
  );
};

export default RecentBatches;