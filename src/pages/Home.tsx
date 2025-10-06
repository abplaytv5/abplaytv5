import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play, Check, Star, Users, Tv, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import heroDevice from "@/assets/hero-device.jpg";
import contentGrid from "@/assets/content-grid.jpg";
import premiumViewing from "@/assets/premium-viewing.jpg";
import channelLogos from "@/assets/channel-logos.jpg";

// Movie poster imports
import breakingBoundaries from "@/assets/movies/breaking-boundaries.jpg";
import cityLights from "@/assets/movies/city-lights.jpg";
import oceansDeep from "@/assets/movies/oceans-deep.jpg";
import quantumLeap from "@/assets/movies/quantum-leap.jpg";
import lostHighway from "@/assets/movies/lost-highway.jpg";
import digitalDreams from "@/assets/movies/digital-dreams.jpg";

// Feature overlay imports
import liveTvOverlay from "@/assets/features/live-tv-overlay.jpg";
import cloudDvrOverlay from "@/assets/features/cloud-dvr-overlay.jpg";
import profilesOverlay from "@/assets/features/profiles-overlay.jpg";
import watchAnywhereOverlay from "@/assets/features/watch-anywhere-overlay.jpg";

// Channel logo imports
import cnnLogo from "@/assets/channels/cnn.jpg";
import espnLogo from "@/assets/channels/espn.jpg";
import hboLogo from "@/assets/channels/hbo.jpg";
import disneyLogo from "@/assets/channels/disney.jpg";
import nbcLogo from "@/assets/channels/nbc.jpg";
import abcLogo from "@/assets/channels/abc.jpg";
import cbsLogo from "@/assets/channels/cbs.jpg";
import foxLogo from "@/assets/channels/fox.jpg";

const Home = () => {
  // Scroll to top on page load and navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured content carousel - expanded with unique images
  const featuredShows = [
    { id: 1, title: "Breaking Boundaries", genre: "Sci-Fi Drama", rating: "4.8", poster: breakingBoundaries },
    { id: 2, title: "City Lights", genre: "Crime Thriller", rating: "4.9", poster: cityLights },
    { id: 3, title: "Ocean's Deep", genre: "Documentary", rating: "4.7", poster: oceansDeep },
    { id: 4, title: "Quantum Leap", genre: "Sci-Fi Adventure", rating: "4.9", poster: quantumLeap },
    { id: 5, title: "Lost Highway", genre: "Mystery Drama", rating: "4.7", poster: lostHighway },
    { id: 6, title: "Digital Dreams", genre: "Tech Thriller", rating: "4.8", poster: digitalDreams },
    // Duplicate for seamless loop
    { id: 7, title: "Breaking Boundaries", genre: "Sci-Fi Drama", rating: "4.8", poster: breakingBoundaries },
    { id: 8, title: "City Lights", genre: "Crime Thriller", rating: "4.9", poster: cityLights },
    { id: 9, title: "Ocean's Deep", genre: "Documentary", rating: "4.7", poster: oceansDeep },
  ];

  const trendingMovies = [
    { id: 1, title: "Quantum Leap", genre: "Sci-Fi", rating: "4.9", poster: quantumLeap },
    { id: 2, title: "Lost Highway", genre: "Mystery", rating: "4.7", poster: lostHighway },
    { id: 3, title: "Digital Dreams", genre: "Thriller", rating: "4.8", poster: digitalDreams },
    { id: 4, title: "Breaking Boundaries", genre: "Drama", rating: "4.8", poster: breakingBoundaries },
    { id: 5, title: "City Lights", genre: "Crime", rating: "4.9", poster: cityLights },
    { id: 6, title: "Ocean's Deep", genre: "Documentary", rating: "4.7", poster: oceansDeep },
    // Duplicate for seamless loop
    { id: 7, title: "Quantum Leap", genre: "Sci-Fi", rating: "4.9", poster: quantumLeap },
    { id: 8, title: "Lost Highway", genre: "Mystery", rating: "4.7", poster: lostHighway },
    { id: 9, title: "Digital Dreams", genre: "Thriller", rating: "4.8", poster: digitalDreams },
  ];

  const channels = [
    { name: "CNN", logo: cnnLogo },
    { name: "ESPN", logo: espnLogo },
    { name: "HBO", logo: hboLogo },
    { name: "Disney", logo: disneyLogo },
    { name: "NBC", logo: nbcLogo },
    { name: "ABC", logo: abcLogo },
    { name: "CBS", logo: cbsLogo },
    { name: "FOX", logo: foxLogo },
    // Duplicate for seamless loop
    { name: "CNN", logo: cnnLogo },
    { name: "ESPN", logo: espnLogo },
    { name: "HBO", logo: hboLogo },
    { name: "Disney", logo: disneyLogo },
  ];

  const features = [
    {
      icon: Tv,
      title: "85+ Live TV Channels",
      description: "News, sports, entertainment, and more from top networks",
      detailedDescription: "Access premium live TV channels including CNN, ESPN, HBO, Disney, and more. Stream in crystal-clear 4K quality with zero buffering.",
      overlayImage: liveTvOverlay
    },
    {
      icon: Monitor,
      title: "Unlimited Cloud DVR",
      description: "Record your favorite shows and watch them anytime",
      detailedDescription: "Never miss your favorite shows with unlimited cloud storage. Record multiple shows simultaneously and keep them for up to 9 months.",
      overlayImage: cloudDvrOverlay
    },
    {
      icon: Users,
      title: "6 User Profiles",
      description: "Personalized recommendations for every family member",
      detailedDescription: "Create personalized profiles for every family member with individual watchlists, parental controls, and AI-powered recommendations.",
      overlayImage: profilesOverlay
    },
    {
      icon: Smartphone,
      title: "Watch Anywhere",
      description: "Stream on TV, phone, tablet, or computer",
      detailedDescription: "Seamlessly switch between devices with synchronized playback. Start on your TV, continue on your phone, and finish on your laptop.",
      overlayImage: watchAnywhereOverlay
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "👩🏼‍💼",
      rating: 5,
      comment: "Abplay TV has completely replaced my cable subscription. The streaming quality is fantastic and the content library is huge!"
    },
    {
      name: "Michael Chen",
      avatar: "👨🏻‍💻", 
      rating: 5,
      comment: "Love the multi-device sync feature. I can start watching on my TV and continue on my phone during commute."
    },
    {
      name: "Emily Rodriguez",
      avatar: "👩🏽‍🎨",
      rating: 5,
      comment: "The family profiles feature is perfect for our household. Everyone gets their own personalized recommendations."
    }
  ];

  const faqs = [
    {
      question: "What devices support Abplay TV?",
      answer: "Abplay TV works on Smart TVs, streaming devices (Roku, Apple TV, Chromecast), mobile phones, tablets, computers, and gaming consoles. Stream anywhere with an internet connection."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! There are no long-term contracts. You can cancel your subscription at any time through your account settings and continue watching until the end of your billing period."
    },
    {
      question: "How many people can watch at once?",
      answer: "Your subscription includes up to 3 simultaneous streams, so family members can watch different content at the same time on different devices."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! New subscribers get a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      question: "What's included in my subscription?",
      answer: "Your subscription includes 85+ live TV channels, unlimited cloud DVR storage, access to our full on-demand library, and the ability to create up to 6 user profiles."
    }
  ];

  const CarouselItem = ({ item }: { item: any }) => (
    <div className="min-w-64 flex-shrink-0 transition-all duration-500 group">
      <Card className="card-premium overflow-hidden relative h-96 cursor-pointer">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${item.poster})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg text-white truncate">{item.title}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-yellow-500">{item.rating}</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-4">{item.genre}</p>
          {/* Watch Now button intentionally removed */}
        </div>
      </Card>
    </div>
  );

  return (
    <Layout>
      {/* Promotional Banner */}
      <section className="bg-blue-600 text-white py-2 md:py-3 relative z-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            <strong className="block sm:inline">Save $66 total for your first two months</strong>
            <span className="block sm:inline"> - $9.99/mo for your first 2 months, then $82.99/mo. </span>
            <span className="block sm:inline text-xs sm:text-sm">Offer ends September 30, 2025. New users only. Terms Apply. Cancel anytime.*</span>
          </p>
        </div>
      </section>

      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://kstatic.googleusercontent.com/files/007df15b7ba3b753b2bb69e339c80826c4ba1fe7eed9891c8547b0b4e5cafa29e32dcc936651e910df3d7b2ffc94d410286928c7c86a0cc0ae5a4e4918a840b6" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
              {/* Left Side - Quote/Testimonial */}
              <div className="lg:order-1 w-full lg:max-w-2xl mb-8 lg:mb-0 flex flex-col justify-center">
              <AnimatedSection>
                <div className="mb-6 lg:mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                    All your favorite live games. One place.
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl font-medium">Never miss a touchdown, field goal, or game-changing play</p>
                </div>
                
                <div className="space-y-4 lg:space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <a href="#" className="block">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 rounded-lg font-semibold transition-colors w-full sm:w-auto min-w-[200px]">
                        TRY 10 DAYS FOR $0
                      </Button>
                    </a>
                    
                    <div className="bg-red-600 text-white px-4 py-2 rounded text-sm font-bold inline-block self-start">
                      LIMITED TIME OFFER
                    </div>
                  </div>
                  
                  <div className="text-white/80 text-sm md:text-base leading-relaxed">
                    <span className="line-through">$92.99/mo</span> $49.99/mo for your first 2 months, $82.99/mo thereafter for Abplay TV Base Plan.
                  </div>
                  
                  <div className="text-white/70 text-xs md:text-sm leading-relaxed">
                    New users only. Cancel anytime. <span className="underline cursor-pointer">Terms apply</span>. Offer ends September 30, 2025.
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Side - Promotional Cards */}
            <div className="lg:order-2 w-full space-y-4 md:space-y-6 flex flex-col justify-center">
              <AnimatedSection delay={200}>
                {/* Sports Promotion Card */}
                <div className="bg-gradient-to-r from-green-800/95 to-brown-800/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white relative overflow-hidden min-h-[160px] md:min-h-[180px]">
                  <div className="absolute right-4 top-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-red-500 to-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">TV</div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 pr-16 leading-tight">Watch every team, every Sunday with exclusive out-of-market games</h3>
                  <a href="#" className="block">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-3 rounded font-medium text-sm md:text-base transition-colors shadow-lg">
                      LEARN MORE
                    </Button>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                {/* Add-ons Enhancement Card */}
                <div className="bg-gradient-to-r from-blue-900/95 to-purple-900/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-white relative overflow-hidden min-h-[180px] md:min-h-[200px]">
                  <div className="absolute right-4 top-4">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">NBA</div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full flex items-center justify-center text-xs font-bold">ESPN</div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-yellow-600 rounded-full"></div>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 pr-16 leading-tight">
                    Enhance your experience with add-ons
                  </h3>
                  <p className="text-white/90 mb-5 text-sm md:text-base pr-12 leading-relaxed">
                    Premium channels, sports packages, and more to customize your streaming experience
                  </p>
                  <a href="#" className="block">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-5 md:px-6 py-3 rounded font-medium text-sm md:text-base transition-colors shadow-lg">
                      EXPLORE ADD-ONS
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live TV Channels Section */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 px-4">
                Watch Live TV from <span className="text-gradient">100+ Top Channels</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Stream your favorite channels live with crystal-clear HD quality and zero buffering
              </p>
            </div>
          </AnimatedSection>

          <div className="overflow-hidden">
            <div className="flex space-x-12 carousel-infinite">
              {channels.map((channel, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="w-32 h-20 bg-card rounded-lg p-4 flex items-center justify-center hover:shadow-glow transition-all duration-300">
                    <img 
                      src={channel.logo} 
                      alt={`${channel.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shows Carousel */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Originals</h2>
            </div>
          </AnimatedSection>

          <div className="overflow-hidden">
            <div className="flex space-x-6 carousel-infinite">
              {featuredShows.map((show, index) => (
                <CarouselItem key={`featured-${index}`} item={show} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Movies Carousel */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Trending Now</h2>
            </div>
          </AnimatedSection>

          <div className="overflow-hidden">
            <div className="flex space-x-6 carousel-infinite-reverse">
              {trendingMovies.map((movie, index) => (
                <CarouselItem key={`trending-${index}`} item={movie} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Everything You Need for <span className="text-gradient">Premium Entertainment</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Abplay TV brings you the ultimate streaming experience with cutting-edge features
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <div className="flip-card group cursor-pointer h-80">
                  <div className="flip-card-inner">
                    {/* Front of card */}
                    <div className="flip-card-front">
                      <Card className="card-premium p-6 text-center h-full flex flex-col justify-center">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <feature.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </Card>
                    </div>
                    
                    {/* Back of card */}
                    <div className="flip-card-back">
                      <Card className="h-full overflow-hidden relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(${feature.overlayImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                        
                        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                            <feature.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                          <p className="text-gray-200 text-sm leading-relaxed">{feature.detailedDescription}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Anywhere Section */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Watch Anywhere, <span className="text-gradient">Anytime</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Stream on your Smart TV, phone, tablet, computer, or gaming console. 
                  Your entertainment follows you wherever you go.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Tv, label: "Smart TV" },
                    { icon: Smartphone, label: "Mobile" },
                    { icon: Tablet, label: "Tablet" },
                    { icon: Monitor, label: "Computer" }
                  ].map((device) => (
                    <div key={device.label} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                      <device.icon className="w-6 h-6 text-primary" />
                      <span className="font-medium">{device.label}</span>
                    </div>
                  ))}
                </div>
                {/* Download Apps button intentionally removed */}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                {/* TV Frame Design */}
                <div className="relative bg-gray-800 p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
                  {/* TV Stand */}
                  <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-12 md:w-20 h-4 md:h-6 bg-gray-700 rounded-full"></div>
                  <div className="absolute -bottom-3 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-1 md:h-2 bg-gray-600 rounded-full"></div>
                  
                  {/* TV Screen */}
                  <div className="relative bg-black rounded-2xl overflow-hidden aspect-video shadow-inner">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="https://kstatic.googleusercontent.com/files/5e486b4163b0d76a440a0e561d7f358c38f462a5bab192e8c68db035e233d2f0e783b8ae9b945f982575b58f803310d3f690e1961f5c22493c9eae80e67cbeed" type="video/mp4" />
                    </video>
                    
                    {/* TV Screen Reflection Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* TV Brand/Power Light */}
                  <div className="absolute bottom-2 right-6 w-2 h-2 bg-green-400 rounded-full opacity-80 shadow-lg shadow-green-400/50"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Loved by <span className="text-gradient">Millions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join millions of satisfied customers who made the switch
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 150}>
                <Card className="card-premium p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Content Showcase */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Premium Content <span className="text-gradient">Library</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Discover thousands of exclusive movies, award-winning series, and original content 
                  available only on Abplay TV. From blockbuster hits to indie gems.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    { title: "10,000+ Movies & Shows", desc: "Largest streaming library available" },
                    { title: "Exclusive Originals", desc: "Award-winning content produced exclusively for Abplay" },
                    { title: "4K Ultra HD Quality", desc: "Crystal clear streaming up to 4K resolution" },
                    { title: "New Content Weekly", desc: "Fresh movies and episodes added every week" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link to="/customize">
                  <Button className="btn-hero">
                    Explore Content Library
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <img 
                  src={contentGrid}
                  alt="Content library showcase"
                  className="w-full rounded-2xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Now Watching</h4>
                    <p className="text-sm text-muted-foreground">Breaking Boundaries - Season 2 Episode 5</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ultimate Viewing Experience */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src={premiumViewing}
                  alt="Ultimate viewing experience"
                  className="w-full rounded-2xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
                
                {/* Floating UI elements */}
                <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Live</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span className="text-sm">4K Ultra HD</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Cinema-Quality <span className="text-gradient">Experience</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Immerse yourself in stunning 4K Ultra HD quality with Dolby Atmos sound. 
                  Every detail is crystal clear, every sound is perfectly balanced.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: "4K", label: "Ultra HD Quality", desc: "4K streaming" },
                    { icon: "🔊", label: "Dolby Atmos", desc: "Immersive audio" },
                    { icon: "🚀", label: "Zero Buffering", desc: "Instant streaming" },
                    { icon: "📱", label: "All Devices", desc: "Any screen size" }
                  ].map((feature, i) => (
                    <div key={i} className="text-center p-4 bg-card rounded-lg">
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold mb-1">{feature.label}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
                
                <Link to="/features">
                  <Button className="btn-hero">
                    Experience Premium Quality
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Trusted by <span className="text-gradient">Millions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join the streaming revolution that's changing how people watch TV
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50M+", label: "Active Subscribers", desc: "Growing every day" },
              { number: "10K+", label: "Movies & Shows", desc: "In our library" },
              { number: "99.9%", label: "Uptime Guarantee", desc: "Always available" },
              { number: "150+", label: "Countries", desc: "Available worldwide" }
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Abplay TV
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Start <span className="text-gradient">Streaming?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of viewers and discover your next favorite show today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button className="btn-hero text-xl px-12 py-6">
                  <Play className="w-6 h-6 mr-3" />
                  Start Your Free Trial
                </Button>
              </Link>
              <span className="text-muted-foreground text-sm">or</span>
              <a href="tel:+18338147663">
                <Button variant="outline" className="btn-outline-hero text-lg px-8 py-4">
                  📞 Call (833) 814-7663
                </Button>
              </a>
            </div>
            <p className="text-muted-foreground mt-4">
              No commitment • Cancel anytime • Instant access
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Home;