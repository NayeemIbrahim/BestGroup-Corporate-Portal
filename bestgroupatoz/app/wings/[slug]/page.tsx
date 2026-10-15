import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWingBySlug, getAllWings, WingDetail } from '@/data/wings';
import { getPageData } from '@/lib/api';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WingInquiryForm } from './WingInquiryForm';
import { WingFaqAccordion } from './WingFaqAccordion';
import {
  ShoppingBag,
  Briefcase,
  Truck,
  ShieldCheck,
  Building2,
  Building,
  Wrench,
  Layers,
  HeartPulse,
  Plane,
  Compass,
  Users,
  PieChart,
  MapPin,
  Home,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Award,
} from 'lucide-react';

interface WingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map string icon names to Lucide icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  Briefcase,
  Truck,
  ShieldCheck,
  Building2,
  Building,
  Wrench,
  Layers,
  HeartPulse,
  Plane,
  Compass,
  Users,
  PieChart,
  MapPin,
  Home,
};

export async function generateMetadata({ params }: WingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const wing = getWingBySlug(slug);

  if (!wing) {
    return {
      title: 'Business Wing Not Found | BEST GROUP',
    };
  }

  return {
    title: `${wing.name} | BEST GROUP Listed Enterprise`,
    description: wing.tagline,
  };
}

export default async function WingDetailPage({ params }: WingPageProps) {
  const { slug } = await params;
  const wing = getWingBySlug(slug);

  if (!wing) {
    notFound();
  }

  const cmsData = await getPageData('home');
  const theme = cmsData?.theme || null;
  const settings = cmsData?.settings;

  const allWings = getAllWings();
  const currentIndex = allWings.findIndex((w) => w.slug === wing.slug);
  const prevWing = allWings[(currentIndex - 1 + allWings.length) % allWings.length];
  const nextWing = allWings[(currentIndex + 1) % allWings.length];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Main Navbar */}
      <Navbar theme={theme} settings={settings} />

      {/* Main Content Area (Offset below fixed top navbar) */}
      <main className="flex-1 w-full pt-[108px] lg:pt-[120px]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
          {/* Subtle Ambient Background Gradients */}
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 pointer-events-none"
            style={{ backgroundColor: wing.glowColor }}
          />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] bg-red-600/10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
              <Link href="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <Link href="/our-sister-concern" className="hover:text-amber-400 transition-colors">
                Listed Wings
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-amber-400 font-semibold">{wing.brandName}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Title & Mission */}
              <div className="lg:col-span-7">
                {/* Sector Badge */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                    WING {wing.wingNumber} • {wing.badgeText}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  {wing.name}
                </h1>

                <p className="text-lg sm:text-xl font-medium text-amber-400/90 mt-3 leading-snug">
                  {wing.tagline}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-6 text-justify">
                  {wing.executiveSummary}
                </p>

                {/* Quick CTA Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#inquiry"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
                  >
                    <span>Submit Wing Inquiry / RFP</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`tel:${wing.contact.hotline.split('/')[0].trim()}`}
                    className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 text-slate-200 hover:text-white font-mono text-xs transition-all duration-300 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Hotline: {wing.contact.hotline.split('/')[0].trim()}</span>
                  </a>
                </div>

                {/* Accreditations Strip */}
                <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
                  {wing.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white leading-none">{cert.name}</span>
                        <span className="text-[10px] text-slate-400 mt-0.5">{cert.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Hero Banner Image & Quick Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/80 group">
                  <div className="relative h-[380px] sm:h-[420px] w-full bg-slate-900">
                    <img
                      src={wing.heroImage}
                      alt={wing.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  {/* Floating Overlay Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                        Enterprise Division
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                        Active SLA
                      </span>
                    </div>
                    <div className="text-white font-bold text-sm">{wing.sector}</div>
                    <div className="text-slate-400 text-xs mt-1">
                      HQ Liaison: {wing.contact.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Glowing Metric KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
              {wing.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-400 group-hover:from-amber-400 group-hover:to-red-500 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-2 font-mono">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Mission & Vision Split Section */}
        <section className="py-16 bg-slate-900/40 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Strategic Mission</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {wing.strategicMission}
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Strategic Vision</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {wing.strategicVision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chairman's Sector Directive */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-3 flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl mb-3">
                    <Image
                      src={wing.leadershipQuote.avatar}
                      alt={wing.leadershipQuote.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="font-bold text-white text-sm">{wing.leadershipQuote.author}</div>
                  <div className="text-[11px] font-mono text-amber-400 mt-0.5">
                    {wing.leadershipQuote.designation}
                  </div>
                </div>

                <div className="lg:col-span-9 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-10">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                    Chairman&apos;s Strategic Directive for {wing.brandName}
                  </span>
                  <blockquote className="text-lg sm:text-xl font-medium text-slate-200 italic leading-relaxed">
                    &ldquo;{wing.leadershipQuote.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Executive Board Governance • BEST GROUP Corporate Charter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Divisions & Capabilities Matrix */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Operational Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Core Divisions &amp; Enterprise Services
              </h2>
              <p className="text-slate-400 text-sm mt-3">
                Specialized functional units delivering benchmark execution, reliability, and client value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wing.divisions.map((div, dIdx) => {
                const IconComponent = ICON_MAP[div.icon] || Building2;
                return (
                  <div
                    key={dIdx}
                    className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 via-red-500/10 to-transparent border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                            Division 0{dIdx + 1}
                          </span>
                          <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                            {div.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        {div.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                        {div.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Flagship Projects & Operational Assets */}
        <section className="py-20 bg-slate-900/30 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                  Enterprise Portfolio
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  Flagship Operations &amp; Projects
                </h2>
                <p className="text-slate-400 text-sm mt-2 max-w-xl">
                  A tangible look into the physical infrastructure, facilities, and active initiatives driving this wing.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active Operating Portfolio</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wing.projects.map((proj, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 text-amber-400 border border-slate-800 backdrop-blur-md">
                          {proj.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md ${
                            proj.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                              : proj.status === 'Flagship'
                              ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                              : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          }`}
                        >
                          {proj.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80">
                      {proj.specs.map((spec, spIdx) => (
                        <div key={spIdx} className="text-center">
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                            {spec.label}
                          </div>
                          <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Locations Strip */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                Geographic Presence
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Primary Operating Facilities &amp; Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wing.keyLocations.map((loc, lIdx) => (
                <div
                  key={lIdx}
                  className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
                      {loc.type}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1">{loc.facility}</h4>
                    <p className="text-xs text-slate-400 mt-1">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client & Investor FAQs Section */}
        <section className="py-20 bg-slate-900/40 border-y border-slate-800/80">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                Transparency &amp; Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Key operational details and commercial policies governing {wing.brandName}.
              </p>
            </div>

            <WingFaqAccordion faqs={wing.faqs} />
          </div>
        </section>

        {/* Dedicated Wing RFP & Inquiry Form Section */}
        <section id="inquiry" className="py-20 bg-slate-950 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Desk Details */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-2 block">
                  Direct Wing Engagement
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                  Connect Directly with {wing.brandName}
                </h2>
                <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                  Submit commercial proposals, request wholesale supply schedules, book site visits, or initiate institutional tenders. Inquiries are routed immediately to the designated desk director.
                </p>

                {/* Desk Card */}
                <div className="mt-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
                  <div className="flex items-start gap-3.5">
                    <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Executive Liaison Desk</div>
                      <div className="text-sm font-bold text-white mt-0.5">{wing.contact.desk}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Direct Hotlines</div>
                      <div className="text-sm font-bold text-white mt-0.5">{wing.contact.hotline}</div>
                      <div className="text-xs text-slate-400">PABX: {wing.contact.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Departmental Email</div>
                      <div className="text-sm font-bold text-white mt-0.5">{wing.contact.email}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Operating Hours</div>
                      <div className="text-xs text-slate-300 mt-0.5">{wing.contact.hours}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase">Central Secretariat</div>
                      <div className="text-xs text-slate-300 mt-0.5">{wing.contact.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive RFP Form */}
              <div className="lg:col-span-7">
                <WingInquiryForm wingName={wing.name} wingSlug={wing.slug} />
              </div>
            </div>
          </div>
        </section>

        {/* Previous & Next Wing Navigation Jump Footer */}
        <section className="py-12 bg-slate-900/60 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Wing */}
              <Link
                href={`/wings/${prevWing.slug}`}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl group flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 text-slate-300 group-hover:text-amber-400 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                      Previous Wing 0{prevWing.wingNumber}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {prevWing.brandName}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Next Wing */}
              <Link
                href={`/wings/${nextWing.slug}`}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl group flex items-center justify-between text-right"
              >
                <div className="flex items-center gap-4 ml-auto">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
                      Next Wing 0{nextWing.wingNumber}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {nextWing.brandName}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-amber-500/40 text-slate-300 group-hover:text-amber-400 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Dynamic Global Footer */}
      <Footer theme={theme} settings={settings} />
    </div>
  );
}
