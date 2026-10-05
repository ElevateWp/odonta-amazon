import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'root-canal')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Tratamento de Canal em Manaus',
  description:
    'Tratamento de canal moderno, seguro e sem dor em Manaus com a equipe odontológica na Odonto Amazon.',
  pathname: '/root-canal/',
});

export default function RootCanalPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/root-canal/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/root-canal/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Endodontic Microsurgery
                </span>
                <WordRevealH1 text="Microscopic root canal therapy to preserve natural teeth." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Request endodontic evaluation
                  </Button>
                  <Button href="/emergency-dentist/" variant="ghost" size="lg">
                    Emergency pain triage
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Clinical Specialist</span>
                    <Link href={`/dentists/${leadDentist.slug}/`} className="font-medium text-forest underline">
                      {leadDentist.name}
                    </Link>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Magnification</span>
                    <span className="font-medium text-forest">Up to 25x Optical</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Visit Duration</span>
                    <span className="font-medium text-forest">Single 75–90 min visit</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Is Root Canal Treatment? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Biological Science
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  What is root canal treatment?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    Retaining your biological root preserves natural chewing proprioception and stops the surrounding jawbone from resorbing.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                    alt="Microscopic endodontic root canal procedure"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Signs You May Need a Root Canal */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Symptom Identification
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Clinical signs of pulpal inflammation
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whoNeeds.map((sign, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex items-start gap-4 h-full shadow-sm">
                  <span className="font-display text-21 text-forest flex-shrink-0">0{idx + 1}</span>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{sign}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Causes of Tooth Infection */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Etiology & Pathology
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                What causes root canal infection?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.indications.map((ind, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.15}>
                <div className="p-6 bg-mist/30 border border-mist h-full shadow-sm">
                  <h3 className="font-display text-21 text-forest-ink mb-2">{ind.condition}</h3>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{ind.explanation}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Root Canal Procedure (Pinned Walkthrough) */}
      <ProcedurePin
        steps={service.procedureSteps}
        title="Microscopic Endodontic Sequence"
        subtitle="Surgical Step-by-Step Protocol"
      />

      {/* SECTION 6: Does Root Canal Treatment Hurt? */}
      <section className="py-24 md:py-36 bg-paper border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl">
              <span className="font-body text-13 text-forest uppercase tracking-wider block mb-3 font-medium">
                Pain Management & Anesthesia
              </span>
              <h2 className="font-display text-33 md:text-52 text-forest-ink leading-[1.08] mb-6">
                Does a root canal hurt?
              </h2>
              <p className="font-body text-17 md:text-21 text-forest-ink/90 leading-relaxed mb-6">
                No. A root canal does not cause pain—it eliminates it. With modern buffered local anesthetics and microscopic rotary instruments, the procedure feels identical to receiving a routine restorative filling.
              </p>
              <p className="font-body text-15 text-forest-ink/70 leading-relaxed">
                {leadDentist.name} monitors anesthesia depth continuously throughout the procedure, ensuring you remain completely numb and comfortable from initial access to final obturation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 7: Recovery & Aftercare */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Post-Treatment Expectations
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Recovery timeline & guidelines
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="divide-y divide-mist border-t border-b border-mist">
            {service.recoveryTimeline.map((rec, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-3">
                    <span className="font-display text-21 text-forest">{rec.period}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <span className="font-body text-13 text-forest-ink/60 block mb-1">Expected:</span>
                    <p className="font-body text-15 text-forest-ink/80">{rec.expectedSensations}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <span className="font-body text-13 text-forest-ink/60 block mb-1">Protocol:</span>
                    <p className="font-body text-15 text-forest-ink/80">{rec.careProtocol}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: Cost Information */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Fee Schedule
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Root canal treatment pricing
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Base Specialist Range</span>
                  <span className="font-display text-26 md:text-33 text-forest block mb-2">
                    {service.costTransparency.baseRange}
                  </span>
                  <p className="font-body text-13 text-forest-ink/70">
                    {service.costTransparency.note}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <div className="p-6 bg-mist/30 border border-mist shadow-sm">
                  <h3 className="font-display text-17 md:text-21 text-forest-ink mb-3">
                    Included in this procedure:
                  </h3>
                  <ul className="space-y-2 font-body text-13 text-forest-ink/80">
                    {service.costTransparency.whatIsIncluded.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQs */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Patient Inquiries
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  Endodontic FAQs
                </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8}>
                <Accordion items={service.faqs} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Dentist / Related Services */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="p-8 md:p-12 bg-paper border border-mist grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="lg:col-span-3">
                <div className="relative aspect-square bg-mist overflow-hidden border border-mist">
                  <Image
                    src={leadDentist.image}
                    alt={leadDentist.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="lg:col-span-9">
                <span className="font-body text-13 text-forest block mb-1 font-medium uppercase tracking-wider">
                  Endodontic Director
                </span>
                <h3 className="font-display text-26 md:text-33 text-forest-ink mb-2">
                  {leadDentist.name}
                </h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed mb-6">
                  {leadDentist.bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`/dentists/${leadDentist.slug}/`}
                    className="font-body text-15 text-forest font-medium underline underline-offset-4"
                  >
                    View {leadDentist.name}’s credentials →
                  </Link>
                  <Link
                    href="/emergency-dentist/"
                    className="font-body text-15 text-forest font-medium underline underline-offset-4"
                  >
                    Emergency tooth pain service →
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 11: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Relieve Pain
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Schedule your root canal consultation
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/book-appointment/" variant="lime" size="lg">
                Book Appointment
              </Button>
              <Button href="/contact/" variant="ghost" size="lg" className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10">
                Contact Clinic
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
