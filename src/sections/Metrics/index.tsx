interface MetricItem {
  value: string;
  label: string;
}

interface MetricsProps {
  metrics: MetricItem[];
}

export const Metrics = ({ metrics }: MetricsProps) => (
  <section className="relative py-16 md:py-24">
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className={`animate-reveal delay-${i + 1} bg-white/[0.02] border border-white/5 rounded-sm p-6 md:p-8 text-center`}
          >
            <div className="font-conthrax text-3xl md:text-4xl lg:text-5xl text-fusa-white mb-2">
              {metric.value}
            </div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-conthrax">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
