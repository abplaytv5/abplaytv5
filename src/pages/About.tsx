import { 
  Users, 
  Award, 
  Globe, 
  Zap, 
  Heart, 
  Target,
  Calendar,
  TrendingUp,
  Lightbulb,
  Shield,
  Tv
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import premiumViewing from "@/assets/premium-viewing.jpg";

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "The Vision",
      description: "AB Textiles recognized the need for premium streaming entertainment and began developing Abplay TV."
    },
    {
      year: "2020",
      title: "Technology Foundation",
      description: "Built cutting-edge streaming infrastructure capable of delivering 4K content to millions of users simultaneously."
    },
    {
      year: "2021",
      title: "Content Partnerships",
      description: "Secured partnerships with major networks and content creators to build our extensive library."
    },
    {
      year: "2022",
      title: "Platform Launch",
      description: "Officially launched Abplay TV with 50+ channels and began our journey to revolutionize streaming."
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description: "Expanded to 85+ channels, launched original content, and reached 1 million active subscribers."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Launched international content packages and became available in 15+ countries worldwide."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is guided by what's best for our viewers and their entertainment experience."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously push the boundaries of streaming technology to deliver the best possible experience."
    },
    {
      icon: Shield,
      title: "Quality",
      description: "From content curation to streaming quality, we maintain the highest standards in everything we do."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Entertainment should be accessible to everyone, everywhere, on any device they choose."
    }
  ];

  const stats = [
    { number: "2M+", label: "Active Subscribers", icon: Users },
    { number: "85+", label: "Live TV Channels", icon: Tv },
    { number: "10K+", label: "Movies & Shows", icon: Award },
    { number: "15+", label: "Countries Served", icon: Globe }
  ];

  const team = [
    {
      name: "Sarah Chen",
      position: "Chief Executive Officer",
      avatar: "👩🏻‍💼",
      bio: "Former Netflix executive with 15+ years in streaming technology and content strategy."
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Technology Officer",
      avatar: "👨🏽‍💻",
      bio: "Ex-Amazon Prime Video engineer, expert in large-scale streaming infrastructure."
    },
    {
      name: "Emily Johnson",
      position: "Head of Content",
      avatar: "👩🏼‍🎨",
      bio: "Award-winning content strategist from HBO Max, specializing in original programming."
    },
    {
      name: "David Park",
      position: "Head of Product",
      avatar: "👨🏻‍💼",
      bio: "Former Hulu product manager focused on user experience and platform innovation."
    }
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
              Redefining
              <span className="text-gradient block">Entertainment</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Born from AB Textiles' vision to bring premium streaming to every household. 
              We're more than a platform - we're your entertainment partner.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Button className="btn-hero text-xl px-12 py-6">
              Join Our Story
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At Abplay TV, we believe entertainment should be accessible, affordable, and exceptional. 
                As part of the AB Textiles family, we combine decades of business excellence with 
                cutting-edge streaming technology to deliver experiences that bring families together 
                and create lasting memories.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just changing how you watch TV - we're revolutionizing how entertainment 
                fits into your life, making it more personal, more convenient, and more enjoyable than ever before.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Impact</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The numbers that define our journey and success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <Card className="card-premium p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                From vision to reality - the Abplay TV story
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:transform lg:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <AnimatedSection key={item.year} delay={index * 150}>
                    <div className={`relative flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}>
                      {/* Timeline dot */}
                      <div className="absolute left-8 w-4 h-4 bg-primary rounded-full z-10 lg:left-1/2 lg:transform lg:-translate-x-2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full absolute top-1 left-1"></div>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-20 lg:ml-0 lg:w-1/2 ${
                        index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                      }`}>
                        <Card className="card-premium p-6">
                          <div className="flex items-center mb-4">
                            <Calendar className="w-5 h-5 text-primary mr-2" />
                            <span className="text-primary font-bold text-lg">{item.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </Card>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 150}>
                <Card className="card-premium p-8 h-full">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Meet Our <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The passionate people behind Abplay TV's success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <Card className="card-premium p-6 text-center h-full">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.position}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AB Textiles Connection */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Part of the <span className="text-gradient">AB Textiles Family</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Abplay TV is proudly owned and operated by AB Textiles, a company with decades of 
                experience in delivering quality products and services. This partnership brings 
                together AB Textiles' business expertise with cutting-edge entertainment technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our connection to AB Textiles ensures financial stability, ethical business practices, 
                and a commitment to customer satisfaction that spans generations. When you choose 
                Abplay TV, you're choosing a service backed by a trusted name in business excellence.
              </p>
              <Button className="btn-hero text-xl px-12 py-6">
                Experience Our Quality
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;