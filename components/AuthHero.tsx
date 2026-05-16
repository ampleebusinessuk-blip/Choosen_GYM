import Image from "next/image";

export default function AuthHero() {
  return (
    <div className="relative hidden md:flex flex-col justify-between p-10 overflow-hidden bg-black">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 40%, rgba(239,43,43,0.25), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.9), transparent 70%), linear-gradient(135deg, #1a0606 0%, #050505 50%, #0a0a0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 12px, rgba(255,255,255,0.03) 12px 13px)",
        }}
      />
      <div className="relative z-10">
        <Image
          src="/chosen_gym_white.png"
          alt="Chosen Gym"
          width={150}
          height={50}
          priority
          className="w-[150px] h-auto"
        />
      </div>
      <div className="relative z-10">
        <div className="text-[44px] font-black italic leading-[0.95] tracking-tight text-white">
          CHOSEN.
        </div>
        <div className="text-[44px] font-black italic leading-[0.95] tracking-tight text-brand">
          NOT GIVEN.
        </div>
        <div className="mt-3 text-[11px] tracking-[0.3em] text-[#8a8a8a]">
          BE PART OF THE STANDARD.
        </div>
      </div>
    </div>
  );
}
