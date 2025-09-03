export default function CommonHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
      <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
