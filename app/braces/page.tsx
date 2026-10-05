import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, DENTISTS } from '@/lib/clinic-data';
import WordRevealH1 from '@/components/motion/WordRevealH1';
import ScrubbedParagraph from '@/components/motion/ScrubbedParagraph';
import ProcedurePin from '@/components/sections/treatment/ProcedurePin';
import BeforeAfterSlider from '@/components/motion/BeforeAfterSlider';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Accordion from '@/components/ui/Accordion';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/ui/JsonLd';
import { createMetadata, generateMedicalProcedureSchema, generateFaqSchema } from '@/lib/seo';

const service = SERVICES.find((s) => s.slug === 'braces')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Aparelhos Ortodônticos & Aligners em Manaus',
  description:
    'Aparelhos ortodônticos convencionais, estéticos e alinhadores em Manaus com planejamento cuidadoso e atendimento humanizado.',
  pathname: '/braces/',
});

const BRACES_COMPARISON = [
  {
    type: 'Clear Aligners',
    visibility: 'Nearly invisible transparent medical polymer',
    removability: 'Removable for meals and oral hygiene',
    comfort: 'Smooth edges; no metal wires or brackets',
    bestFor: 'Mild to severe crowding, spacing, relapse, adult aesthetics',
    adjustmentInterval: 'Tray changes at home every 7–10 days; clinical review every 8 weeks',
  },
  {
    type: 'Translucent Ceramic Braces',
    visibility: 'Discrete polycrystalline alumina matching tooth shade',
    removability: 'Fixed to tooth enamel throughout treatment',
    comfort: 'Low-profile rounded contours; gentle superelastic wires',
    bestFor: 'Complex bite discrepancies, severe rotations, high compliance needs',
    adjustmentInterval: 'Clinical activation visits every 6–8 weeks',
  },
  {
    type: 'Low-Profile Metal Braces',
    visibility: 'Traditional surgical-grade stainless steel',
    removability: 'Fixed to tooth enamel throughout treatment',
    comfort: 'Modern miniature bracket design reduces cheek irritation',
    bestFor: 'Severe skeletal malocclusion and surgical orthodontic cases',
    adjustmentInterval: 'Clinical activation visits every 4–6 weeks',
  },
];

export default function BracesPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/braces/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/braces/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Dentofacial Orthopedics & Aligners
                </span>
                <WordRevealH1 text="Digitally planned orthodontic alignment and airway balance." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Book orthodontic consultation
                  </Button>
                  <Button href="#comparison" variant="ghost" size="lg">
                    Compare appliance types
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
                    <span>Clinical Focus</span>
                    <span className="font-medium text-forest">BAMDC Demonstrator</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technology</span>
                    <span className="font-medium text-forest">3D Movement Simulation</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Are Braces? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Biomechanical Principles
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  What is orthodontic tooth movement?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    By planning force vectors digitally, we ensure physiological velocities that prevent root tip resorption and maintain healthy bone density.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1594824813583-e18e3848b814?auto=format&fit=crop&q=80&w=1000"
                    alt="Clear aligner orthodontic simulation"
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

      {/* SECTION 3: Who May Need Orthodontic Treatment? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Clinical Indications
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Who requires orthodontic correction?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.whoNeeds.map((item, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex items-start gap-4 h-full shadow-sm">
                  <span className="font-display text-21 text-forest flex-shrink-0">0{idx + 1}</span>
                  <p className="font-body text-15 text-forest-ink/80 leading-relaxed">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Types of Braces (Comparison Table) */}
      <section id="comparison" className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Appliance Modalities
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Appliance comparison matrix
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15}>
            <div className="border border-mist overflow-x-auto bg-paper shadow-sm">
              <table className="w-full text-left font-body text-13 border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-mist/40 border-b border-mist text-forest-ink">
                    <th className="py-4 px-6 font-display text-17">Appliance Type</th>
                    <th className="py-4 px-6 font-medium">Aesthetics & Visibility</th>
                    <th className="py-4 px-6 font-medium">Removability</th>
                    <th className="py-4 px-6 font-medium">Clinical Indications</th>
                    <th className="py-4 px-6 font-medium">Adjustment Schedule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mist">
                  {BRACES_COMPARISON.map((row) => (
                    <tr key={row.type} className="hover:bg-mist/20 transition-colors">
                      <td className="py-5 px-6 font-display text-17 text-forest font-medium">
                        {row.type}
                      </td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.visibility}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.removability}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.bestFor}</td>
                      <td className="py-5 px-6 text-forest-ink/80">{row.adjustmentInterval}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 5: Treatment Process */}
      <ProcedurePin
        steps={service.procedureSteps}
        title="The Orthodontic Treatment Journey"
        subtitle="Digital Step-by-Step Sequencing"
      />

      {/* SECTION 6: Treatment Duration */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Chronological Progress
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Month-by-month treatment duration
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                Active tooth movement occurs steadily under light continuous biological forces. Here is how your alignment advances through each phase.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Months 1 – 3</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Leveling & Alignment</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Rotations resolve and crowded incisors uncross into an even continuous archform.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Months 4 – 9</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Bite Correction & Torque</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Deep overbite and crossbites are corrected; tooth roots are uprighted parallel to bone axes.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Months 10 – 14</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Micro-Finishing & Settling</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Molar intercuspation is dialed in with millimeter accuracy to guarantee solid chewing contact.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.4}>
              <div className="p-6 bg-mist/40 border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Month 15+</span>
                <h3 className="font-display text-17 text-forest-ink mb-2">Biological Retention</h3>
                <p className="font-body text-13 text-forest-ink/70">
                  Custom night retainers safeguard tooth positions while alveolar bone remineralizes.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Benefits */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Functional Value
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Comprehensive benefits of ideal alignment
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, idx) => (
              <AnimateOnScroll key={idx} animation="fade-up" delay={idx * 0.1}>
                <div className="p-6 bg-paper border border-mist flex flex-col justify-between h-full shadow-sm">
                  <p className="font-body text-15 text-forest-ink/90 leading-relaxed mb-4">
                    {benefit}
                  </p>
                  <span className="font-body text-13 text-forest font-medium">Orthodontic standard</span>
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
                  Orthodontic investment
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Full Treatment Range</span>
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
                    Included in comprehensive fee:
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

      {/* SECTION 9: Before & After */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Clinical Case Record
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Severe crowding aligner transformation
              </h2>
              <p className="font-body text-15 text-forest-ink/80 max-w-2xl">
                {service.beforeAfterCase.clinicalContext}
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={service.beforeAfterCase.beforeImage}
                afterImage={service.beforeAfterCase.afterImage}
                beforeLabel={service.beforeAfterCase.beforeLabel}
                afterLabel={service.beforeAfterCase.afterLabel}
                clinicalNote={`Timeframe: ${service.beforeAfterCase.timeframe}. Supervised by ${leadDentist.name}.`}
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SECTION 10: FAQs */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Patient Questions
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                  Orthodontic FAQs
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

      {/* SECTION 11: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Start Alignment
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Schedule your 3D orthodontic scan
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Book Consultation
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
