interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  return (
    <header className="bg-background border-b border-background px-6 py-6 sticky top-0 z-[1000]">
      <div>
        <h1 className="text-lg font-semibold text-text-primary">{title}</h1>
        {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
      </div>
    </header>
  );
}
