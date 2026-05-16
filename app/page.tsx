"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/login");
  }, [router]);
  return (
    <div className="min-h-screen grid place-items-center text-muted text-sm">
      Redirecting to login...
    </div>
  );
}
