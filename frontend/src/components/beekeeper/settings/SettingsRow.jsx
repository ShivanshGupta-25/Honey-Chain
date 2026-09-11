const SettingsRow = ({
  icon: Icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-100 py-5 first:pt-0 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
            <Icon size={17} />
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-slate-700">
            {title}
          </p>

          {description && (
            <p className="mt-1 max-w-lg text-xs leading-5 text-slate-400">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="shrink-0">
        {children}
      </div>
    </div>
  );
};

export default SettingsRow;