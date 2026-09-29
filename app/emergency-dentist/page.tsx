import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CLINIC_INFO, EMERGENCY_CONDITIONS } from '@/lib/clinic-data';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { createMetadata, generateFaqSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Atendimento Odontológico de Urgência em Manaus | Our Doctor',
  description:
    'Atendimento odontológico para dor de dente intensa, dente quebrado ou emergências em Manaus. WhatsApp/Telefone: +55 92 99265-6280.',
  pathname: '/emergency-dentist/',
});

const EMERGENCY_FAQS = [
  {
    question: 'Como funciona o atendimento de urgência para dor de dente?',
    answer: 'Pacientes com dor aguda, trauma ou inchaço são priorizados para atendimento rápido. Entre em contato pelo WhatsApp (+55 92 99265-6280) para orientação e agendamento.',
  },
  {
    question: 'O consultório oferece atendimento domiciliar de urgência?',
    answer: 'Sim, o A equipe odontológica realiza odontologia domiciliar para pacientes acamados ou com limitações de locomoção em Manaus.',
  },
  {
    question: 'O que fazer caso um dente quebre ou caia por trauma?',
    answer: 'Segure o dente apenas pela coroa, nunca pela raiz. Guarde-o em leite ou saliva e venha imediatamente ao consultório ou entre em contato pelo nosso WhatsApp (+55 92 99265-6280).',
  },
];

export default function EmergencyDentistPage() {
  return (
    <div className="flex flex-col w-full bg-paper">
      <JsonLd data={generateFaqSchema(EMERGENCY_FAQS)} />



      {/* SECTION 1: Emergency Introduction & Immediate Action */}
      <section className="py-12 md:py-16 bg-paper border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <Breadcrumbs items={[{ name: 'Emergency Dentist', path: '/emergency-dentist/' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest font-semibold block mb-2 uppercase tracking-wider">
                Immediate Urgent Care
              </span>
              <h1 className="font-display text-33 sm:text-41 md:text-52 text-forest-ink leading-tight mb-4">
                Immediate relief for acute dental pain and trauma.
              </h1>
              <p className="font-body text-17 text-forest-ink/90 leading-relaxed mb-6 max-w-2xl">
                If you are suffering from severe throbbing tooth pain, a knocked-out tooth, dental abscess swelling, or a fractured restoration, our surgical specialists provide same-day emergency stabilization.
              </p>

              {/* Direct Immediate Call Action */}
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call Emergency Hotline: {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button href="/book-appointment/" variant="ghost" size="lg">
                  Request Same-Day Slot Online
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-forest text-paper">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime font-medium uppercase tracking-wider block mb-2">
                Walk-In Clinical Location
              </span>
              <address className="not-italic font-body text-15 text-paper leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <div className="pt-3 border-t border-mist/20 text-13 text-paper/80 font-body">
                Civic Center Plaza • Direct Ground Floor Elevator
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 4: Common Dental Emergencies & Immediate Pre-Visit Actions */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Condition Identification & First-Aid
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              What to do immediately before arriving at our clinic
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EMERGENCY_CONDITIONS.map((cond, idx) => (
              <AnimateOnScroll key={cond.id} animation="fade-up" delay={idx * 0.1}>
              <div
                className="p-8 border border-mist bg-paper flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-display text-21 text-forest-ink">
                      {cond.title}
                    </span>
                    <span className="font-body text-13 text-forest font-semibold bg-mist/60 px-2.5 py-1">
                      {cond.urgency}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="font-body text-13 text-forest-ink/60 uppercase tracking-wider block mb-1 font-medium">
                      Symptoms:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/80">
                      {cond.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-forest">•</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-mist/30 border-l-2 border-forest mb-4">
                    <span className="font-body text-13 text-forest font-semibold block mb-1">
                      Immediate Action:
                    </span>
                    <ul className="space-y-1 font-body text-13 text-forest-ink/90">
                      {cond.immediateAction.map((act, i) => (
                        <li key={i}>• {act}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-mist text-13 font-body text-forest-ink/70">
                  <strong className="text-forest font-medium">Clinic Protocol:</strong> {cond.clinicTreatment}
                </div>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: When You Should Seek Immediate Care */}
      <section className="py-16 md:py-24 border-b border-mist bg-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="max-w-3xl mb-8">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Triage Criteria
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
              When a dental issue is a genuine emergency
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed">
              Dental infections can spread rapidly into deep facial spaces if untreated. You should seek same-day care if you experience any of the following critical indicators:
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimateOnScroll animation="zoom-in" duration={0.8}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Visible Facial Swelling</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Swelling extending toward the cheek, jawline, eye, or throat indicates active purulent infection requiring rapid drainage.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.1}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Uncontrolled Bleeding</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Continuous oral bleeding that fails to stop after 20 minutes of firm, direct gauze pressure.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.2}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Traumatic Tooth Avulsion</h3>
              <p className="font-body text-13 text-forest-ink/70">
                A permanent tooth dislodged by physical impact must be reimplanted within 60 minutes for highest survival rate.
              </p>
            </div></AnimateOnScroll>
            <AnimateOnScroll animation="zoom-in" duration={0.8} delay={0.3}><div className="p-6 bg-mist/30 border border-mist">
              <h3 className="font-display text-17 text-forest-ink mb-2">Severe Pulpitis Pain</h3>
              <p className="font-body text-13 text-forest-ink/70">
                Throbbing pain that fails to respond to maximum permitted doses of ibuprofen or acetaminophen.
              </p>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 5: Emergency Treatment Options */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-12">
            <span className="font-body text-13 text-forest-ink/60 block mb-2">
              Clinical Interventions
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink">
              Procedures performed during emergency visits
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animation="fade-up" duration={0.8}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Microscopic Pulpotomy / Debridement</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Immediate removal of inflamed pulpal nerve tissue to eliminate agonizing toothache pain instantly.
              </p>
              <Link href="/root-canal/" className="font-body text-13 text-forest underline">
                Endodontic details →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.1}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Trauma Splinting & Reimplantation</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Biological socket debridement, gentle tooth repositioning, and flexible periodontal wire stabilization.
              </p>
              <Link href="/dental-implants/" className="font-body text-13 text-forest underline">
                Implant replacement options →
              </Link>
            </div></AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.2}><div className="p-6 bg-paper border border-mist">
              <h3 className="font-display text-21 text-forest-ink mb-2">Abscess Incision & Decompression</h3>
              <p className="font-body text-13 text-forest-ink/80 leading-relaxed mb-4">
                Localized surgical decompression to release trapped infection pressure, accompanied by targeted antibiotics.
              </p>
              <Link href="/contact/" className="font-body text-13 text-forest underline">
                Clinic contact desk →
              </Link>
            </div></AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7: Same-Day Information & Direct Emergency Contact */}
      <section className="py-16 md:py-24 border-b border-mist bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-lime uppercase tracking-wider block mb-2 font-medium">
                Immediate Telephone Triage
              </span>
              <h2 className="font-display text-33 md:text-41 text-paper mb-4">
                Speak directly with our on-call dental team
              </h2>
              <p className="font-body text-17 text-paper/90 leading-relaxed mb-8 max-w-2xl">
                We accept emergency calls 24 hours a day, 7 days a week. Our clinical staff will immediately assess your symptoms, advise on pain management, and prepare our surgical suite for your arrival.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
                  variant="lime"
                  size="lg"
                  className="font-bold text-17"
                >
                  Call {CLINIC_INFO.contact.emergencyPhone}
                </Button>
                <Button
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  variant="ghost"
                  size="lg"
                  className="text-paper border-paper/30 hover:border-paper hover:bg-paper/10"
                >
                  WhatsApp Clinical Desk
                </Button>
              </div>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-4 p-6 bg-paper/10 border border-mist/20">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-lime block mb-2 font-medium">
                Walk-In Triage Policy
              </span>
              <p className="font-body text-13 text-paper/80 leading-relaxed">
                While we recommend calling ahead so we can prepare a sterile suite, true acute dental trauma walk-ins are welcomed directly at our Civic Center pavilion during business hours.
              </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Location & Opening Hours */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Location</span>
              <h2 className="font-display text-26 md:text-33 text-forest-ink mb-4">
                How to reach our emergency clinic
              </h2>
              <address className="not-italic font-body text-15 text-forest-ink/80 leading-relaxed mb-4">
                {CLINIC_INFO.name}
                <br />
                {CLINIC_INFO.primaryLocation.street}, {CLINIC_INFO.primaryLocation.suite}
                <br />
                {CLINIC_INFO.primaryLocation.city}, {CLINIC_INFO.primaryLocation.state} {CLINIC_INFO.primaryLocation.postalCode}
              </address>
              <p className="font-body text-13 text-forest-ink/70">
                {CLINIC_INFO.primaryLocation.directions}
              </p>
              </AnimateOnScroll>
            </div>

            <div className="lg:col-span-6">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">Operating Hours</span>
              <div className="border border-mist divide-y divide-mist bg-paper font-body text-13">
                <div className="p-3 flex justify-between">
                  <span>Monday – Thursday</span>
                  <span className="tabular-nums">08:00 – 17:30</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span>Friday</span>
                  <span className="tabular-nums">08:00 – 16:30</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span>Saturday</span>
                  <span className="tabular-nums">09:00 – 14:00</span>
                </div>
                <div className="p-3 flex justify-between bg-mist/40 text-forest font-medium">
                  <span>Sunday & After-Hours</span>
                  <span>24/7 On-Call Triage Phone</span>
                </div>
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Emergency FAQs */}
      <section className="py-16 md:py-24 border-b border-mist">
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" duration={0.8}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2">FAQs</span>
              <h2 className="font-display text-33 md:text-41 text-forest-ink mb-4">
                Emergency care FAQs
              </h2>
              </AnimateOnScroll>
            </div>
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left" duration={0.8} delay={0.2}>
              <Accordion items={EMERGENCY_FAQS} />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Final Emergency Action CTA */}
      <section className="py-16 md:py-24 bg-forest text-paper">
        <div className="max-w-site mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          <AnimateOnScroll animation="fade-up" duration={0.8} className="flex flex-col items-center">
          <h2 className="font-display text-33 md:text-41 text-paper mb-4">
            Do not endure severe dental pain.
          </h2>
          <p className="font-body text-15 md:text-17 text-paper/80 mb-8 max-w-xl">
            Our Doctor is here to help relieve your pain and preserve your natural tooth structure.
          </p>
          <Button
            href={`tel:${CLINIC_INFO.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
            variant="lime"
            size="lg"
            className="font-bold text-17"
          >
            Call {CLINIC_INFO.contact.emergencyPhone}
          </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
