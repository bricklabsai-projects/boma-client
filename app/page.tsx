import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Shield, Sparkles, Download, Star, Play, CheckCircle, ArrowRight, Smartphone, Globe, Lock } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: "Professional Therapy",
      description: "Connect with licensed therapists who understand your unique needs and provide personalized care.",
      color: "text-pink-500"
    },
    {
      icon: Users,
      title: "Rafiki Support",
      description: "Connect with trained peer supporters who've walked similar paths and can offer understanding.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Safe Communities",
      description: "Join supportive communities where you can share experiences and find belonging.",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      title: "Daily Inspiration",
      description: "Access daily inspirations and wellness content through our Craddle feature.",
      color: "text-purple-500"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-gray-900">Boma</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-teal-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors">Reviews</a>
              <a href="#download" className="text-gray-600 hover:text-teal-600 transition-colors">Download</a>
              <Button variant="outline" className="hover:bg-teal-50">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Now Available on iOS & Android
            </span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Mental Health Journey
            <span className="block text-teal-600">Starts Here</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Boma connects you with professional therapists, peer supporters (Rafikis), 
            and supportive communities to help you thrive on your mental health journey. 
            Download our app and start your healing today.
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

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for your mental wellness journey, right in your pocket
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="text-center pb-4">
                  <Icon className={`h-12 w-12 ${feature.color} mx-auto mb-4`} />
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-teal-50">
            <CardHeader>
              <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-gray-900">Mobile First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Designed specifically for mobile use with intuitive touch interfaces and offline capabilities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <Lock className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-gray-900">Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                End-to-end encryption and HIPAA compliance ensure your conversations remain private and secure.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
            <CardHeader>
              <Globe className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-gray-900">24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Access support anytime, anywhere with our global network of therapists and peer supporters.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Boma Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start your mental health journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download & Sign Up</h3>
              <p className="text-gray-600">Create your account and complete a brief assessment to help us understand your needs.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Matched</h3>
              <p className="text-gray-600">We'll connect you with the right therapist, Rafiki, or community based on your preferences.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Healing</h3>
              <p className="text-gray-600">Begin your journey with personalized support, community connection, and daily inspiration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Download CTA */}
      <section id="download" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Join thousands who have found support, healing, and growth with Boma. 
            Download our app today and take the first step towards better mental health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Download className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg">
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

      {/* Footer */}
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