"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User as UserIcon, Phone } from "lucide-react";
import AuthHero from "@/components/AuthHero";
import RoleSelect, { Role } from "@/components/RoleSelect";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("member");
  const [show, setShow] = useState(false);
  const [showC, setShowC] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", pw: "", cpw: "" });
  const [agree, setAgree] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.pw !== form.cpw) {
      alert("Passwords don't match");
      return;
    }
    if (!agree) {
      alert("Accept terms first");
      return;
    }
    router.push(`/${role}`);
  };

  const set = (k: keyof typeof form, v: string) => setForm({ ...form, [k]: v });

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-bg">
      <AuthHero />
      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-[420px]">
          <div className="text-center mb-5">
            <h1 className="text-[24px] font-bold text-white">Create Account</h1>
            <p className="text-[12px] text-muted mt-1">Join the standard</p>
          </div>

          <form onSubmit={submit} className="space-y-3.5">
            <RoleSelect value={role} onChange={setRole} />

            <div>
              <label className="block text-[12px] text-[#bfbfbf] mb-1.5">Full Name</label>
              <div className="relative">
                <UserIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="John Doe"
                  required
                  className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-3 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[12px] text-[#bfbfbf] mb-1.5">Email</label>
                <div className="relative">
                  <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-3 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] text-[#bfbfbf] mb-1.5">Phone</label>
                <div className="relative">
                  <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+44 7..."
                    className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-3 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[12px] text-[#bfbfbf] mb-1.5">Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type={show ? "text" : "password"}
                  value={form.pw}
                  onChange={(e) => set("pw", e.target.value)}
                  placeholder="Min 8 characters"
                  required
                  minLength={8}
                  className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-9 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white">
                  {show ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[12px] text-[#bfbfbf] mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type={showC ? "text" : "password"}
                  value={form.cpw}
                  onChange={(e) => set("cpw", e.target.value)}
                  placeholder="Repeat password"
                  required
                  className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-9 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                />
                <button type="button" onClick={() => setShowC(!showC)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white">
                  {showC ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 text-[11px] text-[#bfbfbf] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-3.5 h-3.5 mt-0.5 accent-brand"
              />
              <span>
                I agree to the <a href="#" className="text-brand hover:underline">Terms</a> and <a href="#" className="text-brand hover:underline">Privacy Policy</a>
              </span>
            </label>

            <button type="submit" className="btn-red w-full !py-2.5 text-[13px] font-semibold">
              Create Account
            </button>

            <p className="text-center text-[12px] text-muted">
              Already have an account?{" "}
              <Link href="/login" className="text-brand hover:underline">Login</Link>
            </p>
          </form>

          <p className="text-center text-[10px] text-muted mt-6">
            © 2026 Chosen Gym. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
