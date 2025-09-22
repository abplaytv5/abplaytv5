import { 
  Play, 
  Tv, 
  Cloud, 
  Users, 
  Shield, 
  Headphones, 
  Zap, 
  Globe,
  Download,
  Cast,
  Settings,
  Award,
  CheckCircle,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import contentGrid from "@/assets/content-grid.jpg";

const Services = () => {
  const subscriptionPlans = [
    {
      name: "Basic",
      price: 29.99,
      popular: false,
      features: [
        "50+ Live TV Channels",
        "Limited Cloud DVR (20 hours)",
        "1 Simultaneous Stream",
        "3 User Profiles",
        "HD Quality Streaming",
        "Mobile & Web Access"
      ],
      ideal: "Perfect for individual viewers"
    },
    {
      name: "Pro",
      price: 49.99,
      popular: true,
      features: [
        "85+ Live TV Channels",
        "Unlimited Cloud DVR",
        "3 Simultaneous Streams",
        "6 User Profiles",
        "4K Ultra HD Quality",
        "All Device Access",
        "Offline Downloads",
        "Premium Support"
      ],
      ideal: "Best for families and households"
    },
    {
      name: "Premium",
      price: 69.99,
      popular: false,
      features: [
        "Everything in Pro",
        "Premium Sports Networks",
        "Premium Movie Channels",
        "Exclusive Original Content",
        "Early Access to New Releases",
        "Priority Customer Support",
        "Dolby Atmos Audio",
        "Multiple Language Support"
      ],
      ideal: "Ultimate entertainment experience"
    }
  ];

  const streamingServices = [
    {
      name: "Live TV Streaming",
      icon: Tv,
      description: "Watch 85+ live channels including news, sports, entertainment, and more",
      features: [
        "Major network channels (ABC, CBS, NBC, Fox)",
        "24/7 news channels (CNN, Fox News, MSNBC)",
        "Sports networks (ESPN, Fox Sports, NFL Network)",
        "Entertainment channels (AMC, Comedy Central, FX)",
        "Local channel availability",
        "Real-time streaming with minimal delay"
      ]
    },
    {
      name: "On-Demand Library",
      icon: Play,
      description: "Access thousands of movies, TV shows, and documentaries anytime",
      features: [
        "10,000+ hours of content",
        "New releases added weekly",
        "Award-winning documentaries",
        "Classic movies and TV series",
        "Kids and family programming",
        "Multiple genres and categories"
      ]
    },
    {
      name: "Cloud DVR Service",
      icon: Cloud,
      description: "Record unlimited shows and watch them whenever you want",
      features: [
        "Unlimited storage space",
        "Keep recordings for 9 months",
        "Fast-forward through commercials",
        "Record multiple shows simultaneously",
        "Access recordings from any device",
        "Automatic series recording"
      ]
    },
    {
      name: "Multi-User Profiles",
      icon: Users,
      description: "Personalized experiences for every family member",
      features: [
        "Up to 6 individual profiles",
        "Personalized recommendations",
        "Individual watch history",
        "Parental controls and restrictions",
        "Custom watchlists",
        "Age-appropriate content filtering"
      ]
    }
  ];

  const additionalServices = [
    {
      name: "Premium Support",
      icon: Headphones,
      description: "24/7 customer support with live chat, phone, and email assistance"
    },
    {
      name: "Device Setup",
      icon: Settings,
      description: "Free assistance setting up Abplay TV on all your devices"
    },
    {
      name: "Content Curation",
      icon: Award,
      description: "Expert-curated collections and personalized recommendations"
    },
    {
      name: "Global Access",
      icon: Globe,
      description: "Stream your content while traveling internationally"
    },
    {
      name: "Offline Viewing",
      icon: Download,
      description: "Download content to watch without an internet connection"
    },
    {
      name: "Screen Casting",
      icon: Cast,
      description: "Cast from mobile devices to TVs and streaming devices"
    }
  ];

  const bundles = [
    {
      name: "Entertainment Bundle",
      services: ["Abplay TV Pro", "Music Streaming", "E-book Library"],
      originalPrice: 79.97,
      bundlePrice: 59.99,
      savings: 19.98,
      description: "Complete entertainment package for the whole family"
    },
    {
      name: "Sports Fan Bundle",
      services: ["Abplay TV Premium", "Sports Add-on", "Fantasy Sports Pro"],
      originalPrice: 99.97,
      bundlePrice: 79.99,
      savings: 19.98,
      description: "Everything a sports enthusiast needs"
    },
    {
      name: "Family Complete",
      services: ["Abplay TV Pro", "Kids Learning Apps", "Parental Controls Pro"],
      originalPrice: 69.97,
      bundlePrice: 54.99,
      savings: 14.98,
      description: "Perfect package for families with children"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${contentGrid})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Services
              <span className="text-gradient block">Tailored for You</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of streaming services, subscription plans, and premium bundles
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Button className="btn-hero text-xl px-12 py-6">
              Explore Services
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for the ultimate streaming experience
              </p>
            </div>
          </AnimatedSection>

          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
              <TabsTrigger value="plans" className="text-lg py-3">Subscription Plans</TabsTrigger>
              <TabsTrigger value="streaming" className="text-lg py-3">Streaming Services</TabsTrigger>
              <TabsTrigger value="bundles" className="text-lg py-3">Premium Bundles</TabsTrigger>
            </TabsList>

            <TabsContent value="plans">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subscriptionPlans.map((plan, index) => (
                  <AnimatedSection key={plan.name} delay={index * 150}>
                    <Card 
                      className={`card-premium p-8 relative ${
                        plan.popular ? "ring-2 ring-primary shadow-glow" : ""
                      }`}
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
                        <p className="text-muted-foreground mb-4">{plan.ideal}</p>
                        <div className="mb-6">
                          <span className="text-4xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className={plan.popular ? "btn-hero w-full" : "btn-outline-hero w-full"}>
                        Choose {plan.name}
                      </Button>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="streaming">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {streamingServices.map((service, index) => (
                  <AnimatedSection key={service.name} delay={index * 150}>
                    <Card className="card-premium p-8 h-full">
                      <div className="flex items-start space-x-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold mb-3">{service.name}</h3>
                          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bundles">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {bundles.map((bundle, index) => (
                  <AnimatedSection key={bundle.name} delay={index * 150}>
                    <Card className="card-premium p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">{bundle.name}</h3>
                      <p className="text-muted-foreground mb-6">{bundle.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-lg text-muted-foreground line-through mb-1">
                          ${bundle.originalPrice.toFixed(2)}
                        </div>
                        <div className="text-4xl font-bold text-primary mb-1">
                          ${bundle.bundlePrice.toFixed(2)}
                        </div>
                        <div className="text-sm text-green-500 font-semibold">
                          Save ${bundle.savings.toFixed(2)}/month
                        </div>
                      </div>

                      <ul className="space-y-2 mb-8">
                        {bundle.services.map((service, i) => (
                          <li key={i} className="flex items-center justify-center space-x-2">
                            <Star className="w-4 h-4 text-primary" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className="btn-hero w-full">
                        Get Bundle
                      </Button>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Additional <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Extra services to enhance your streaming experience
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 100}>
                <Card className="card-premium p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Service <span className="text-gradient">Guarantee</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We're committed to providing exceptional service quality. If you're not completely 
                satisfied with any of our services, we offer a 30-day money-back guarantee. 
                Our dedicated support team is available 24/7 to ensure your streaming experience 
                is always perfect.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">&lt; 2s</div>
                  <div className="text-muted-foreground">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Customer Support</div>
                </div>
              </div>
              <Button className="btn-hero text-xl px-12 py-6">
                Start Your Trial
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;