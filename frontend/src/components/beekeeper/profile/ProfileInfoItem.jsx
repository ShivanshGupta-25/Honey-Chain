const ProfileInfoItem = ({
  icon: Icon,
  label,
  value,
  iconClassName = "text-slate-500",
}) => {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 transition hover:border-slate-200 hover:shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
        <Icon
          size={18}
          className={iconClassName}
        />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-semibold text-slate-700">
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
};

export default ProfileInfoItem;
