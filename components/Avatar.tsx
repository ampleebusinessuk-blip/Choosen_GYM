export default function Avatar({
  name,
  size = 32,
  tone,
}: {
  name: string;
  size?: number;
  tone?: string;
}) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  const colors = ["#ef2b2b", "#f59e0b", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"];
  const hash = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const bg = tone || colors[hash % colors.length];
  return (
    <div
      className="rounded-full grid place-items-center font-bold text-white shrink-0"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${bg}, ${bg}99)`,
        fontSize: size * 0.38,
      }}
    >
      {initials}
    </div>
  );
}
