"use client";
import Link from "next/link";
import Logo from "./Logo";
import { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  badge?: string | number;
};

export default function Sidebar({
  items,
  active,
  promo,
}: {
  items: NavItem[];
  active: string;
  promo?: { title: string; sub: string; cta: string };
}) {
  return (
    <aside className="w-[220px] shrink-0 bg-[#0d0d0d] border-r border-line min-h-screen flex flex-col">
      <Logo />
      <nav className="px-3 flex-1 overflow-y-auto">
        {items.map((it) => {
          const Icon = it.icon;
          const isActive = it.label === active;
          return (
            <Link
              key={it.label}
              href={it.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] mb-0.5 transition ${
                isActive
                  ? "bg-brand text-white font-medium"
                  : "text-[#a3a3a3] hover:bg-panel hover:text-white"
              }`}
            >
              <Icon size={16} />
              <span className="flex-1">{it.label}</span>
              {it.badge !== undefined && (
                <span className="bg-brand/20 text-brand text-[10px] px-1.5 py-0.5 rounded">
                  {it.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      {promo && (
        <div className="m-3 mb-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-[#2a0707] to-[#0a0a0a] border border-[#3a0a0a] p-4">
          <div className="text-[18px] font-black italic leading-tight text-white">
            {promo.title}
          </div>
          <div className="text-[18px] font-black italic leading-tight text-brand mb-2">
            {promo.sub}
          </div>
          <button className="text-[11px] bg-white/10 hover:bg-white/15 text-white px-2.5 py-1 rounded">
            {promo.cta}
          </button>
        </div>
      )}
    </aside>
  );
}
