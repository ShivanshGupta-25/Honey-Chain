const SettingsSection = ({
  title,
  description,
  children,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5 sm:px-7">
        <h2 className="text-sm font-bold text-slate-800">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        )}
      </div>

      <div className="p-6 sm:p-7">
        {children}
      </div>
    </section>
  );
};

export default SettingsSection;