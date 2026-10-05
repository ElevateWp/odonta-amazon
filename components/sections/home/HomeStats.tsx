import React from 'react';
import { CLINIC_INFO } from '@/lib/clinic-data';
import CountingNumber from '@/components/motion/CountingNumber';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeStats() {
  if (CLINIC_INFO.verifiedStats.length === 0) return null;

  return (
    <section className="relative z-20 w-full bg-paper border-t border-b border-mist py-12 md:py-16">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="stagger" stagger={0.12} duration={0.9}>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-mist max-w-3xl mx-auto">
            {CLINIC_INFO.verifiedStats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`py-6 sm:py-0 ${idx > 0 ? 'sm:pl-8 lg:pl-10' : ''} ${
                  idx < 3 ? 'sm:pr-8 lg:pr-10' : ''
                }`}
              >
                <div className="font-display text-41 sm:text-52 lg:text-65 text-forest-ink leading-none mb-3">
                  <CountingNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.suffix.includes('.') ? 1 : 0}
                  />
                </div>
                <span className="font-body text-13 text-forest block font-medium mb-1">
                  {stat.label}
                </span>
                <p className="font-body text-13 text-forest-ink/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
