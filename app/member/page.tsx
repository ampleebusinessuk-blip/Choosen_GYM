"use client";
import {
  LayoutDashboard, BookOpen, Calendar, Dumbbell, Activity,
  Apple, Crown, Trophy, Gift, MessageSquare, User, Settings,
  Flame, Heart, Clock, ChevronRight, Plus, Star,
  CreditCard, AlertCircle,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Card } from "@/components/Card";
import {
  PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar,
} from "recharts";

const nav = [
  { href: "#", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "Book Classes", icon: BookOpen },
  { href: "#", label: "My Schedule", icon: Calendar },
  { href: "#", label: "Workouts", icon: Dumbbell },
  { href: "#", label: "Nutrition", icon: Apple },
  { href: "#", label: "Progress", icon: Activity },
  { href: "#", label: "Membership", icon: Crown },
  { href: "#", label: "Challenges", icon: Trophy },
  { href: "#", label: "Rewards", icon: Gift },
  { href: "#", label: "Messages", icon: MessageSquare },
  { href: "#", label: "Profile", icon: User },
  { href: "#", label: "Settings", icon: Settings },
];

const muscle = [
  { name: "Chest", pct: 78 },
  { name: "Back", pct: 65 },
  { name: "Legs", pct: 82 },
  { name: "Arms", pct: 70 },
  { name: "Core", pct: 58 },
];

const classes = [
  { name: "HIIT Cardio", trainer: "Sarah J.", time: "7:00 AM", spots: 4, color: "#ef2b2b" },
  { name: "Yoga Flow", trainer: "Emma D.", time: "9:00 AM", spots: 8, color: "#22c55e" },
  { name: "Upper Body Strength", trainer: "Mike B.", time: "11:00 AM", spots: 2, color: "#f59e0b" },
  { name: "Spin Class", trainer: "James W.", time: "5:00 PM", spots: 6, color: "#3b82f6" },
];

const macros = [
  { name: "Protein", value: 142, goal: 180, color: "#ef2b2b" },
  { name: "Carbs", value: 210, goal: 260, color: "#f59e0b" },
  { name: "Fats", value: 58, goal: 70, color: "#22c55e" },
];

const upcoming = [
  { name: "HIIT Cardio", time: "Tomorrow, 7:00 AM", trainer: "Sarah J." },
  { name: "Yoga Flow", time: "Thu, 9:00 AM", trainer: "Emma D." },
  { name: "PT Session", time: "Fri, 11:00 AM", trainer: "Mike B." },
];

export default function MemberPage() {
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
          role="Member"
          user={{ name: "Alex Thompson", sub: "Premium Member" }}
          cta={{ label: "Book a Class", icon: <Plus size={13} /> }}
        />
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-[22px] font-bold text-white">
              Welcome back, Alex! <span>💪</span>
            </h1>
            <p className="text-[12px] text-muted mt-0.5">
              Let&apos;s crush your goals today.
            </p>
          </div>

          {/* Top: membership + next class + points */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card className="!p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 grid place-items-center">
                  <Crown size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-muted">MEMBERSHIP</div>
                  <div className="text-[15px] font-bold text-white">Premium Membership</div>
                </div>
                <button className="btn-red text-[10px] !px-3 !py-1.5">Manage</button>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-[10px] text-muted">VISITS LEFT</div>
                  <div className="text-[14px] font-bold text-white">∞</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted">RENEWS</div>
                  <div className="text-[14px] font-bold text-white">Jun 12</div>
                </div>
                <div>
                  <div className="text-[10px] text-muted">STATUS</div>
                  <div className="text-[12px] font-bold text-emerald-400">Active</div>
                </div>
              </div>
            </Card>

            <Card className="!p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-brand/15 grid place-items-center">
                  <Dumbbell size={18} className="text-brand" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-muted">NEXT UP</div>
                  <div className="text-[15px] font-bold text-white">Upper Body Strength</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[11px] text-muted flex items-center gap-1.5">
                  <Clock size={12} />Tomorrow, 7:00 AM
                </div>
                <button className="btn-red text-[10px] !px-3 !py-1.5">Check In</button>
              </div>
            </Card>

            <Card className="!p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 grid place-items-center">
                  <Star size={18} className="text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-muted">REWARD POINTS</div>
                  <div className="text-[20px] font-bold text-white">1,250</div>
                </div>
              </div>
              <div className="h-1.5 bg-panel2 rounded-full mb-2">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: "62%" }} />
              </div>
              <div className="text-[10px] text-muted">750 points to next reward</div>
            </Card>
          </div>

          {/* Big row: my progress + book classes + nutrition */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <Card title="My Progress" action="View All">
              <div className="flex items-end gap-4 mb-4">
                <div>
                  <div className="text-[10px] text-muted">CURRENT STREAK</div>
                  <div className="text-[26px] font-bold text-white">4<span className="text-[12px] text-muted ml-1">days</span></div>
                </div>
                <Flame size={32} className="text-brand mb-1" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-center mb-4">
                <div className="bg-panel2 border border-line2 rounded-lg p-2">
                  <div className="text-[10px] text-muted">TOTAL WORKOUTS</div>
                  <div className="text-[16px] font-bold text-white">48</div>
                </div>
                <div className="bg-panel2 border border-line2 rounded-lg p-2">
                  <div className="text-[10px] text-muted">CALORIES</div>
                  <div className="text-[16px] font-bold text-white">2,350</div>
                </div>
              </div>
              <div className="text-[10px] text-muted uppercase mb-2">Muscle Focus This Week</div>
              <div className="space-y-2">
                {muscle.map((m) => (
                  <div key={m.name}>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-[#bfbfbf]">{m.name}</span>
                      <span className="text-white">{m.pct}%</span>
                    </div>
                    <div className="h-1 bg-panel2 rounded-full">
                      <div className="h-full bg-brand rounded-full" style={{ width: `${m.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Book Classes" action="View Schedule">
              <div className="flex gap-1.5 mb-3 text-[10px]">
                {["All Classes", "HIIT", "Yoga", "Strength", "Cardio"].map((t, i) => (
                  <button key={t} className={`px-2.5 py-1 rounded ${i===0 ? "bg-brand text-white" : "bg-panel2 text-muted border border-line2"}`}>{t}</button>
                ))}
              </div>
              <div className="space-y-2">
                {classes.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 p-2 rounded-lg bg-panel2 border border-line2">
                    <div className="w-9 h-9 rounded-lg grid place-items-center" style={{ background: `${c.color}22`, color: c.color }}>
                      <Dumbbell size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] text-white truncate">{c.name}</div>
                      <div className="text-[10px] text-muted">{c.trainer} • {c.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-muted">{c.spots} spots</div>
                      <button className="text-[10px] text-brand">Book</button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Nutrition Overview" action="View Plan">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-[110px] h-[110px]">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={[{ v: 1824 }, { v: 376 }]} dataKey="v" innerRadius={38} outerRadius={52} startAngle={90} endAngle={-270}>
                        <Cell fill="#ef2b2b" />
                        <Cell fill="#1f1f1f" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <div className="text-[16px] font-bold text-white">1,824</div>
                      <div className="text-[9px] text-muted">/ 2,200 kcal</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {macros.map((m) => (
                    <div key={m.name}>
                      <div className="flex justify-between text-[10px] mb-0.5">
                        <span className="text-[#bfbfbf]">{m.name}</span>
                        <span className="text-white">{m.value}g</span>
                      </div>
                      <div className="h-1 bg-panel2 rounded-full">
                        <div className="h-full rounded-full" style={{ width: `${(m.value / m.goal) * 100}%`, background: m.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-[10px] text-muted uppercase mb-2">Today&apos;s Meals</div>
              <div className="space-y-1.5">
                {[
                  ["Grilled Chicken", "+420 kcal"],
                  ["Protein Smoothie", "+280 kcal"],
                  ["Veggie Salad", "+180 kcal"],
                ].map(([n, c]) => (
                  <div key={n} className="flex justify-between text-[11px] py-1 border-b border-line2 last:border-0">
                    <span className="text-white">{n}</span>
                    <span className="text-emerald-400">{c}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Bottom row: bookings + billing + challenges + rewards */}
          <div className="grid grid-cols-4 gap-4">
            <Card title="Upcoming Bookings" action="View All">
              <div className="space-y-2">
                {upcoming.map((u) => (
                  <div key={u.name} className="p-2.5 rounded-lg bg-panel2 border border-line2">
                    <div className="text-[12px] text-white">{u.name}</div>
                    <div className="text-[10px] text-muted">{u.time}</div>
                    <div className="text-[10px] text-brand">with {u.trainer}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Billing & Payments" action="View All">
              <div className="text-center py-2">
                <div className="text-[10px] text-muted">NEXT PAYMENT</div>
                <div className="text-[20px] font-bold text-white my-1">£49.99</div>
                <div className="text-[10px] text-muted mb-3">Due May 30, 2026</div>
                <button className="btn-red w-full text-[11px]">Pay Now</button>
              </div>
              <div className="mt-3 pt-3 border-t border-line2 text-[11px]">
                <div className="flex items-center gap-2 text-muted">
                  <CreditCard size={11} /> Visa •••• 4242
                </div>
              </div>
            </Card>

            <Card title="Challenges" action="View All">
              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-brand/20 to-transparent border border-brand/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy size={13} className="text-brand" />
                    <div className="text-[12px] text-white font-semibold">30-Day Strength</div>
                  </div>
                  <div className="h-1 bg-panel2 rounded-full my-1.5">
                    <div className="h-full bg-brand rounded-full" style={{ width: "60%" }} />
                  </div>
                  <div className="text-[10px] text-muted">Day 18 / 30</div>
                </div>
                <div className="p-2.5 rounded-lg bg-panel2 border border-line2">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart size={13} className="text-emerald-400" />
                    <div className="text-[12px] text-white font-semibold">10K Steps Daily</div>
                  </div>
                  <div className="h-1 bg-panel2 rounded-full my-1.5">
                    <div className="h-full bg-emerald-400 rounded-full" style={{ width: "85%" }} />
                  </div>
                  <div className="text-[10px] text-muted">Day 25 / 30</div>
                </div>
              </div>
            </Card>

            <Card title="Rewards" action="View All">
              <div className="text-center py-2">
                <div className="text-[10px] text-muted">YOUR POINTS</div>
                <div className="text-[26px] font-bold text-amber-400 my-1">1,250</div>
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex items-center gap-2 p-2 rounded bg-panel2 border border-line2">
                  <Gift size={13} className="text-amber-400" />
                  <div className="flex-1 text-[11px] text-white">Free PT Session</div>
                  <span className="text-[10px] text-muted">2,000 pts</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-panel2 border border-line2">
                  <Gift size={13} className="text-amber-400" />
                  <div className="flex-1 text-[11px] text-white">Free T-Shirt</div>
                  <span className="text-[10px] text-muted">1,500 pts</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
