import { ChevronRight } from "lucide-react";

export function Card({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`card p-5 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-[14px] font-semibold text-white">{title}</h3>}
          {action && (
            <button className="text-[11px] text-muted hover:text-white flex items-center gap-0.5">
              {action} <ChevronRight size={12} />
            </button>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
