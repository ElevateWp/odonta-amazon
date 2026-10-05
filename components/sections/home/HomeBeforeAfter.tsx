import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Na Odonto Amazon
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Cuidado odontológico para cada sorriso
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Conheça o espaço da clínica e veja momentos do atendimento odontológico em Manaus.
            </p>
            <Link
              href="/contact/"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              Conheça a clínica →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/odonto-amazon-clinic-entry.jpg"
                  alt="Entrada da clínica Odonto Amazon"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#0D3B25]/85 text-white font-body text-12 px-3 py-1">
                  Odonto Amazon
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/odonto-amazon-child-care.jpg"
                  alt="Atendimento odontológico infantil na Odonto Amazon"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#0D3B25]/85 text-white font-body text-12 px-3 py-1">
                  Odonto Amazon
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}