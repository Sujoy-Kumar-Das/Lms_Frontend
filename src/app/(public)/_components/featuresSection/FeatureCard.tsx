import { ReactElement } from "react";

interface IFeature {
  icon: ReactElement;
  title: string;
  description: string;
}

export default function FeatureCard({ feature }: { feature: IFeature }) {
  return (
    <div className="bg-light rounded-xl p-6 card-hover shadow-md hover:shadow-lg">
      <div
        className={`w-14 h-14 bg-foreground/15 rounded-lg flex items-center justify-center`}
      >
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mt-4">
        {feature.title}
      </h3>
      <p className="mt-2 text-text-secondary">{feature.description}</p>
    </div>
  );
}
