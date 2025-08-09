"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart, Users, Shield, Sparkles, Download, Star, Play,
  CheckCircle, Smartphone, Globe, Lock, Activity, BarChart2, Layers
} from 'lucide-react';
import BrandNavbar from '../components/BrandNavbar';
import FAQSection from '../components/FAQSection';

// ...existing code (testimonials, stats moved below)...

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: "Licensed Therapy",
      blurb: "Sessions with vetted professionals. Matched by specialty & availability.",
      detail: "Evidence‑based modalities (CBT, ACT, trauma‑informed approaches) delivered with flexible scheduling."
    },
    {
      icon: Users,
      title: "Peer (Rafiki) Support",
      blurb: "Trained peers who ‘get it’.",
      detail: "Structured peer frameworks: active listening, escalation paths, boundaries and burnout safeguards."
    },
    {
      icon: Shield,
      title: "Privacy & Safety",
      blurb: "Protected spaces you control.",
      detail: "Role‑based access, encrypted transit, compartmentalized storage, human + automated moderation signals."
    },
    {
      icon: Layers,
      title: "Communities",
      blurb: "Focused topical groups.",
      detail: "Smaller interest & condition cohorts foster relevance and reduce feed fatigue."
    },
    {
      icon: Activity,
      title: "Progress Tracking",
      blurb: "Momentum you can see.",
      detail: "Mood trends, adherence streaks, micro‑wins surfaced—opt‑in analytics only."
    },
    {
      icon: Sparkles,
      title: "Daily Momentum",
      blurb: "Small nudges, zero fluff.",
      detail: "Grounding prompts, reflection cues, and micro‑practices—context‑aware, adaptive to your usage cadence."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Boma User",
      content: "Boma changed my life. The therapists are amazing and the community support is incredible.",
      rating: 5
    },
    {
      name: "Michael K.",
      role: "Rafiki Supporter",
      content: "Being a Rafiki has been so rewarding. Helping others while continuing my own healing journey.",
      rating: 5
    },
    {
      name: "Emma D.",
      role: "Community Member",
      content: "I found my tribe in the anxiety support community. No longer feel alone in my struggles.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "500+", label: "Licensed Therapists" },
    { number: "1000+", label: "Peer Supporters" },
    { number: "4.9", label: "App Store Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#244C93]/6 via-[#244C93]/3 to-[#E27A28]/10">
      <BrandNavbar />

      {/* Hero Section (minor accent swap to brand blue/orange) */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-[#244C93]/10 text-[#244C93]">
              <Sparkles className="h-4 w-4 mr-2 text-[#E27A28]" />
              Now Available on iOS & Android
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Practical mental health support
            <span className="block text-teal-600">that fits real life</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Access licensed therapists, trained peers, and focused communities in one streamlined experience.
            Progress tools, not noise. Start where you are—build momentum week by week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg">
              <Download className="h-5 w-5 mr-2" />
              Download App
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover:bg-teal-50">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl">📱</div>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="text-2xl">🤖</div>
              <div>
                <div className="text-xs">Get it on</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (swap accent color) */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#244C93] mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved Comprehensive Support / Features Section */}
      <section id="features" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#244C93]/5 to-white" />
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#244C93]">
              Comprehensive Mental Health Support
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              A layered support model: professional guidance, peer relatability, structured communities, and data you own.
            </p>
          </div>

            {/* Intro + Key Value Card */}
          <div className="mb-14 grid gap-10 lg:grid-cols-3">
            <Card className="lg:col-span-1 border-[#244C93]/15 shadow-sm bg-white/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-[#244C93] flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-[#E27A28]" />
                  Why this model works
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Single‑channel approaches underperform. Boma stitches structured professional care with organic peer momentum and measurable micro‑progression.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-slate-600 space-y-3">
                <p><span className="font-medium text-[#244C93]">Retention:</span> Layered interaction types reduce drop‑off after week 3.</p>
                <p><span className="font-medium text-[#244C93]">Signal:</span> Progress telemetry highlights when to escalate support.</p>
                <p><span className="font-medium text-[#244C93]">Boundaries:</span> Role distinction prevents emotional overload.</p>
              </CardContent>
            </Card>

            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {features.slice(0,4).map(f => {
                const Icon = f.icon;
                return (
                  <Card key={f.title} className="group border border-[#244C93]/10 shadow-sm hover:shadow-md transition bg-white/95">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#244C93] to-[#1d3d78] flex items-center justify-center">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#E27A28] ring-2 ring-white" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold text-[#244C93]">
                            {f.title}
                          </CardTitle>
                          <p className="text-xs uppercase tracking-wide text-[#E27A28] font-medium mt-0.5">
                            {f.blurb}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-slate-600 leading-relaxed">
                      {f.detail}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Secondary Feature Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {features.slice(4).map(f => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="border border-[#244C93]/10 bg-white/90 hover:border-[#244C93]/30 transition">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-[#E27A28]/90 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-base font-semibold text-[#244C93]">
                        {f.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600 leading-relaxed">
                    <p className="font-medium text-slate-700">{f.blurb}</p>
                    <p className="mt-2">{f.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
            <Card className="relative overflow-hidden border-0 shadow-lg md:col-span-3 bg-gradient-to-r from-[#244C93] via-[#1d3d78] to-[#244C93]">
              <>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,#E27A28_0%,transparent_60%)]" />
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    Layered support, owned progress
                  </CardTitle>
                  <CardDescription className="text-slate-200">
                    You control what’s shared. Data portability is built‑in; exports don’t require a support ticket.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-slate-100 flex flex-wrap gap-x-6 gap-y-3">
                  {['Role clarity', 'Escalation signals', 'Adaptive prompts', 'Opt‑in metrics', 'Structured privacy', 'Open export'].map(tag => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </CardContent>
              </>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features (previous cards unified to brand palette) */}
      {/* ...removed old gradient blocks; optional if still needed keep above section instead... */}

      {/* How It Works (color tweaks) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Boma Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start your mental health journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#244C93]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#244C93]">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download & Sign Up</h3>
              <p className="text-gray-600">Create your account and complete a brief assessment to help us understand your needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#244C93]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#244C93]">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Matched</h3>
              <p className="text-gray-600">We'll connect you with the right therapist, Rafiki, or community based on your preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#244C93]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#244C93]">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Healing</h3>
              <p className="text-gray-600">Begin your journey with personalized support, community connection, and daily inspiration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (accent color adjust) */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">Real stories from real people on their healing journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Download CTA (brand gradient) */}
      <section id="download" className="bg-gradient-to-r from-[#244C93] to-[#1d3d78] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Join thousands who have found support, healing, and growth with Boma. 
            Download our app today and take the first step towards better mental health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-[#244C93] hover:bg-gray-100 px-8 py-4 text-lg">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-[#244C93] hover:bg-gray-100 px-8 py-4 text-lg">
              <Download className="h-5 w-5 mr-2" />
              Download for Android
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-teal-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Free to Download</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Footer (swap teal accents to brand blue/orange) */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold">Boma</span>
              </div>
              <p className="text-gray-400 mb-4">
                Supporting mental health journeys with professional care and community connection.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Professional Therapy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Peer Support</li>
                <li className="hover:text-white transition-colors cursor-pointer">Communities</li>
                <li className="hover:text-white transition-colors cursor-pointer">Daily Inspiration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-white transition-colors cursor-pointer">Crisis Resources</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Community Guidelines</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2025 Boma. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Download the app:</span>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                iOS
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Android
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}