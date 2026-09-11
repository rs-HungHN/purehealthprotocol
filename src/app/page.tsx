"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Activity,
  Heart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Sparkles,
  Award,
  Zap,
  Clock,
  MapPin,
  FileText,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Microscope,
  Calendar,
  AlertCircle
} from "lucide-react";

export default function PureHealthHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const partnerUrl = "https://partners.superpower.com/derek-cole";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center selection:bg-blue-600 selection:text-white">
      {/* Top Notification Banner */}
      <div className="w-full bg-blue-900 text-blue-100 text-xs sm:text-sm py-2 px-4 text-center font-medium border-b border-blue-800">
        <span className="inline-flex items-center gap-1.5 font-semibold text-white">
          <ShieldCheck className="w-4 h-4 text-blue-300" />
          100% HSA & FSA Eligible Nationwide across all 50 US States
        </span>
        <span className="mx-2 hidden md:inline">•</span>
        <span className="hidden md:inline">Over 2,000+ CLIA-Certified Quest Diagnostics Lab Locations</span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                PureHealth<span className="text-blue-600 font-bold">Protocol</span>
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-600">
                Clinical Longevity Intelligence
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#biomarkers" className="hover:text-blue-600 transition-colors">100+ Biomarkers</a>
            <a href="#comparison" className="hover:text-blue-600 transition-colors">Routine vs PureHealth</a>
            <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#clinical-showcase" className="hover:text-blue-600 transition-colors">Clinical Tech</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          <a
            href={partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Order Panel ($199)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero Section: Split 2-Column Clinical Layout */}
      <section className="w-full bg-white border-b border-slate-200/80 pt-12 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Clinical Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Advanced Preventative Diagnostics
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              The 100+ Biomarker Blood Test <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Standard Medicine Ignores.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
              Routine medical annual physicals only check 15 to 20 basic markers—missing critical early warning indicators for heart disease, insulin resistance, hormone imbalances, and cellular aging.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Measures ApoB, hs-CRP, Fasting Insulin, Hormone Matrix, and Micronutrients</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Biological Age Score & Doctor-designed personalized clinical roadmap</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Visit any of 2,000+ Quest Diagnostics labs or request an at-home phlebotomist</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-lg shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Get Full 100+ Panel ($199/yr)</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="text-xs text-slate-600 flex flex-col justify-center">
                <span className="font-bold text-slate-700">Save $300 vs Function Health ($499)</span>
                <span>No surprise bills. No medical insurance required.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Clinical Biomarker Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl shadow-blue-900/10 relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Diagnostic Protocol</span>
                  <span className="text-lg font-black text-slate-900">Comprehensive Longevity Panel</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold">
                  CLIA / CAP Certified
                </span>
              </div>

              {/* Biological Age Metric */}
              <div className="my-6 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">Biological Age Metric</span>
                  <span className="text-2xl font-black text-slate-900">36.4 Years</span>
                  <span className="text-xs text-slate-600 block">Chronological Age: 41.0 Yrs</span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-blue-800 bg-white px-2.5 py-1 rounded-lg shadow-xs">
                    <TrendingDown className="w-4 h-4 text-blue-600" /> -4.6 Yrs Younger
                  </span>
                  <span className="text-[10px] text-slate-600 block mt-1">Cellular Pace: 0.88x</span>
                </div>
              </div>

              {/* Sample Core Markers */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      ApoB
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">Apolipoprotein B</span>
                      <span className="text-[11px] text-slate-600">Cardiovascular Particle Density</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-slate-900">62 mg/dL</span>
                    <span className="text-[10px] font-bold text-blue-700 block">● Optimal</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                      CRP
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">hs-CRP</span>
                      <span className="text-[11px] text-slate-600">Systemic Micro-Vascular Inflammation</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-slate-900">0.32 mg/L</span>
                    <span className="text-[10px] font-bold text-blue-700 block">● Low Risk</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      INS
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 block">Fasting Insulin</span>
                      <span className="text-[11px] text-slate-600">Metabolic & Longevity Predictor</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black text-slate-900">3.8 uIU/mL</span>
                    <span className="text-[10px] font-bold text-blue-700 block">● Optimal</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Total Biomarkers Tested: <strong>100+</strong></span>
                <span className="text-blue-600 font-bold">Reviewed by US Physicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Diagnostic Pillars */}
      <section id="biomarkers" className="w-full py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Complete Biological Scope</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Do 100+ Biomarkers Actually Cover?
          </h2>
          <p className="text-slate-600 text-base">
            While typical clinics only test standard lipid and basic metabolic panels, PureHealth Protocol tests all 6 critical biological health foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">1. Heart & Cardiovascular</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Goes far beyond basic cholesterol. Uncovers true heart risk with advanced lipoprotein subfractions.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• <strong>ApoB</strong> (Key atherogenic particle count)</div>
              <div>• <strong>Lipoprotein(a)</strong> & hs-CRP</div>
              <div>• Total, HDL, LDL & Triglycerides</div>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">2. Metabolic & Insulin Control</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Detect metabolic dysfunction and insulin resistance a decade before prediabetes develops.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• <strong>Fasting Insulin</strong> & HOMA-IR Score</div>
              <div>• <strong>Hemoglobin A1c (HbA1c)</strong></div>
              <div>• Fasting Glucose & Uric Acid</div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">3. Hormones & Vitality</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Understand energy, mood, recovery, muscle synthesis, and libido through detailed endocrine mapping.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• <strong>Free & Total Testosterone</strong></div>
              <div>• <strong>DHEA-S</strong>, Estradiol & SHBG</div>
              <div>• Cortisol & Adrenal Balance</div>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">4. Thyroid & Metabolism</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Evaluates basal metabolic rate, cold sensitivity, and thyroid autoimmunity indicators.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• <strong>TSH (Ultrasensitive)</strong></div>
              <div>• <strong>Free T3 & Free T4</strong></div>
              <div>• Thyroid Antibodies (TPO)</div>
            </div>
          </div>

          {/* Pillar 5 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">5. Liver, Kidney & Organ Health</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comprehensive organ screening to identify fatty liver stress, kidney filtration rate, and electrolyte balance.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• <strong>eGFR & Creatinine</strong> (Kidney)</div>
              <div>• <strong>ALT, AST & Bilirubin</strong> (Liver)</div>
              <div>• Electrolyte & Mineral Balance</div>
            </div>
          </div>

          {/* Pillar 6 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">6. Nutrients & Cellular Aging</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Identifies micronutrient deficiencies, iron overload, and epigenetic biological age calculations.
            </p>
            <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-700 space-y-1">
              <div>• <strong>Vitamin D (25-OH) & B12</strong></div>
              <div>• <strong>Ferritin & Iron Capacity</strong></div>
              <div>• <strong>Biological Age Calculation</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Showcase: Visual Clinical Assets */}
      <section id="clinical-showcase" className="w-full py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {/* Row 1: Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Visual Clinical Platform</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                100+ Biomarkers Visualized In A Single Unified Dashboard
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Never stare at confusing, unformatted paper PDF lab results again. Superpower translates your complex blood data into an intuitive, color-coded interactive clinical dashboard highlighting optimal versus standard reference ranges.
              </p>
              <div className="pt-2">
                <a href={partnerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 text-sm">
                  <span>Explore dashboard features</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="/biomarkers_dashboard.png"
                alt="Superpower Biomarkers Dashboard"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Row 2: Biological Age */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="/biological_age_score.png"
                alt="Biological Age Score"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Epigenetic Speed</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Measure Your True Biological Age vs. Chronological Clock
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Your chronological age is simply the date on your passport. Your biological age measures the cellular integrity of your cardiovascular, metabolic, and immune systems. Identify cellular deceleration strategies before chronic damage occurs.
              </p>
              <div className="pt-2">
                <a href={partnerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 text-sm">
                  <span>Calculate your biological age</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Row 3: Action Plan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Doctor-Guided Strategy</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Personalized Clinical Action Plan Curated By Licensed Physicians
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Data without guidance is useless. Every PureHealth protocol includes actionable, evidence-based recommendations tailored directly to your unique blood chemistry—spanning targeted nutrition, zone-2 training, and proven longevity protocols.
              </p>
              <div className="pt-2">
                <a href={partnerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 text-sm">
                  <span>View sample action plan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="/clinical_action_plan.png"
                alt="Clinical Action Plan"
                width={600}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Light-Mode Comparison Matrix */}
      <section id="comparison" className="w-full py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Market Clarity</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How PureHealth Compares to Routine Care & Competitors
          </h2>
          <p className="text-slate-600 text-base">
            See the exact differences in biomarker depth, pricing transparency, and diagnostic convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Traditional Doctor */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Standard Healthcare</span>
              <h3 className="text-xl font-bold text-slate-900">Routine Doctor Visit</h3>
              <div className="text-3xl font-black text-slate-900">$200 - $800+</div>
              <p className="text-xs text-slate-600">Surprise co-pays, insurance deductibles, and hospital lab facility fees.</p>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2 text-slate-600">✕ Only 15-20 basic markers</div>
                <div className="flex items-center gap-2 text-slate-600">✕ Skips ApoB, Fasting Insulin & Hormones</div>
                <div className="flex items-center gap-2 text-slate-600">✕ Reactive care (only checks when sick)</div>
                <div className="flex items-center gap-2 text-slate-600">✕ Clunky paper PDF lab reports</div>
                <div className="flex items-center gap-2 text-slate-600">✕ No biological age scoring</div>
              </div>
            </div>
          </div>

          {/* Card 2: PureHealth / Superpower (POPULAR / HIGHLIGHTED) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-600 shadow-xl shadow-blue-600/10 flex flex-col justify-between relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              Most Advanced & Cost-Effective
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">PureHealth Longevity Protocol</span>
              <h3 className="text-2xl font-black text-slate-900">100+ Biomarker Panel</h3>
              <div className="text-4xl font-black text-blue-600">$199<span className="text-base font-medium text-slate-600">/year</span></div>
              <p className="text-xs font-semibold text-blue-800">Flat rate. Zero surprise billing. 100% HSA/FSA eligible.</p>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2 text-blue-700">✓ 100+ comprehensive biomarkers tested</div>
                <div className="flex items-center gap-2 text-blue-700">✓ Includes ApoB, hs-CRP, Fasting Insulin</div>
                <div className="flex items-center gap-2 text-blue-700">✓ Full Hormone & Metabolic matrix</div>
                <div className="flex items-center gap-2 text-blue-700">✓ Biological Age cellular calculations</div>
                <div className="flex items-center gap-2 text-blue-700">✓ At-home draw or 2,000+ Quest lab visits</div>
                <div className="flex items-center gap-2 text-blue-700">✓ Physician-reviewed clinical roadmap</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={partnerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-center block shadow-lg shadow-blue-600/25 transition-all"
              >
                Order 100+ Panel ($199/yr)
              </a>
            </div>
          </div>

          {/* Card 3: Function Health */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Competitor</span>
              <h3 className="text-xl font-bold text-slate-900">Function Health</h3>
              <div className="text-3xl font-black text-slate-900">$499<span className="text-base font-medium text-slate-600">/year</span></div>
              <p className="text-xs text-slate-600">Annual direct-to-consumer lab membership subscription.</p>

              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">✓ 100+ biomarkers tested</div>
                <div className="flex items-center gap-2">✓ Includes ApoB & hs-CRP</div>
                <div className="flex items-center gap-2 text-amber-600 font-bold">✕ $300 more expensive per year</div>
                <div className="flex items-center gap-2 text-slate-600">✕ Long membership waitlists</div>
                <div className="flex items-center gap-2 text-slate-600">✕ Strict lab scheduling policies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-20 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Effortless Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              3 Simple Steps to Complete Visibility
            </h2>
            <p className="text-slate-600 text-sm">
              From online order to doctor-reviewed results in under 5 business days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Order Online in 60s</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Secure your 100+ biomarker panel membership online ($199/yr). Pay seamlessly with your HSA/FSA debit card or credit card.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Convenient Blood Draw</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Walk into any of 2,000+ certified Quest Diagnostics locations nationwide with no appointment needed, or schedule an in-home phlebotomist visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Doctor-Guided Action Plan</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access your interactive biological results, epigenetic age score, and personalized longevity lifestyle protocol directly in your portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Frequently Asked Questions</span>
          <h2 className="text-3xl font-black text-slate-900">Everything You Need to Know</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I use my HSA or FSA to pay for this?",
              a: "Yes, absolutely. Because Superpower’s 100+ biomarker panel is physician-ordered preventative medicine, it is 100% eligible for reimbursement under Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA)."
            },
            {
              q: "Where do I get my blood drawn?",
              a: "You have two easy options across all 50 US states: walk into any of 2,000+ certified Quest Diagnostics lab locations nationwide, or request an at-home certified phlebotomist visit to draw your blood in the comfort of your living room."
            },
            {
              q: "Why doesn't my primary care doctor order these tests?",
              a: "Traditional insurance-based medicine is strictly reactive: insurance companies typically will not cover advanced tests like ApoB, Fasting Insulin, or full hormone panels unless you already exhibit symptomatic chronic illness. Superpower bypasses insurance hurdles with direct-to-consumer transparent pricing."
            },
            {
              q: "Is there any surprise billing or extra lab fees?",
              a: "None whatsoever. The $199/year fee includes your physician lab requisition order, the laboratory draw and processing, the digital dashboard, biological age score, and your doctor-curated action plan."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span>{item.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Sticky-like CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Stop Guessing Your Health. Measure 100+ Biomarkers Today.
          </h2>
          <p className="text-blue-200 text-base">
            Take proactive control of your cardiovascular, metabolic, and hormonal longevity with America's leading clinical protocol.
          </p>
          <div className="pt-2">
            <a
              href={partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-9 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-black text-lg shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Order 100+ Protocol ($199/yr)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <span className="text-xs text-blue-300 block">
            100% HSA/FSA Eligible • 2,000+ Quest Diagnostics Locations • Zero Surprise Fees
          </span>
        </div>
      </section>

      {/* Clean Clinical Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-12 px-4 sm:px-6 text-slate-600 text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              P
            </div>
            <span className="font-bold text-slate-900 text-sm">PureHealth Protocol</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="mailto:contact@purehealthprotocol.shop" className="hover:text-blue-600">
              contact@purehealthprotocol.shop
            </a>
          </div>

          <div className="text-center md:text-right text-[11px] text-slate-600">
            © 2026 PureHealth Protocol. All rights reserved. Not intended as medical diagnosis or treatment advice.
          </div>
        </div>
      </footer>
    </div>
  );
}
