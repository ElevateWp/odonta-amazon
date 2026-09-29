'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-paper/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-[#E6E1D2]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-paper/95 md:bg-paper/90 backdrop-blur-md py-3.5 sm:py-4 border-b border-[#E6E1D2] shadow-sm'
      }`}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - compact on mobile */}
        <Link
          href="/"
          className="group flex items-center gap-2 sm:gap-3 no-underline focus-visible:outline-offset-4 flex-shrink-0 min-w-0"
          aria-label="Clínica Odontológica Oral Integralle"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 bg-paper rounded-xl shadow-md border border-[#E6E1D2]/80 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Clínica Odontológica Oral Integralle"
              width={56}
              height={56}
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-display tracking-[-0.02em] font-bold text-[#252525] group-hover:text-[#737373] transition-colors leading-tight text-15 sm:text-17 md:text-18 lg:text-19 whitespace-nowrap">
              Oral Integralle
            </span>
          </div>
        </Link>

        {/* Desktop Primary Navigation (Active on xl screens >= 1200px) */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-8" aria-label="Main Navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              className={`font-body text-15 py-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
                pathname?.includes('dental-') ||
                pathname?.includes('root-canal') ||
                pathname?.includes('teeth-whitening') ||
                pathname?.includes('braces') ||
                pathname?.includes('cosmetic-dentistry')
                  ? 'text-[#252525] font-semibold'
                  : 'text-[#252525]/80 hover:text-[#737373] font-medium'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Treatments</span>
              <span
                className={`w-1.5 h-1.5 border-r border-b border-[#252525]/60 transition-transform duration-200 ${
                  servicesDropdownOpen ? '-rotate-135 -translate-y-0.5' : 'rotate-45 translate-y-[-2px]'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Dropdown Panel with Pure White Background and Smooth Shadow */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-4 pt-2 w-64 z-50 animate-fade-in">
                <div className="p-2 bg-paper border border-[#E6E1D2] shadow-[0_12px_36px_rgba(17,17,17,0.08)] rounded-2xl">
                  <div className="space-y-0.5">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}/`}
                        className={`block px-3.5 py-2 text-14 font-body transition-all duration-200 rounded-xl ${
                          pathname === `/${s.slug}/`
                            ? 'bg-[#F8F7F2] text-[#252525] font-semibold shadow-xs'
                            : 'text-[#252525]/85 hover:bg-[#F8F7F2]/50 hover:text-[#737373] hover:translate-x-1'
                        }`}
                      >
                        <span className="block font-medium">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/about/'
                ? 'text-[#252525] font-semibold'
                : 'text-[#252525]/80 hover:text-[#737373] font-medium'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/dentists/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/dentists')
                ? 'text-[#252525] font-semibold'
                : 'text-[#252525]/80 hover:text-[#737373] font-medium'
            }`}
          >
            Our Doctor
          </Link>

          <Link
            href="/blog/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname?.startsWith('/blog')
                ? 'text-[#252525] font-semibold'
                : 'text-[#252525]/80 hover:text-[#737373] font-medium'
            }`}
          >
            Clinical Journal
          </Link>

          <Link
            href="/contact/"
            className={`font-body text-15 py-2 transition-colors ${
              pathname === '/contact/'
                ? 'text-[#252525] font-semibold'
                : 'text-[#252525]/80 hover:text-[#737373] font-medium'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA / Phone + Emergency */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/emergency-dentist/"
            className="hidden md:inline-flex font-body text-12 sm:text-13 font-semibold text-[#242424] bg-[#D4AF0A] hover:bg-[#E8C51A] px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full transition-colors shadow-sm whitespace-nowrap"
          >
            Emergency 24/7
          </Link>

          <Button
            href="/book-appointment/"
            variant="forest"
            size="sm"
            className="hidden sm:inline-flex text-12 sm:text-13 px-3.5 py-1.5 sm:px-4 sm:py-2 font-medium whitespace-nowrap"
          >
            Book Appointment
          </Button>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#252525] focus-visible:outline-offset-2 flex items-center justify-center cursor-pointer rounded-lg hover:bg-[#F8F7F2] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[2px] bg-[#252525] transition-transform duration-250 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#252525] transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-full h-[2px] bg-[#252525] transition-transform duration-250 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      <div
        className={`xl:hidden fixed inset-x-0 top-full h-[calc(100dvh-100%)] bg-paper border-t border-[#E6E1D2] overflow-y-auto px-6 py-6 flex flex-col justify-between z-[999] transition-all duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <span className="font-body text-12 text-[#252525] font-bold uppercase tracking-wider">
            Treatments & Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-body text-15 py-1.5 transition-colors ${
                  pathname === `/${s.slug}/` ? 'text-[#252525] font-semibold' : 'text-[#252525] hover:text-[#737373]'
                }`}
              >
                {s.navLabel}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E6E1D2] flex flex-col space-y-3">
            <Link
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/about/' ? 'text-[#252525] font-semibold' : 'text-[#252525] hover:text-[#737373]'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/dentists/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/dentists') ? 'text-[#252525] font-semibold' : 'text-[#252525] hover:text-[#737373]'
              }`}
            >
              Our Doctor
            </Link>
            <Link
              href="/emergency-dentist/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 font-semibold text-[#252525] hover:underline`}
            >
              Emergency Dentist (Urgent Care 24/7)
            </Link>
            <Link
              href="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname?.startsWith('/blog') ? 'text-[#252525] font-semibold' : 'text-[#252525] hover:text-[#737373]'
              }`}
            >
              Clinical Journal (Blog)
            </Link>
            <Link
              href="/contact/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-body text-16 transition-colors ${
                pathname === '/contact/' ? 'text-[#252525] font-semibold' : 'text-[#252525] hover:text-[#737373]'
              }`}
            >
              Contact & Hours
            </Link>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#E6E1D2] flex flex-col gap-3 pb-8">
          <Button
            href="/book-appointment/"
            variant="forest"
            size="lg"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Button>
          <a
            href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="text-center font-body text-15 text-[#252525] py-2 font-semibold hover:text-[#737373] transition-colors"
          >
            Call {CLINIC_INFO.contact.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
