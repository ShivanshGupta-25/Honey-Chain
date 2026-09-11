const ProfileSection = ({
  title,
  description,
  action,
  children,
}) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <h2 className="text-sm font-bold text-slate-800">
            {title}
          </h2>

          {description && (
            <p className="mt-1 text-xs text-slate-400">
              {description}
            </p>
          )}
        </div>

        {action}
      </div>

      <div className="p-6 sm:p-7">
        {children}
      </div>
    </section>
  );
};

export default ProfileSection;
