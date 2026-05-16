"use client";
import {
  LayoutDashboard, Building2, Users, UserCog, Dumbbell, ShoppingBag, CreditCard,
  TrendingUp, Bell, Settings, BarChart3, Zap, Crown, DollarSign, Activity,
  AlertCircle, CheckCircle2, MoreHorizontal, ArrowUpRight, Lightbulb,
  Sparkles, AlertTriangle, Plus, FileBarChart, FilePlus,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import { Card } from "@/components/Card";
import Avatar from "@/components/Avatar";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";

const nav = [
  { href: "#", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "Branches", icon: Building2 },
  { href: "#", label: "Members", icon: Users },
  { href: "#", label: "Trainers", icon: UserCog },
  { href: "#", label: "Staff", icon: Users },
  { href: "#", label: "Classes", icon: Dumbbell },
  { href: "#", label: "Personal Training", icon: Dumbbell },
  { href: "#", label: "Memberships", icon: Crown },
  { href: "#", label: "Bookings", icon: ShoppingBag },
  { href: "#", label: "Reports", icon: FileBarChart },
  { href: "#", label: "Settings", icon: Settings },
];

const revenueData = [
  { m: "Jan", a: 180000, b: 210000 },
  { m: "Feb", a: 200000, b: 230000 },
  { m: "Mar", a: 220000, b: 250000 },
  { m: "Apr", a: 240000, b: 270000 },
  { m: "May", a: 260000, b: 286945 },
  { m: "Jun", a: 250000, b: 285000 },
];

const donutData = [
  { name: "Downtown", value: 95000, color: "#ef2b2b" },
  { name: "Westside", value: 75000, color: "#f59e0b" },
  { name: "Northside", value: 60000, color: "#22c55e" },
  { name: "Southside", value: 45000, color: "#3b82f6" },
  { name: "Eastside", value: 12000, color: "#a855f7" },
];

const memberGrowthData = Array.from({ length: 12 }, (_, i) => ({
  m: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][i],
  v: 800 + Math.floor(Math.sin(i / 1.5) * 200) + i * 80,
}));

const branches = [
  { name: "Chosen Gym — Downtown", members: 3245, revenue: "£62,450", trend: "+12%" },
  { name: "Chosen Gym — Westside", members: 2890, revenue: "£54,320", trend: "+8%" },
  { name: "Chosen Gym — Northside", members: 2456, revenue: "£48,790", trend: "+15%" },
  { name: "Chosen Gym — Southside", members: 1987, revenue: "£38,250", trend: "+5%" },
  { name: "Chosen Gym — Eastside", members: 1645, revenue: "£32,180", trend: "+9%" },
];

const staff = [
  { name: "Sarah Johnson", role: "Senior Trainer", score: 98, color: "#ef2b2b" },
  { name: "Michael Brown", role: "Trainer", score: 94, color: "#22c55e" },
  { name: "Emma Davis", role: "Manager", score: 92, color: "#3b82f6" },
  { name: "James Wilson", role: "Nutritionist", score: 89, color: "#a855f7" },
  { name: "Olivia Smith", role: "Trainer", score: 86, color: "#f59e0b" },
];

const insights = [
  { type: "opp", icon: Lightbulb, title: "Growth Opportunity", text: "Downtown branch shows 15% growth — consider expanding class capacity" },
  { type: "warn", icon: AlertTriangle, title: "Member Churn Risk", text: "23 members showing low activity. Send re-engagement campaign" },
  { type: "ok", icon: Sparkles, title: "Top Performer", text: "Sarah Johnson hit 98 satisfaction score this month" },
];

const plans = [
  { name: "Premium Membership", members: 4520, pct: 62 },
  { name: "Standard Membership", members: 2890, pct: 42 },
  { name: "Basic Membership", members: 1456, pct: 21 },
  { name: "Day Pass", members: 845, pct: 14 },
];

const alerts = [
  { icon: AlertCircle, tone: "red", title: "5 Failed Payments", sub: "Action required" },
  { icon: AlertTriangle, tone: "amber", title: "12 Memberships Expiring", sub: "Within 7 days" },
  { icon: CheckCircle2, tone: "green", title: "Daily Backup Complete", sub: "All systems healthy" },
  { icon: Bell, tone: "blue", title: "Staff Leave Pending", sub: "3 approval requests" },
];

export default function AdminPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        items={nav}
        active="Dashboard"
        promo={{ title: "CHOSEN", sub: "NOT GIVEN", cta: "Order Merch" }}
      />
      <main className="flex-1 min-w-0">
        <Header
          date="May 12, 2026 — May 18, 2026"
          role="Super Admin"
          user={{ name: "Super Admin", sub: "All Branches" }}
        />
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-[22px] font-bold text-white">
              Welcome back, Super Admin! <span className="inline-block">👋</span>
            </h1>
            <p className="text-[12px] text-muted mt-0.5">
              Here&apos;s the overview of your gym empire today.
            </p>
          </div>

          {/* Top 6 stats */}
          <div className="grid grid-cols-6 gap-4 mb-5">
            <StatCard icon={Building2} label="TOTAL BRANCHES" value="12" delta="+2 this Q" tone="brand" />
            <StatCard icon={Users} label="TOTAL MEMBERS" value="18,765" delta="+8.4%" tone="brand" />
            <StatCard icon={DollarSign} label="MONTHLY REVENUE" value="£286,540" delta="+12.5%" tone="brand" />
            <StatCard icon={UserCog} label="ACTIVE STAFF" value="14,234" delta="+3.2%" tone="brand" />
            <StatCard icon={Dumbbell} label="CLASSES TODAY" value="342" delta="+5%" tone="brand" />
            <StatCard icon={Activity} label="PT SESSIONS" value="186" delta="+18%" tone="brand" />
          </div>

          {/* Revenue + Donut */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card title="Revenue Overview" action="View Report" className="col-span-2">
              <div className="flex items-end gap-6 mb-4">
                <div>
                  <div className="text-[10px] text-muted">CURRENT MONTH</div>
                  <div className="text-[26px] font-bold text-white">£286,540</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted">TARGET</div>
                  <div className="text-[18px] font-semibold text-emerald-400">£23,878 above</div>
                </div>
              </div>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef2b2b" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#ef2b2b" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#1f1f1f" vertical={false} />
                    <XAxis dataKey="m" stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#666" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: "#0a0a0a", border: "1px solid #2a2a2a", borderRadius: 8 }} />
                    <Area type="monotone" dataKey="b" stroke="#ef2b2b" strokeWidth={2} fill="url(#rev)" />
                    <Line type="monotone" dataKey="a" stroke="#666" strokeDasharray="3 3" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="Revenue by Branch" action="View All">
              <div className="relative h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} dataKey="value" innerRadius={50} outerRadius={70} paddingAngle={2}>
                      {donutData.map((d, i) => <Cell key={i} fill={d.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 grid place-items-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-[10px] text-muted">TOTAL</div>
                    <div className="text-[16px] font-bold text-white">£286,540</div>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5 mt-3">
                {donutData.map((d) => (
                  <div key={d.name} className="flex items-center text-[11px]">
                    <span className="w-2 h-2 rounded-full mr-2" style={{ background: d.color }} />
                    <span className="flex-1 text-[#bfbfbf]">{d.name}</span>
                    <span className="text-white font-medium">£{d.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Branch perf + Staff perf + AI Insights */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card title="Branch Performance" action="View All">
              <div className="space-y-3">
                {branches.map((b) => (
                  <div key={b.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand/15 grid place-items-center">
                      <Building2 size={14} className="text-brand" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white truncate">{b.name}</div>
                      <div className="text-[10px] text-muted">{b.members.toLocaleString()} members</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[12px] text-white font-medium">{b.revenue}</div>
                      <div className="text-[10px] text-emerald-400">{b.trend}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Staff Performance" action="View All">
              <div className="space-y-3">
                {staff.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <Avatar name={s.name} tone={s.color} size={32} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white">{s.name}</div>
                      <div className="text-[10px] text-muted">{s.role}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-line2 grid place-items-center text-[11px] font-bold text-white"
                      style={{ borderColor: s.color }}>
                      {s.score}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="AI Insights" action="View All">
              <div className="space-y-3">
                {insights.map((i) => {
                  const Icon = i.icon;
                  const cls = {
                    opp: "bg-amber-500/10 border-amber-500/20 text-amber-400",
                    warn: "bg-rose-500/10 border-rose-500/20 text-rose-400",
                    ok: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
                  }[i.type as "opp" | "warn" | "ok"];
                  return (
                    <div key={i.title} className={`p-3 rounded-lg border ${cls}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={13} />
                        <span className="text-[12px] font-semibold">{i.title}</span>
                      </div>
                      <p className="text-[11px] text-[#bfbfbf] leading-relaxed">{i.text}</p>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Quick actions row */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card title="Quick Actions">
              <div className="grid grid-cols-2 gap-2">
                {["Add Member", "New Consolidated Report", "Schedule Class", "Send Notification"].map((t) => (
                  <button key={t} className="bg-panel2 border border-line2 hover:border-brand/50 text-[11px] text-white px-3 py-2 rounded-lg text-left flex items-center gap-2">
                    <Plus size={12} className="text-brand" />
                    {t}
                  </button>
                ))}
              </div>
            </Card>

            <Card title="Members Growth" action="Last 12 Months" className="col-span-2">
              <div className="flex items-end gap-6 mb-3">
                <div>
                  <div className="text-[10px] text-muted">CURRENT</div>
                  <div className="text-[22px] font-bold text-white">18,765</div>
                </div>
                <div className="flex-1 h-[140px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={memberGrowthData}>
                      <XAxis dataKey="m" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                      <Bar dataKey="v" fill="#ef2b2b" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="relative w-[110px] h-[110px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={[{v: 68},{v: 32}]} dataKey="v" innerRadius={36} outerRadius={50} startAngle={90} endAngle={-270}>
                        <Cell fill="#ef2b2b" />
                        <Cell fill="#1f1f1f" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <div className="text-center">
                      <div className="text-[16px] font-bold text-white">18,765</div>
                      <div className="text-[9px] text-muted">Total</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Top plans + Alerts */}
          <div className="grid grid-cols-2 gap-4">
            <Card title="Top Membership Plans" action="View All">
              <div className="space-y-3">
                {plans.map((p) => (
                  <div key={p.name}>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="text-white">{p.name}</span>
                      <span className="text-muted">{p.members.toLocaleString()} members</span>
                    </div>
                    <div className="h-1.5 bg-panel2 rounded-full overflow-hidden">
                      <div className="h-full bg-brand rounded-full" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Alerts & Notifications" action="View All">
              <div className="space-y-2">
                {alerts.map((a) => {
                  const Icon = a.icon;
                  const tone = {
                    red: "bg-rose-500/15 text-rose-400",
                    amber: "bg-amber-500/15 text-amber-400",
                    green: "bg-emerald-500/15 text-emerald-400",
                    blue: "bg-sky-500/15 text-sky-400",
                  }[a.tone as "red" | "amber" | "green" | "blue"];
                  return (
                    <div key={a.title} className="flex items-center gap-3 p-2.5 rounded-lg bg-panel2 border border-line2">
                      <div className={`w-8 h-8 rounded-lg grid place-items-center ${tone}`}>
                        <Icon size={14} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[12px] text-white">{a.title}</div>
                        <div className="text-[10px] text-muted">{a.sub}</div>
                      </div>
                      <button className="text-muted hover:text-white">
                        <MoreHorizontal size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
