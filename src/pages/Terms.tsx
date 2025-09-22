import { Link } from "react-router-dom";
import { Shield, FileText, AlertCircle, Clock, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Terms = () => {
  const sections = [
    {
      title: "1. Service Agreement",
      content: [
        "These Terms of Service ('Terms') govern your use of Abplay TV streaming services owned and operated by AB Textiles ('we', 'us', or 'our').",
        "By creating an account or using our services, you agree to be bound by these Terms and our Privacy Policy.",
        "You must be at least 18 years old or have parental consent to use our services.",
        "AB Textiles reserves the right to modify these Terms at any time. Continued use of the service constitutes acceptance of updated Terms."
      ]
    },
    {
      title: "2. Account Responsibilities",
      content: [
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree to provide accurate and complete information when creating your account.",
        "One account per household is permitted for personal, non-commercial use only.",
        "You must notify us immediately of any unauthorized use of your account.",
        "AB Textiles reserves the right to suspend or terminate accounts that violate these Terms."
      ]
    },
    {
      title: "3. Service Availability",
      content: [
        "Abplay TV services are provided 'as is' and are subject to availability.",
        "We strive for 99.9% uptime but cannot guarantee uninterrupted service.",
        "Content availability may vary by location and is subject to licensing agreements.",
        "AB Textiles reserves the right to modify, suspend, or discontinue any aspect of the service.",
        "Some features may not be available on all devices or in all regions."
      ]
    },
    {
      title: "4. Content and Usage",
      content: [
        "All content on Abplay TV is owned by AB Textiles or licensed from third parties.",
        "You may stream content for personal, non-commercial use only.",
        "Downloading or redistribution of content is strictly prohibited unless explicitly allowed.",
        "You may not use VPNs or other methods to circumvent geographic restrictions.",
        "Recording or capturing of streamed content is prohibited by copyright law."
      ]
    },
    {
      title: "5. Payment and Billing",
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis.",
        "All fees are non-refundable except as required by law or stated in our Refund Policy.",
        "Price changes will be communicated at least 30 days in advance.",
        "AB Textiles uses secure third-party payment processors for all transactions.",
        "You authorize automatic renewal unless you cancel before the next billing period."
      ]
    },
    {
      title: "6. Prohibited Activities",
      content: [
        "You may not share your account credentials with others outside your household.",
        "Commercial use of Abplay TV services is strictly prohibited.",
        "You may not attempt to hack, reverse engineer, or compromise our systems.",
        "Creating multiple accounts or using false information is prohibited.",
        "Any illegal or harmful activities using our services will result in immediate termination."
      ]
    },
    {
      title: "7. Privacy and Data",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for details on data collection and use.",
        "AB Textiles collects viewing data to improve recommendations and service quality.",
        "We implement industry-standard security measures to protect your personal information.",
        "You can control many privacy settings through your account preferences.",
        "We do not sell your personal information to third parties."
      ]
    },
    {
      title: "8. Limitation of Liability",
      content: [
        "AB Textiles' liability is limited to the amount you paid for the service in the past 12 months.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Some jurisdictions do not allow limitation of liability, so these limits may not apply to you.",
        "Our services are provided without warranties of any kind, express or implied.",
        "You agree to indemnify AB Textiles against claims arising from your use of the service."
      ]
    },
    {
      title: "9. Termination",
      content: [
        "You may cancel your subscription at any time through your account settings.",
        "AB Textiles may terminate your account for violation of these Terms.",
        "Upon termination, your access to the service will cease immediately.",
        "Downloaded content will no longer be accessible after account termination.",
        "These Terms survive termination where applicable by law."
      ]
    },
    {
      title: "10. Governing Law",
      content: [
        "These Terms are governed by the laws of the jurisdiction where AB Textiles is incorporated.",
        "Any disputes will be resolved through binding arbitration.",
        "Class action lawsuits are waived except where prohibited by law.",
        "If any provision of these Terms is invalid, the remaining provisions remain in effect.",
        "These Terms constitute the entire agreement between you and AB Textiles regarding the service."
      ]
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
                <FileText className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully. By using Abplay TV, you agree to be bound by these Terms of Service.
                Abplay TV is owned and operated by AB Textiles.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium p-8 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Important Notice</h3>
                    <p className="text-muted-foreground">
                      These Terms of Service were last updated on January 1, 2024. 
                      AB Textiles reserves the right to modify these terms at any time. 
                      Continued use of the service after changes constitutes acceptance of the new terms.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Last Updated: January 1, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scale className="w-4 h-4" />
                    <span>Governing Law: AB Textiles Jurisdiction</span>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <AnimatedSection key={section.title} delay={index * 100}>
                <Card className="card-premium p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Questions About These <span className="text-gradient">Terms?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                If you have any questions about these Terms of Service, please contact our legal team. 
                We're here to help clarify any aspect of your agreement with AB Textiles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Legal Department</h3>
                  <p className="text-muted-foreground mb-2">AB Textiles Legal Team</p>
                  <p className="text-muted-foreground">legal@abtextiles.com</p>
                </Card>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
                  <p className="text-muted-foreground mb-2">General Inquiries</p>
                  <p className="text-muted-foreground mb-4">support@abplaytv.com</p>
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Button className="btn-hero w-full">
                      Contact Support
                    </Button>
                  </Link>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;