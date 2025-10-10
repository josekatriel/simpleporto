const tabs = ["All", "Game", "Web", "Design"];

export default function ProjectTabs({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-4">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-4 py-2 border transition-all ${
            value === t
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:bg-muted hover:text-foreground"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
