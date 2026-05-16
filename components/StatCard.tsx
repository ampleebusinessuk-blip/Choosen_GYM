import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({
  icon: Icon,
  label,
  value,
  delta,
  trend = "up",
  tone = "brand",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down";
  tone?: "brand" | "green" | "amber" | "blue";
}) {
  const toneBg = {
    brand: "bg-brand/15 text-brand",
    green: "bg-emerald-500/15 text-emerald-400",
    amber: "bg-amber-500/15 text-amber-400",
    blue: "bg-sky-500/15 text-sky-400",
  }[tone];

  return (
    <div className="stat-card p-4">
      <div className="flex items-center justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg grid place-items-center ${toneBg}`}>
          <Icon size={17} />
        </div>
        {delta && (
          <span
            className={`chip ${
              trend === "up"
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-rose-500/15 text-rose-400"
            }`}
          >
            {trend === "up" ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
            {delta}
          </span>
        )}
      </div>
      <div className="text-[11px] text-muted uppercase tracking-wide mb-1">{label}</div>
      <div className="text-[22px] font-bold text-white leading-none">{value}</div>
    </div>
  );
}
