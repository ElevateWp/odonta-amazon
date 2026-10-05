import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeGallery() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#173B2A] block mb-2 font-medium uppercase tracking-wider">
            Fotos da clínica Odonto Amazon
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#173B2A]">
            Nossa clínica e nossos atendimentos
          </h2>
        </AnimateOnScroll>

        {/* Asymmetric Grid Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mb-6">
          {/* Item 1: Illustrative care photo */}
          <AnimateOnScroll animation="fade-right" duration={0.85} className="md:col-span-5 min-h-[380px] md:min-h-[440px] relative bg-[#F3FAF6] overflow-hidden border border-[#D7E8DC] shadow-sm">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="/images/odonto-amazon-clinic-entry.jpg"
                alt="Clínica Odonto Amazon"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#173B2A]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Clínica Odonto Amazon
            </div>
          </AnimateOnScroll>

          {/* Item 2: Treatment room */}
          <AnimateOnScroll animation="fade-down" duration={0.85} className="md:col-span-7 min-h-[380px] md:min-h-[440px] relative bg-[#D7E8DC] overflow-hidden border border-[#D7E8DC] shadow-sm">
            <MediaParallax speed={0.08} className="w-full h-full">
              <Image
                src="/images/odonto-amazon-reception.jpg"
                alt="Recepção da clínica Odonto Amazon"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#173B2A]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Recepção da clínica
            </div>
          </AnimateOnScroll>
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Item 3: Consultation office */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} className="aspect-[4/3] relative bg-[#D7E8DC] overflow-hidden border border-[#D7E8DC] shadow-sm">
            <MediaParallax speed={0.05} className="w-full h-full">
              <Image
                src="/images/odonto-amazon-reception-care.jpg"
                alt="Atendimento na recepção da Odonto Amazon"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#173B2A]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Atendimento na recepção
            </div>
          </AnimateOnScroll>

          {/* Item 4: Clinic identity wall */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1} className="aspect-[4/3] relative bg-[#D7E8DC] overflow-hidden border border-[#D7E8DC] shadow-sm">
            <MediaParallax speed={0.07} className="w-full h-full">
              <Image
                src="/images/odonto-amazon-dentist-patient.jpg"
                alt="Dentista com paciente na Odonto Amazon"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#173B2A]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Atendimento personalizado
            </div>
          </AnimateOnScroll>

          {/* Item 5: Kids area */}
          <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2} className="aspect-[4/3] relative bg-[#F3FAF6] overflow-hidden border border-[#D7E8DC] shadow-sm sm:col-span-2 md:col-span-1">
            <MediaParallax speed={0.06} className="w-full h-full">
              <Image
                src="/images/odonto-amazon-child-care.jpg"
                alt="Clínica Odonto Amazon"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top"
              />
            </MediaParallax>
            <div className="absolute bottom-3 left-3 bg-[#173B2A]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
              Clínica Odonto Amazon
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
