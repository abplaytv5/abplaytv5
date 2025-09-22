import { Shield, Eye, Database, Lock, Settings, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Privacy = () => {
  const dataTypes = [
    {
      category: "Account Information",
      items: ["Name and email address", "Password (encrypted)", "Payment information", "Subscription details", "Account preferences"]
    },
    {
      category: "Usage Data",
      items: ["Content watched and viewing history", "Search queries", "Device information", "App usage patterns", "Time spent watching"]
    },
    {
      category: "Technical Data",
      items: ["IP address and location", "Device identifiers", "Browser information", "Connection speed", "Error logs and diagnostics"]
    },
    {
      category: "Communication Data",
      items: ["Customer support interactions", "Survey responses", "Marketing preferences", "Feedback and reviews", "Social media interactions"]
    }
  ];

  const dataUse = [
    {
      icon: Eye,
      title: "Service Provision",
      description: "To provide, maintain, and improve Abplay TV streaming services"
    },
    {
      icon: Settings,
      title: "Personalization",
      description: "To customize content recommendations and improve user experience"
    },
    {
      icon: Shield,
      title: "Security",
      description: "To protect against fraud, abuse, and unauthorized access"
    },
    {
      icon: Database,
      title: "Analytics",
      description: "To analyze usage patterns and improve service performance"
    }
  ];

  const protections = [
    "End-to-end encryption for all data transmission",
    "Regular security audits and penetration testing",
    "Multi-factor authentication for account access",
    "Automated threat detection and response systems",
    "Strict access controls for employee data access",
    "Compliance with industry security standards (SOC 2, ISO 27001)"
  ];

  const rights = [
    {
      title: "Access Your Data",
      description: "Request a copy of all personal data we hold about you"
    },
    {
      title: "Correct Your Data",
      description: "Update or correct any inaccurate personal information"
    },
    {
      title: "Delete Your Data",
      description: "Request deletion of your personal data (right to be forgotten)"
    },
    {
      title: "Data Portability",
      description: "Receive your data in a structured, machine-readable format"
    },
    {
      title: "Restrict Processing",
      description: "Limit how we process your personal information"
    },
    {
      title: "Opt-Out",
      description: "Withdraw consent for marketing communications and data processing"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your privacy is our priority. Learn how AB Textiles collects, uses, and protects your personal 
                information when you use Abplay TV services.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Privacy Commitment</h3>
                    <p className="text-muted-foreground">
                      AB Textiles is committed to protecting your privacy and ensuring the security of your personal information. 
                      This Privacy Policy explains how we collect, use, and safeguard your data when you use Abplay TV services.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Last updated: January 1, 2024 | Effective Date: January 1, 2024
                </p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Data Collection */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                What Data We <span className="text-gradient">Collect</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We collect information to provide you with the best streaming experience possible
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <AnimatedSection key={type.category} delay={index * 150}>
                <Card className="card-premium p-8 h-full">
                  <h3 className="text-xl font-semibold mb-6">{type.category}</h3>
                  <ul className="space-y-3">
                    {type.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                How We <span className="text-gradient">Use Your Data</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Your data helps us provide better service and protect your account
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataUse.map((use, index) => (
              <AnimatedSection key={use.title} delay={index * 100}>
                <Card className="card-premium p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <use.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{use.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{use.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  How We <span className="text-gradient">Protect Your Data</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  AB Textiles employs industry-leading security measures to protect your personal information 
                  from unauthorized access, disclosure, or misuse.
                </p>
                
                <ul className="space-y-4">
                  {protections.map((protection, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{protection}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Card className="card-premium p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Data Security Stats</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">256-bit</div>
                    <div className="text-sm text-muted-foreground">Encryption Standard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Security Monitoring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Data Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">0</div>
                    <div className="text-sm text-muted-foreground">Data Breaches</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Your Privacy <span className="text-gradient">Rights</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                You have control over your personal data. Here are your rights under privacy laws.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <AnimatedSection key={right.title} delay={index * 100}>
                <Card className="card-premium p-6 h-full">
                  <h3 className="text-lg font-semibold mb-4">{right.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{right.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="text-center mt-12">
              <Button className="btn-hero text-lg px-8 py-4">
                Manage Your Privacy Settings
              </Button>
              <p className="text-muted-foreground mt-4">
                Exercise your privacy rights through your account dashboard
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">
                Questions About Your <span className="text-gradient">Privacy?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our privacy team at AB Textiles is here to help with any questions about how we handle your data.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Data Protection Officer</h3>
                  <p className="text-muted-foreground mb-2">AB Textiles Privacy Team</p>
                  <p className="text-muted-foreground">privacy@abtextiles.com</p>
                </Card>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Data Requests</h3>
                  <p className="text-muted-foreground mb-2">Data Access & Deletion</p>
                  <p className="text-muted-foreground">datarequests@abplaytv.com</p>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;