import { useState } from "react";
import { Check, Star, Plus, Tv, Film, Music, Trophy, Globe, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import customizeBg from "@/assets/customize-bg.jpg";

const Customize = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: 29.99,
      description: "Perfect for casual viewers",
      features: [
        "50+ Live TV Channels",
        "Limited Cloud DVR (20 hours)",
        "1 Simultaneous Stream",
        "3 User Profiles",
        "HD Quality"
      ],
      popular: false
    },
    {
      id: "pro",
      name: "Pro",
      price: 49.99,
      description: "Most popular for families",
      features: [
        "85+ Live TV Channels",
        "Unlimited Cloud DVR",
        "3 Simultaneous Streams",
        "6 User Profiles",
        "4K Ultra HD Quality",
        "Offline Downloads"
      ],
      popular: true
    },
    {
      id: "premium",
      name: "Premium",
      price: 69.99,
      description: "Ultimate entertainment experience",
      features: [
        "Everything in Pro",
        "Premium Sports Networks",
        "Premium Movie Channels",
        "Early Access to Originals",
        "Priority Support",
        "Dolby Atmos Audio"
      ],
      popular: false
    }
  ];

  const addons = [
    {
      id: "sports",
      name: "Sports Extra",
      price: 14.99,
      description: "NFL RedZone, NBA League Pass, and more premium sports",
      icon: Trophy,
      channels: ["ESPN+", "NFL RedZone", "NBA TV", "MLB Network"]
    },
    {
      id: "movies",
      name: "Movie Pack",
      price: 9.99,
      description: "HBO Max, Showtime, and premium movie channels",
      icon: Film,
      channels: ["HBO Max", "Showtime", "Starz", "Cinemax"]
    },
    {
      id: "international",
      name: "International",
      price: 12.99,
      description: "Channels from around the world in multiple languages",
      icon: Globe,
      channels: ["BBC World", "TV5Monde", "Deutsche Welle", "NHK World"]
    },
    {
      id: "kids",
      name: "Kids & Family",
      price: 7.99,
      description: "Safe, educational content for children of all ages",
      icon: Star,
      channels: ["Disney Jr", "Nickelodeon", "Cartoon Network", "PBS Kids"]
    },
    {
      id: "music",
      name: "Music Channels",
      price: 6.99,
      description: "24/7 music channels across all genres",
      icon: Music,
      channels: ["MTV", "VH1", "Music Choice", "Stingray Music"]
    },
    {
      id: "gaming",
      name: "Gaming Content",
      price: 8.99,
      description: "Esports, gaming shows, and interactive content",
      icon: Gamepad2,
      channels: ["Twitch Streams", "G4TV", "ESL Gaming", "GameSpot Live"]
    }
  ];

  const channelLogos = [
    { name: "CNN", category: "news" },
    { name: "ESPN", category: "sports" },
    { name: "HBO", category: "entertainment" },
    { name: "Disney", category: "family" },
    { name: "NBC", category: "broadcast" },
    { name: "Fox", category: "broadcast" },
    { name: "Comedy Central", category: "entertainment" },
    { name: "Discovery", category: "educational" },
    { name: "Food Network", category: "lifestyle" },
    { name: "HGTV", category: "lifestyle" },
    { name: "MTV", category: "music" },
    { name: "Nickelodeon", category: "kids" }
  ];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const getTotalPrice = () => {
    const basePlan = plans.find(p => p.id === selectedPlan);
    const addonPrice = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return (basePlan?.price || 0) + addonPrice;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${customizeBg})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build Your Perfect
              <span className="text-gradient block">Streaming Package</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Choose your base plan and add premium channels to create the ultimate viewing experience
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Plan Selection */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Choose Your <span className="text-gradient">Base Plan</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Start with the plan that fits your viewing habits
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 150}>
                <Card 
                  className={`card-premium p-8 cursor-pointer transition-all duration-300 relative ${
                    selectedPlan === plan.id 
                      ? "ring-2 ring-primary shadow-glow" 
                      : "hover:shadow-card"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={selectedPlan === plan.id ? "btn-hero w-full" : "btn-outline-hero w-full"}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                  </Button>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Premium <span className="text-gradient">Add-ons</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Enhance your experience with specialized content packages
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addons.map((addon, index) => (
              <AnimatedSection key={addon.id} delay={index * 100}>
                <Card 
                  className={`card-premium p-6 cursor-pointer transition-all duration-300 ${
                    selectedAddons.includes(addon.id) 
                      ? "ring-2 ring-primary shadow-glow" 
                      : ""
                  }`}
                  onClick={() => toggleAddon(addon.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <addon.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Switch 
                      checked={selectedAddons.includes(addon.id)}
                      onCheckedChange={() => toggleAddon(addon.id)}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{addon.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {addon.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">+${addon.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {addon.channels.map((channel, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Preview */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Featured <span className="text-gradient">Channels</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Just a preview of what's included in your package
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {channelLogos.map((channel, index) => (
                <div 
                  key={channel.name}
                  className="aspect-square bg-card border border-border rounded-lg flex items-center justify-center 
                           hover:border-primary hover:shadow-card transition-all duration-300 group"
                >
                  <div className="text-center">
                    <Tv className="w-8 h-8 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
                    <p className="text-sm font-medium">{channel.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{channel.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Summary & Checkout */}
      <section className="section-spacing bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="card-premium p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Your Custom Package</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          {plans.find(p => p.id === selectedPlan)?.name} Plan
                        </span>
                        <span className="font-semibold">
                          ${plans.find(p => p.id === selectedPlan)?.price}/mo
                        </span>
                      </div>
                      
                      {selectedAddons.map(addonId => {
                        const addon = addons.find(a => a.id === addonId);
                        return addon ? (
                          <div key={addonId} className="flex justify-between items-center">
                            <span>{addon.name}</span>
                            <span>+${addon.price}/mo</span>
                          </div>
                        ) : null;
                      })}
                      
                      <hr className="border-border" />
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span>Total</span>
                        <span className="text-primary">${getTotalPrice().toFixed(2)}/month</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6">
                      Start with a 14-day free trial. Cancel anytime.
                    </p>
                  </div>

                  <div className="text-center lg:text-right">
                    <Button className="btn-hero text-xl px-12 py-6 w-full lg:w-auto">
                      Start Free Trial
                    </Button>
                    <p className="text-muted-foreground text-sm mt-4">
                      No credit card required
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Customize;