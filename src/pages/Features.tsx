import { 
  Tv, 
  Cloud, 
  Users, 
  Smartphone, 
  Zap, 
  Shield, 
  Download, 
  Cast,
  Monitor,
  Headphones,
  Settings,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import premiumViewing from "@/assets/premium-viewing.jpg";

const Features = () => {
  const mainFeatures = [
    {
      icon: Tv,
      title: "85+ Live TV Channels",
      description: "Watch live TV from major networks including news, sports, entertainment, and kids' channels. Never miss your favorite shows.",
      benefits: ["Major network coverage", "Local channel access", "Premium sports networks", "International channels"]
    },
    {
      icon: Cloud,
      title: "Unlimited Cloud DVR",
      description: "Record as many shows as you want with unlimited cloud storage. Watch your recordings anytime, anywhere.",
      benefits: ["Unlimited storage space", "Keep recordings for 9 months", "Fast-forward through commercials", "Multiple simultaneous recordings"]
    },
    {
      icon: Users,
      title: "6 User Profiles",
      description: "Create personalized profiles for every family member with individual recommendations and watch history.",
      benefits: ["Personalized recommendations", "Individual watch history", "Parental controls", "Custom preferences"]
    },
    {
      icon: Smartphone,
      title: "Multi-Device Streaming",
      description: "Stream on Smart TVs, phones, tablets, computers, and gaming consoles. Up to 3 simultaneous streams.",
      benefits: ["Cross-device sync", "3 simultaneous streams", "Offline viewing", "Universal app support"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "4K Ultra HD Quality",
      description: "Experience crystal-clear picture quality with 4K Ultra HD streaming on supported content and devices."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Your data is protected with bank-level encryption and secure streaming protocols."
    },
    {
      icon: Download,
      title: "Offline Downloads",
      description: "Download your favorite shows and movies to watch offline on mobile devices."
    },
    {
      icon: Cast,
      title: "Chromecast & AirPlay",
      description: "Cast content from your phone or tablet directly to your TV with built-in casting support."
    },
    {
      icon: Monitor,
      title: "Multiple Screen Sizes",
      description: "Optimized viewing experience across all screen sizes from phone to 75-inch TVs."
    },
    {
      icon: Headphones,
      title: "Immersive Audio",
      description: "Dolby Atmos support for premium surround sound experience on compatible content."
    },
    {
      icon: Settings,
      title: "Smart Recommendations",
      description: "AI-powered recommendation engine learns your preferences and suggests new content."
    },
    {
      icon: Star,
      title: "Exclusive Originals",
      description: "Access to Abplay TV original series and movies you can't find anywhere else."
    }
  ];

  const comparisonFeatures = [
    { feature: "Live TV Channels", abplay: "85+", competitor1: "75+", competitor2: "65+" },
    { feature: "Cloud DVR Storage", abplay: "Unlimited", competitor1: "50 hours", competitor2: "20 hours" },
    { feature: "Simultaneous Streams", abplay: "3", competitor1: "2", competitor2: "1" },
    { feature: "User Profiles", abplay: "6", competitor1: "4", competitor2: "5" },
    { feature: "4K Content", abplay: "✓", competitor1: "✓", competitor2: "✗" },
    { feature: "Offline Downloads", abplay: "✓", competitor1: "✗", competitor2: "✓" },
    { feature: "Free Trial", abplay: "14 days", competitor1: "7 days", competitor2: "3 days" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${premiumViewing})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium Features for
              <span className="text-gradient block">Every Viewer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover all the cutting-edge features that make Abplay TV the ultimate streaming platform
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Button className="btn-hero text-xl px-12 py-6">
              Start Free Trial
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Core <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for the perfect streaming experience
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 150}>
                <Card className="card-premium p-8 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Advanced <span className="text-gradient">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Cutting-edge technology for the ultimate entertainment experience
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="card-premium p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                How We <span className="text-gradient">Compare</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See why Abplay TV leads the streaming industry
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-2xl shadow-premium overflow-hidden">
                <thead>
                  <tr className="bg-gradient-primary">
                    <th className="text-left p-6 text-primary-foreground font-semibold">Feature</th>
                    <th className="text-center p-6 text-primary-foreground font-semibold">Abplay TV</th>
                    <th className="text-center p-6 text-primary-foreground font-semibold">Competition A</th>
                    <th className="text-center p-6 text-primary-foreground font-semibold">Competition B</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6 text-center">
                        <span className="font-semibold text-primary">{row.abplay}</span>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">{row.competitor1}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.competitor2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Experience All Features <span className="text-gradient">Free</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try every premium feature risk-free with our 14-day trial
            </p>
            <Button className="btn-hero text-xl px-12 py-6">
              Start Free Trial
            </Button>
            <p className="text-muted-foreground mt-4">
              No credit card required • Full feature access • Cancel anytime
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Features;