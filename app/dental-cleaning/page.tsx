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

const service = SERVICES.find((s) => s.slug === 'dental-cleaning')!;
const leadDentist = DENTISTS.find((d) => d.id === service.assignedDentistId) || DENTISTS[0];

export const metadata: Metadata = createMetadata({
  title: 'Limpeza Dental & Profilaxia em Manaus',
  description:
    'Profilaxia e limpeza dental com ultrassom para prevenção de tártaro e gengivite no Odonto Amazon em Manaus.',
  pathname: '/dental-cleaning/',
});

export default function DentalCleaningPage() {
  const procedureSchema = generateMedicalProcedureSchema(
    service.name,
    service.clinicalExplanation,
    '/dental-cleaning/'
  );
  const faqSchema = generateFaqSchema(service.faqs);

  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={[procedureSchema, faqSchema]} />

      {/* SECTION 1: Introduction */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: service.name, path: '/dental-cleaning/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-3 uppercase tracking-wider font-medium">
                  Periodontal Prevention & Airflow
                </span>
                <WordRevealH1 text="Airflow cleaning and periodontal preservation." />
                <div className="mt-8">
                  <ScrubbedParagraph text={service.shortDescription} />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-8">
                  <Button href="/book-appointment/" variant="forest" size="lg">
                    Book preventive hygiene visit
                  </Button>
                  <Button href="#procedure" variant="ghost" size="lg">
                    View hygiene sequence
                  </Button>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 lg:pl-6 flex flex-col justify-end">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
                <div className="p-6 bg-paper border border-mist space-y-3 font-body text-13 text-forest-ink/80 shadow-sm">
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Technology</span>
                    <span className="font-medium text-forest">Glycine Airflow / Piezo</span>
                  </div>
                  <div className="flex justify-between border-b border-mist pb-2">
                    <span>Sensitivity</span>
                    <span className="font-medium text-forest">Warm Water Stream</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Standard Interval</span>
                    <span className="font-medium text-forest">Every 6 Months</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: What Is Professional Dental Cleaning? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
                <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                  Preventive Science
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  What is guided biofilm therapy?
                </h2>
                <p className="font-body text-15 md:text-17 text-forest-ink/90 leading-relaxed mb-6">
                  {service.clinicalExplanation}
                </p>
                <div className="p-4 bg-mist/40 border-l-2 border-forest">
                  <span className="font-body text-13 text-forest-ink/80">
                    Unlike traditional metal hand scrapers, glycine powder airflow reaches subgingival pockets safely without scratching enamel prisms or sensitive root cementum.
                  </span>
                </div>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="zoom-in" duration={0.8}>
                <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                    alt="Guided airflow dental cleaning treatment"
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

      {/* SECTION 3: Why Dental Cleaning Is Important */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Systemic Health Protection
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Why professional hygiene is critical
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
                  <span className="font-body text-13 text-forest font-medium">Preventive standard</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: What Happens During Cleaning? (Procedure Pin) */}
      <div id="procedure">
        <ProcedurePin
          steps={service.procedureSteps}
          title="Guided Hygiene & Debridement Sequence"
          subtitle="Gentle 4-Stage Periodontal Protocol"
        />
      </div>

      {/* SECTION 5: Plaque, Tartar & Gum Health */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Periodontal Pathology
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Understanding biofilm, calculus & bone loss
              </h2>
              <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
                When soft bacterial plaque mineralizes into hard calculus (tartar), it cannot be brushed away at home. The resulting chronic inflammation triggers alveolar bone resorption over time.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Stage 1: Plaque Biofilm</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Invisible sticky colony of oral bacteria. Reversible in days with proper brushing, flossing, and surface airflow polishing.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Stage 2: Calcified Tartar</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Plaque mineralized by saliva minerals into a rock-hard matrix. Requires gentle ultrasonic vibration to dislodge safely.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-8 bg-mist/30 border border-mist h-full shadow-sm">
                <span className="font-display text-21 text-forest block mb-2">Stage 3: Pocket Formation</span>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Deepening sulcus (4mm+) allowing anaerobic bacteria to enter bone architecture. Requires therapeutic deep debridement.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6: How Often Should You Get Cleaning? */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="max-w-3xl mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Recall Frequency
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Recommended hygiene intervals
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimateOnScroll animation="fade-right" duration={0.8}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Every 6 Months</span>
                <h3 className="font-display text-21 text-forest-ink mb-2">Standard Preventive Recall</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  For patients with healthy gum tissue, no active bone loss, and pocket depths measuring 1 to 3mm.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.15}>
              <div className="p-8 bg-paper border border-mist h-full shadow-sm">
                <span className="font-display text-26 text-forest block mb-2">Every 3 to 4 Months</span>
                <h3 className="font-display text-21 text-forest-ink mb-2">Periodontal Maintenance</h3>
                <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                  For patients with a history of periodontal surgery, dental implants, diabetic conditions, or rapid calculus accumulation.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7: Aftercare */}
      <section className="py-20 md:py-32 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8}>
            <div className="mb-12">
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Post-Visit Care
              </span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink">
                Hygiene aftercare recommendations
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" delay={0.1}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Fluoride Curing</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Avoid eating hot or crunchy foods for 30 minutes following protective mineral varnish application.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.2}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Interdental Brushing</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Use sized interdental brushes daily to remove plaque in wide interproximal spaces.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={0.3}>
              <div className="p-6 bg-paper border border-mist h-full shadow-sm">
                <h3 className="font-display text-17 md:text-21 text-forest-ink mb-2">Gentle Angle Brushing</h3>
                <p className="font-body text-13 text-forest-ink/80 leading-relaxed">
                  Angle soft bristles at 45 degrees toward the gumline to sweep away daily biofilm without recession.
                </p>
              </div>
            </AnimateOnScroll>
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
                  Transparent Fees
                </span>
                <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
                  Dental hygiene pricing
                </h2>
                <div className="p-6 bg-paper border border-mist mb-6 shadow-sm">
                  <span className="font-body text-13 text-forest-ink/60 block mb-1">Standard Hygiene Range</span>
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
                    Included in this appointment:
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
                  Cleaning FAQs
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

      {/* SECTION 10: Appointment CTA */}
      <section className="py-20 md:py-28 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <AnimateOnScroll animation="fade-right" duration={0.8}>
            <div>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Preventive Health
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper">
                Schedule your guided airflow cleaning
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
            <Button href="/book-appointment/" variant="lime" size="lg">
              Book Appointment
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
