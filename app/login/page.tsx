"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthHero from "@/components/AuthHero";
import RoleSelect, { Role } from "@/components/RoleSelect";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("member");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [remember, setRemember] = useState(true);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${role}`);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-bg">
      <AuthHero />
      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-[400px]">
          <div className="text-center mb-6">
            <h1 className="text-[24px] font-bold text-white">Welcome Back!</h1>
            <p className="text-[12px] text-muted mt-1">Login to your account</p>
          </div>

          <form onSubmit={submit} className="space-y-4">
            <RoleSelect value={role} onChange={setRole} />

            <div>
              <label className="block text-[12px] text-[#bfbfbf] mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-3 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[12px] text-[#bfbfbf]">Password</label>
                <a href="#" className="text-[11px] text-brand hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type={show ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-panel2 border border-line2 rounded-lg pl-9 pr-9 py-2.5 text-[13px] text-white placeholder:text-muted focus:border-brand outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white"
                >
                  {show ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-[12px] text-[#bfbfbf] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-3.5 h-3.5 accent-brand"
              />
              Remember me
            </label>

            <button type="submit" className="btn-red w-full !py-2.5 text-[13px] font-semibold">
              Login
            </button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-line2" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-bg px-3 text-[11px] text-muted">or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Google", color: "#4285F4" },
                { label: "Apple", color: "#fff" },
                { label: "Facebook", color: "#1877F2" },
              ].map((p) => (
                <button
                  key={p.label}
                  type="button"
                  className="flex items-center justify-center gap-1.5 bg-panel2 border border-line2 hover:border-brand/50 rounded-lg py-2.5 text-[12px] text-white"
                >
                  <span className="w-3.5 h-3.5 rounded-full" style={{ background: p.color }} />
                  {p.label}
                </button>
              ))}
            </div>

            <p className="text-center text-[12px] text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-brand hover:underline">Sign up</Link>
            </p>
          </form>

          <p className="text-center text-[10px] text-muted mt-8">
            © 2026 Chosen Gym. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
