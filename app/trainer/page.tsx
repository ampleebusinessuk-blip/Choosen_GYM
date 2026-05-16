"use client";
import {
  LayoutDashboard, Users, Dumbbell, Apple, Calendar, BookOpen,
  TrendingUp, MessageSquare, FileBarChart, Settings, Clock,
  ChevronRight, DollarSign, CheckSquare, Activity,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import { Card } from "@/components/Card";
import Avatar from "@/components/Avatar";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const nav = [
  { href: "#", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "Clients", icon: Users },
  { href: "#", label: "Workouts", icon: Dumbbell },
  { href: "#", label: "Nutrition", icon: Apple },
  { href: "#", label: "Bookings", icon: BookOpen },
  { href: "#", label: "Programs", icon: Activity },
  { href: "#", label: "Progress", icon: TrendingUp },
  { href: "#", label: "Calendar", icon: Calendar },
  { href: "#", label: "Payments", icon: DollarSign },
  { href: "#", label: "Messages", icon: MessageSquare },
  { href: "#", label: "Reports", icon: FileBarChart },
  { href: "#", label: "Settings", icon: Settings },
];

const schedule = [
  { time: "8:00 AM", client: "Sarah Johnson", type: "PT Session — Strength Program", status: "Completed", color: "bg-emerald-500/15 text-emerald-400" },
  { time: "9:30 AM", client: "David Wilson", type: "PT Session — HIIT", status: "Progress", color: "bg-amber-500/15 text-amber-400" },
  { time: "11:00 AM", client: "James Carter", type: "Assessment", status: "Upcoming", color: "bg-sky-500/15 text-sky-400" },
  { time: "1:00 PM", client: "Emma Davis", type: "PT Session — Mobility", status: "Upcoming", color: "bg-sky-500/15 text-sky-400" },
  { time: "3:00 PM", client: "Olivia Smith", type: "PT Session — Cardio", status: "Upcoming", color: "bg-sky-500/15 text-sky-400" },
];

const clients = [
  { name: "Sarah Johnson", program: "Strength Program", pct: 92 },
  { name: "David Wilson", program: "HIIT Program", pct: 78 },
  { name: "Emily Carter", program: "Weight Loss", pct: 65 },
  { name: "James Wilson", program: "Cardio Plan", pct: 54 },
  { name: "Michael Brown", program: "Mass Gain", pct: 41 },
];

const improvements = [
  { name: "Strength", pct: "+18%", color: "#ef2b2b" },
  { name: "Endurance", pct: "+14%", color: "#22c55e" },
  { name: "Mobility", pct: "+9%", color: "#f59e0b" },
  { name: "Body Comp", pct: "+12%", color: "#3b82f6" },
];

const programs = [
  { name: "Full Body Strength", clients: 12, days: "4 days/wk" },
  { name: "HIIT Performance", clients: 8, days: "3 days/wk" },
  { name: "Fat Loss", clients: 6, days: "5 days/wk" },
  { name: "Mass Gain", clients: 4, days: "5 days/wk" },
];

const nutrition = [
  { name: "High Protein Cut", clients: 10 },
  { name: "Lean Bulk Plan", clients: 7 },
  { name: "Vegan Performance", clients: 4 },
  { name: "Keto Plan", clients: 3 },
];

const upcoming = [
  { date: "Tomorrow", time: "8:00 AM", client: "Ryan Taylor" },
  { date: "Tomorrow", time: "10:00 AM", client: "Sophia Clark" },
  { date: "Wed", time: "9:00 AM", client: "Liam Brown" },
  { date: "Thu", time: "11:00 AM", client: "Mia Patel" },
];

export default function TrainerPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        items={nav}
        active="Dashboard"
        promo={{ title: "Alex Thompson", sub: "Personal Trainer", cta: "View Profile" }}
      />
      <main className="flex-1 min-w-0">
        <Header
          date="May 12, 2026"
          role="Trainer"
          user={{ name: "Alex Thompson", sub: "Trainer" }}
        />
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-[22px] font-bold text-white">
              Welcome back, Alex! <span>👋</span>
            </h1>
            <p className="text-[12px] text-muted mt-0.5">
              Here&apos;s your overview for today.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 mb-5">
            <StatCard icon={Users} label="TOTAL CLIENTS" value="28" delta="+4" />
            <StatCard icon={CheckSquare} label="SESSIONS TODAY" value="6" delta="2 done" tone="green" />
            <StatCard icon={Activity} label="COMPLETED THIS WEEK" value="18" delta="+12%" tone="amber" />
            <StatCard icon={TrendingUp} label="CLIENT RETENTION" value="87%" delta="+3%" tone="blue" />
            <StatCard icon={DollarSign} label="EARNINGS" value="£2,450" delta="+8%" tone="brand" />
          </div>

          {/* Today schedule + progress overview + assigned clients */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card title="Today's Schedule" action="View All">
              <div className="space-y-2.5">
                {schedule.map((s) => (
                  <div key={s.client} className="flex items-center gap-3 p-2.5 rounded-lg bg-panel2 border border-line2">
                    <div className="text-center min-w-[52px]">
                      <div className="text-[11px] text-white font-medium">{s.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white truncate">{s.client}</div>
                      <div className="text-[10px] text-muted truncate">{s.type}</div>
                    </div>
                    <span className={`chip ${s.color}`}>{s.status}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-ghost text-[11px]">View Full Schedule</button>
            </Card>

            <Card title="Client Progress Overview" action="This Week">
              <div className="relative w-[140px] h-[140px] mx-auto mb-3">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={[{v:28},{v:18},{v:6},{v:4}]} dataKey="v" innerRadius={48} outerRadius={66} paddingAngle={2}>
                      <Cell fill="#ef2b2b" />
                      <Cell fill="#f59e0b" />
                      <Cell fill="#22c55e" />
                      <Cell fill="#3b82f6" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="text-[20px] font-bold text-white">28</div>
                    <div className="text-[9px] text-muted">Clients</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] mb-4">
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand" /><span className="text-muted">On Track</span></div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400" /><span className="text-muted">Progressing</span></div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400" /><span className="text-muted">Completed</span></div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-400" /><span className="text-muted">At Risk</span></div>
              </div>
              <div className="text-[10px] text-muted uppercase mb-2">Top Improvements</div>
              <div className="space-y-1.5">
                {improvements.map((i) => (
                  <div key={i.name} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ background: i.color }} />
                      <span className="text-[#bfbfbf]">{i.name}</span>
                    </div>
                    <span className="text-emerald-400 font-medium">{i.pct}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Assigned Clients" action="View All">
              <div className="space-y-3">
                {clients.map((c) => (
                  <div key={c.name} className="flex items-center gap-3">
                    <Avatar name={c.name} size={32} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white truncate">{c.name}</div>
                      <div className="text-[10px] text-muted">{c.program}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] text-white font-semibold">{c.pct}%</div>
                      <div className="w-12 h-1 bg-panel2 rounded-full mt-1">
                        <div className="h-full bg-brand rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-ghost text-[11px]">Manage Clients</button>
            </Card>
          </div>

          {/* Bottom row: workouts + nutrition + bookings */}
          <div className="grid grid-cols-3 gap-4">
            <Card title="Workout Programs" action="View All">
              <div className="space-y-2">
                {programs.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-panel2 border border-line2">
                    <div className="w-9 h-9 rounded-lg bg-brand/15 grid place-items-center">
                      <Dumbbell size={14} className="text-brand" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white">{p.name}</div>
                      <div className="text-[10px] text-muted">{p.clients} clients • {p.days}</div>
                    </div>
                    <ChevronRight size={14} className="text-muted" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 btn-red text-[11px]">Create New Program</button>
            </Card>

            <Card title="Nutrition Plans" action="View All">
              <div className="space-y-2">
                {nutrition.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-panel2 border border-line2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/15 grid place-items-center">
                      <Apple size={14} className="text-emerald-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white">{p.name}</div>
                      <div className="text-[10px] text-muted">{p.clients} clients assigned</div>
                    </div>
                    <ChevronRight size={14} className="text-muted" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 btn-red text-[11px]">Create New Plan</button>
            </Card>

            <Card title="Upcoming Bookings" action="View All">
              <div className="space-y-2">
                {upcoming.map((u, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-panel2 border border-line2">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/15 grid place-items-center">
                      <Clock size={14} className="text-sky-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white">{u.client}</div>
                      <div className="text-[10px] text-muted">{u.date} • {u.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 btn-ghost text-[11px]">View All Bookings</button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
