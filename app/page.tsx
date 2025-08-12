"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart, Users, Shield, Sparkles, Download, Star, Play,
  CheckCircle, Layers, Activity
} from 'lucide-react';
import BrandNavbar from '../components/BrandNavbar';
import FAQSection from '../components/FAQSection';

export default function Home() {
  // Stats from content.txt
  const stats = [
    { number: "50K+", label: "People reached" },
    { number: "100+", label: "Licensed Therapists" },
    { number: "100+", label: "Peer Supporters (Rafikis)" },
    { number: "10M", label: "Targeted across Africa" }
  ];

  // Features from content.txt
  const features = [
    {
      icon: Heart,
      title: "Professional Therapy",
      blurb: "Book affordable sessions with licensed therapists.",
      detail: "Access specialists in CBT, trauma, grief, and more. Quality mental health care tailored to your needs."
    },
    {
      icon: Users,
      title: "Rafiki Peer Support",
      blurb: "Chat with trained peers who understand your journey.",
      detail: "Rafikis offer a listening ear, share lived experience, and connect you to the right resources."
    },
    {
      icon: Layers,
      title: "Boma Support Groups",
      blurb: "Safe, peer-led spaces for connection and growth.",
      detail: "Join judgment-free groups guided by mental health champions. Share, learn, and build resilience together."
    },
    {
      icon: Sparkles,
      title: "Cradle Media Center",
      blurb: "Podcasts, videos, articles, and art for healing.",
      detail: "A rich library to inspire, educate, and support your journey—curated for young people."
    },
    {
      icon: Activity,
      title: "Wellness Tools",
      blurb: "Track your mood and progress over time.",
      detail: "Self-assessments and optional analytics put your mental wellness journey in your hands."
    }
  ];

  // Why Boma bullets
  const whyBoma = [
    {
      title: "Layered Care Model",
      desc: "The perfect blend of professional expertise and peer support you can relate to."
    },
    {
      title: "Anonymity & Safety",
      desc: "Share openly and get help without revealing your identity."
    },
    {
      title: "Always Accessible",
      desc: "Digital-first design means support is with you anytime, anywhere."
    },
    {
      title: "Affordable Support",
      desc: "Free access to most features; therapy sessions are paid but kept affordable."
    }
  ];

  // How it works steps
  const howItWorks = [
    {
      step: "1",
      title: "Download & Sign Up",
      desc: "Create your profile and complete a brief wellness assessment."
    },
    {
      step: "2",
      title: "Get Matched",
      desc: "Connect with the right therapist, Rafiki, or community."
    },
    {
      step: "3",
      title: "Start Healing",
      desc: "Access resources, join conversations, and track your progress."
    }
  ];

  // Testimonials from content.txt
  const testimonials = [
    {
      name: "Rafiki",
      role: "Peer Supporter",
      content: "I have removed a lot of stigma around mental health by the fact that I have information on it. I know that me having mental health issues, does not make me any less of a person, does not make me any less deserving. I feel like everyone who gets knowledge of mental health, knows how to embrace themselves and I think that is a powerful thing to do.",
      rating: 5
    },
    {
      name: "Griffin",
      role: "Rafiki",
      content: "I found a safe space and community in Nakujali and this has helped me improve my resilience. Today, I am not ashamed to share my story; I use it to raise awareness and help destigmatize suicide and mental health. I support 20 youths in my group and look forward to increasing my reach to thousands of others in my community.",
      rating: 5
    },
    {
      name: "Austin",
      role: "Therapy Client",
      content: "When I first heard about therapy, I assumed it was only for people with psychological issues. I never imagined it was something I needed, believing I had everything under control—or so I thought. Wow, was I wrong! I didn't realize how much I needed therapy until I reached out to Mental 360 and had my first session. Over the months, I've discovered so much about myself, my thought processes, and habits I wasn't even aware of. It's been an incredible journey, opening doors to self-reflection and growth. I truly believe I'm becoming a better man because of this decision. Now, I'm a strong advocate for therapy and grateful I took that first step. Thank you, Mental 360, for being with me on this journey!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#244C93]/6 via-[#244C93]/3 to-[#E27A28]/10">
      <BrandNavbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-[#244C93]/10 text-[#244C93]">
              <Sparkles className="h-4 w-4 mr-2 text-[#E27A28]" />
              Award-winning · Facebook Accelerator
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Your safe, digital sanctuary for mental health
            <span className="block text-[#244C93]">where professional care meets community connection</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Award-winning innovation recognized by the Facebook Accelerator Program for its impact and scalability.<br />
            Your mental wellness journey starts here — download Boma now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#244C93] hover:bg-[#1d3d78] text-white px-8 py-4 text-lg">
              <Download className="h-5 w-5 mr-2" />
              Download on App Store
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover:bg-[#E27A28]/10 border-[#E27A28] text-[#244C93]">
              <Download className="h-5 w-5 mr-2 text-[#E27A28]" />
              Get it on Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features Overview */}
      <section id="features" className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#244C93]/5 to-white" />
        <div className="container mx-auto px-4 py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-[#244C93]">
              Practical mental health support that fits real life
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Your safe space, all in one app! Connect with licensed therapists, Rafikis, and vibrant topic-based communities built just for you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="group border border-[#244C93]/10 shadow-sm hover:shadow-md transition bg-white/95">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#244C93] to-[#1d3d78] flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
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
      </section>

      {/* Why Boma */}
      <section className="bg-[#244C93]/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-[#244C93] mb-4">Why Boma?</h2>
            <p className="text-lg text-slate-700">The perfect blend of professional expertise and peer support you can relate to.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {whyBoma.map((item) => (
              <div key={item.title} className="rounded-lg bg-white border border-[#244C93]/10 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#244C93] mb-2">{item.title}</h3>
                <p className="text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Take the first step to better mental health</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-[#244C93]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#244C93]">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
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

      {/* Download CTA */}
      <section id="download" className="bg-gradient-to-r from-[#244C93] to-[#1d3d78] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Connect. Heal. Grow.</h2>
          <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
            Take the first step to better mental health - download Boma today and find your safe space.<br />
            Join thousands already finding hope and connection through Boma.
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
          <div className="flex flex-col items-center justify-center space-y-2 mt-6">
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="h-5 w-5" />
              <span>Free to Download</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle className="h-5 w-5" />
              <span>24/7 Helpline: <a href="tel:+254710360360" className="underline">+254710360360</a></span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-[#E27A28]" />
                <span className="text-xl font-bold">Boma</span>
              </div>
              <p className="text-gray-400 mb-4">
                Supporting mental health journeys with professional care and community connection.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#244C93] transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#244C93] transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#244C93] transition-colors cursor-pointer">
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
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Boma. All rights reserved.</p>
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