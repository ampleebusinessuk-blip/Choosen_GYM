import Image from "next/image";

export default function Logo() {
  return (
    <div className="px-5 py-5">
      <Image
        src="/chosen_gym_white.png"
        alt="Chosen Gym"
        width={170}
        height={56}
        priority
        className="w-[170px] h-auto"
      />
    </div>
  );
}
