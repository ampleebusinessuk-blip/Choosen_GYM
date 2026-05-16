import { Bell, Calendar, Search, ChevronDown } from "lucide-react";

export default function Header({
  date,
  role,
  user,
  cta,
}: {
  date: string;
  role: string;
  user: { name: string; sub: string; avatar?: string };
  cta?: { label: string; icon?: React.ReactNode };
}) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 border-b border-line">
      <div className="flex-1" />
      <div className="flex items-center gap-2 text-[12px] text-muted bg-panel border border-line2 px-3 py-1.5 rounded-lg">
        <Calendar size={14} />
        {date}
      </div>
      {cta && (
        <button className="btn-red flex items-center gap-1.5">
          {cta.icon}
          {cta.label}
        </button>
      )}
      <button className="w-9 h-9 grid place-items-center bg-panel border border-line2 rounded-lg relative">
        <Bell size={15} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full" />
      </button>
      <div className="flex items-center gap-2 pl-2 pr-1 py-1 bg-panel border border-line2 rounded-lg">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand to-[#7a0a0a] grid place-items-center text-[11px] font-bold">
          {user.name.split(" ").map((p) => p[0]).slice(0,2).join("")}
        </div>
        <div className="text-[12px] leading-tight pr-2">
          <div className="text-white font-medium">{user.name}</div>
          <div className="text-muted text-[10px]">{user.sub}</div>
        </div>
        <ChevronDown size={14} className="text-muted" />
      </div>
    </div>
  );
}
