"use client";
import {
  LayoutDashboard, CheckSquare, Users, UserCog, Dumbbell, Calendar,
  CreditCard, FileBarChart, Settings, Crown, Activity, DollarSign,
  Zap, Bell, AlertCircle, AlertTriangle, CheckCircle2, MoreHorizontal,
  Clock, ShoppingBag,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import { Card } from "@/components/Card";
import Avatar from "@/components/Avatar";
import {
  AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";

const nav = [
  { href: "#", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "Check-in", icon: CheckSquare },
  { href: "#", label: "Members", icon: Users },
  { href: "#", label: "Bookings", icon: ShoppingBag },
  { href: "#", label: "Classes", icon: Dumbbell },
  { href: "#", label: "Personal Training", icon: Dumbbell },
  { href: "#", label: "Staff", icon: UserCog },
  { href: "#", label: "Schedule", icon: Calendar },
  { href: "#", label: "Payments", icon: CreditCard },
  { href: "#", label: "Billing Alerts", icon: AlertCircle, badge: 5 },
  { href: "#", label: "Reports", icon: FileBarChart },
  { href: "#", label: "Settings", icon: Settings },
];

const checkInsTrend = Array.from({ length: 24 }, (_, h) => ({
  h: `${h}:00`,
  v: Math.max(2, Math.floor(Math.sin((h - 6) / 3) * 12 + 8 + Math.random() * 4)),
}));

const occupancy = [
  { name: "Super Body Strength", trainer: "Sarah Johnson", time: "7:00 AM", pct: 92, color: "#ef2b2b" },
  { name: "Yoga Flow", trainer: "Emma Davis", time: "8:30 AM", pct: 78, color: "#22c55e" },
  { name: "HIIT Cardio", trainer: "Michael Brown", time: "10:00 AM", pct: 85, color: "#f59e0b" },
  { name: "Spin Class", trainer: "James Wilson", time: "12:00 PM", pct: 65, color: "#3b82f6" },
  { name: "Mobility & Recovery", trainer: "Olivia Smith", time: "2:00 PM", pct: 45, color: "#a855f7" },
];

const pt = [
  { client: "Alex Thompson", trainer: "Sarah Johnson", time: "9:00 AM" },
  { client: "Jamie Lee", trainer: "Michael Brown", time: "10:30 AM" },
  { client: "Chris Park", trainer: "Emma Davis", time: "12:00 PM" },
  { client: "Taylor Reed", trainer: "James Wilson", time: "3:30 PM" },
];

const schedule = [
  { name: "Sarah Johnson", role: "Senior Trainer", time: "6:00 AM - 2:00 PM", status: "On Shift" },
  { name: "Michael Brown", role: "Trainer", time: "8:00 AM - 4:00 PM", status: "On Shift" },
  { name: "Emma Davis", role: "Front Desk", time: "9:00 AM - 5:00 PM", status: "Break" },
  { name: "James Wilson", role: "Nutritionist", time: "10:00 AM - 6:00 PM", status: "On Shift" },
];

const billing = [
  { icon: AlertCircle, tone: "red", title: "5 Failed Payments", sub: "Action required" },
  { icon: AlertTriangle, tone: "amber", title: "12 Memberships Expiring", sub: "Within 7 days" },
  { icon: CheckCircle2, tone: "green", title: "8 Outstanding Invoices", sub: "Past 30 days" },
];

export default function ManagerPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        items={nav}
        active="Dashboard"
        promo={{ title: "CHOSEN", sub: "NOT GIVEN", cta: "Order Merch" }}
      />
      <main className="flex-1 min-w-0">
        <Header
          date="May 12, 2026"
          role="Manager"
          user={{ name: "Manager", sub: "Downtown" }}
          cta={{ label: "Quick Action", icon: <Zap size={13} /> }}
        />
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-[22px] font-bold text-white">
              Good morning, Manager! <span>👋</span>
            </h1>
            <p className="text-[12px] text-muted mt-0.5">
              Here&apos;s what happening at <span className="text-brand">Chosen Gym</span> today.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-5">
            <StatCard icon={Users} label="ACTIVE MEMBERS" value="186" delta="+12 today" />
            <StatCard icon={Activity} label="ARRIVED MEMBERS" value="1,248" delta="+8.4%" />
            <StatCard icon={Dumbbell} label="CLASSES TODAY" value="18" delta="6 ongoing" />
            <StatCard icon={UserCog} label="PT SESSIONS" value="24" delta="+5%" />
            <StatCard icon={DollarSign} label="REVENUE TODAY" value="£4,620" delta="+12.5%" />
          </div>

          {/* Today check-ins + Class occupancy + PT today */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card title="Today's Check-ins" action="View All">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-[110px] h-[110px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={[{ v: 186 }, { v: 14 }]} dataKey="v" innerRadius={38} outerRadius={52} startAngle={90} endAngle={-270}>
                        <Cell fill="#ef2b2b" />
                        <Cell fill="#1f1f1f" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="text-[18px] font-bold text-white">186</div>
                      <div className="text-[9px] text-muted">Today</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-[11px] space-y-1.5">
                  <div className="flex justify-between"><span className="text-muted">Members</span><span className="text-white font-medium">142 <span className="text-emerald-400 ml-1">+8%</span></span></div>
                  <div className="flex justify-between"><span className="text-muted">Guests</span><span className="text-white font-medium">28 <span className="text-emerald-400 ml-1">+3%</span></span></div>
                  <div className="flex justify-between"><span className="text-muted">Trials</span><span className="text-white font-medium">16</span></div>
                </div>
              </div>
              <div className="h-[80px] mt-3">
                <ResponsiveContainer>
                  <AreaChart data={checkInsTrend}>
                    <defs>
                      <linearGradient id="ci" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef2b2b" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#ef2b2b" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="#ef2b2b" strokeWidth={2} fill="url(#ci)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between text-[9px] text-muted">
                <span>6AM</span><span>12PM</span><span>6PM</span>
              </div>
            </Card>

            <Card title="Class Occupancy" action="View All">
              <div className="space-y-3">
                {occupancy.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <div>
                        <div className="text-white">{c.name}</div>
                        <div className="text-[9px] text-muted">{c.trainer} • {c.time}</div>
                      </div>
                      <span className="text-white font-semibold">{c.pct}%</span>
                    </div>
                    <div className="h-1 bg-panel2 rounded-full">
                      <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-ghost text-[11px]">View All Schedule</button>
            </Card>

            <Card title="PT Sessions Today" action="View All">
              <div className="space-y-3">
                {pt.map((p) => (
                  <div key={p.client} className="flex items-center gap-3">
                    <Avatar name={p.client} size={32} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white truncate">{p.client}</div>
                      <div className="text-[10px] text-muted">with {p.trainer}</div>
                    </div>
                    <div className="text-[10px] text-brand bg-brand/10 px-2 py-1 rounded">{p.time}</div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-ghost text-[11px]">View All PT Sessions</button>
            </Card>
          </div>

          {/* Staff schedule + Billing + Summary */}
          <div className="grid grid-cols-3 gap-4">
            <Card title="Staff Schedule Today" action="View All">
              <div className="space-y-3">
                {schedule.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <Avatar name={s.name} size={32} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white">{s.name}</div>
                      <div className="text-[10px] text-muted flex items-center gap-1">
                        <Clock size={9} />{s.time}
                      </div>
                    </div>
                    <span className={`chip ${s.status === "Break" ? "bg-amber-500/15 text-amber-400" : "bg-emerald-500/15 text-emerald-400"}`}>
                      {s.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-ghost text-[11px]">View Full Schedule</button>
            </Card>

            <Card title="Billing Alerts" action="View All">
              <div className="space-y-2">
                {billing.map((b) => {
                  const Icon = b.icon;
                  const tone = {
                    red: "bg-rose-500/15 text-rose-400",
                    amber: "bg-amber-500/15 text-amber-400",
                    green: "bg-emerald-500/15 text-emerald-400",
                  }[b.tone as "red" | "amber" | "green"];
                  return (
                    <div key={b.title} className="flex items-center gap-3 p-2.5 rounded-lg bg-panel2 border border-line2">
                      <div className={`w-9 h-9 rounded-lg grid place-items-center ${tone}`}>
                        <Icon size={15} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[12px] text-white">{b.title}</div>
                        <div className="text-[10px] text-muted">{b.sub}</div>
                      </div>
                      <button className="text-muted hover:text-white">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card title="Today's Summary">
              <div className="space-y-3 text-[12px]">
                {[
                  ["Total Check-ins", "186"],
                  ["Classes Completed", "12"],
                  ["New Members", "8"],
                  ["Cancellations", "3"],
                  ["Revenue", "£4,620"],
                  ["Pending Payments", "£420"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-line2 pb-2 last:border-0">
                    <span className="text-muted">{k}</span>
                    <span className="text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
