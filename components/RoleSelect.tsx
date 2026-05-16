"use client";
import { Shield, Building2, Dumbbell, User } from "lucide-react";

export type Role = "admin" | "manager" | "trainer" | "member";

const roles: { id: Role; label: string; icon: typeof Shield }[] = [
  { id: "admin", label: "Admin", icon: Shield },
  { id: "manager", label: "Manager", icon: Building2 },
  { id: "trainer", label: "Trainer", icon: Dumbbell },
  { id: "member", label: "Member", icon: User },
];

export default function RoleSelect({
  value,
  onChange,
}: {
  value: Role;
  onChange: (r: Role) => void;
}) {
  return (
    <div>
      <label className="block text-[12px] text-[#bfbfbf] mb-2">Login as</label>
      <div className="grid grid-cols-4 gap-2">
        {roles.map((r) => {
          const Icon = r.icon;
          const active = value === r.id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => onChange(r.id)}
              className={`flex flex-col items-center gap-1 py-2.5 rounded-lg border text-[11px] transition ${
                active
                  ? "border-brand bg-brand/15 text-white"
                  : "border-line2 bg-panel2 text-[#a3a3a3] hover:border-brand/40 hover:text-white"
              }`}
            >
              <Icon size={16} className={active ? "text-brand" : ""} />
              {r.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
