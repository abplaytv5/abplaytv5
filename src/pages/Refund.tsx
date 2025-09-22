import { Link } from "react-router-dom";
import { RefreshCw, Clock, CreditCard, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Refund = () => {
  const refundScenarios = [
    {
      scenario: "Free Trial Cancellation",
      eligible: true,
      timeframe: "Before trial ends",
      process: "Automatic - no charges applied",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "Monthly Subscription",
      eligible: true,
      timeframe: "Within 7 days of billing",
      process: "Full refund to original payment method",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "Annual Subscription",
      eligible: true,
      timeframe: "Within 30 days of billing",
      process: "Prorated refund based on unused time",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "Add-on Services",
      eligible: true,
      timeframe: "Within 14 days of purchase",
      process: "Full refund to original payment method",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      scenario: "Gift Subscriptions",
      eligible: false,
      timeframe: "After activation",
      process: "Non-refundable once activated",
      icon: XCircle,
      color: "text-red-500"
    },
    {
      scenario: "Promotional Rates",
      eligible: false,
      timeframe: "After promotional period",
      process: "Standard rates apply, limited refunds",
      icon: AlertCircle,
      color: "text-yellow-500"
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: "Request Submission",
      description: "Submit your refund request through your account dashboard or contact customer support",
      timeframe: "Immediate"
    },
    {
      step: 2,
      title: "Request Review",
      description: "Our team reviews your request and verifies eligibility based on our refund policy",
      timeframe: "1-2 business days"
    },
    {
      step: 3,
      title: "Approval & Processing",
      description: "Once approved, the refund is processed back to your original payment method",
      timeframe: "2-3 business days"
    },
    {
      step: 4,
      title: "Refund Completion",
      description: "Refund appears in your account (timing varies by bank/payment provider)",
      timeframe: "3-10 business days"
    }
  ];

  const exceptions = [
    "Service interruptions due to technical issues beyond AB Textiles' control",
    "Account suspension due to violation of Terms of Service",
    "Chargebacks or disputed payments (refunds become void)",
    "Requests made after the applicable refund timeframe",
    "Services used extensively (>80% of billing period)"
  ];

  const faqs = [
    {
      question: "How do I request a refund?",
      answer: "You can request a refund by logging into your account and visiting the billing section, or by contacting our customer support team at support@abplaytv.com."
    },
    {
      question: "Will I lose access immediately after requesting a refund?",
      answer: "No, you'll continue to have access to Abplay TV until the end of your current billing period, even if a refund is approved."
    },
    {
      question: "Can I get a partial refund if I cancel mid-month?",
      answer: "For monthly subscriptions cancelled within 7 days, you receive a full refund. For annual subscriptions, prorated refunds are available within 30 days."
    },
    {
      question: "What if my payment method is no longer valid?",
      answer: "If we cannot refund to your original payment method, we'll contact you to arrange an alternative refund method, such as account credit or bank transfer."
    },
    {
      question: "Are there any fees for processing refunds?",
      answer: "AB Textiles does not charge any fees for processing legitimate refunds. However, your bank or payment provider may have their own policies."
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
                <RefreshCw className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                Refund <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                AB Textiles is committed to customer satisfaction. Learn about our straightforward refund policy 
                for Abplay TV services and how to request a refund if needed.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">30-Day Satisfaction Guarantee</h3>
                    <p className="text-muted-foreground">
                      We're confident you'll love Abplay TV. If you're not completely satisfied within your first 30 days, 
                      we'll provide a full refund. AB Textiles stands behind the quality of our streaming services.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Policy effective: January 1, 2024 | Applies to all new subscriptions
                </p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Refund Eligibility */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Refund <span className="text-gradient">Eligibility</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Check if your subscription type qualifies for a refund
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refundScenarios.map((scenario, index) => (
              <AnimatedSection key={scenario.scenario} delay={index * 100}>
                <Card className="card-premium p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{scenario.scenario}</h3>
                    <scenario.icon className={`w-6 h-6 ${scenario.color} flex-shrink-0`} />
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Timeframe:</span>
                      <p className="text-sm">{scenario.timeframe}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Process:</span>
                      <p className="text-sm">{scenario.process}</p>
                    </div>
                  </div>
                  
                  <div className={`mt-4 px-3 py-2 rounded-lg text-sm font-medium ${
                    scenario.eligible 
                      ? "bg-green-500/10 text-green-500" 
                      : "bg-red-500/10 text-red-500"
                  }`}>
                    {scenario.eligible ? "Eligible for Refund" : "Limited/No Refund"}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Refund <span className="text-gradient">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to request and receive your refund
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:transform lg:-translate-x-0.5"></div>
              
              <div className="space-y-12">
                {refundProcess.map((step, index) => (
                  <AnimatedSection key={step.step} delay={index * 150}>
                    <div className="relative flex items-center">
                      {/* Step number */}
                      <div className="absolute left-8 w-4 h-4 bg-primary rounded-full z-10 flex items-center justify-center lg:left-1/2 lg:transform lg:-translate-x-2">
                        <span className="text-xs text-primary-foreground font-bold">{step.step}</span>
                      </div>
                      
                      {/* Content */}
                      <div className="ml-20 lg:ml-0 lg:w-full">
                        <Card className="card-premium p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                            <div className="lg:text-center">
                              <div className="flex items-center space-x-2 lg:justify-center">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium">{step.timeframe}</span>
                              </div>
                            </div>
                            <div className="lg:text-right">
                              {index === 0 && (
                                <Button className="btn-hero w-full lg:w-auto">
                                  Start Refund Request
                                </Button>
                              )}
                            </div>
                          </div>
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

      {/* Exceptions */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Card className="card-premium p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Refund Exceptions</h3>
                    <p className="text-muted-foreground mb-6">
                      Certain circumstances may affect refund eligibility. Please review these exceptions:
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exceptions.map((exception, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{exception}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our refund policy
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 100}>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <CreditCard className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Need Help with a <span className="text-gradient">Refund?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our billing support team is here to help with any refund questions or requests.
                AB Textiles is committed to making the process as smooth as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Billing Support</h3>
                  <p className="text-muted-foreground mb-2">Refunds & Billing Issues</p>
                  <p className="text-muted-foreground">billing@abplaytv.com</p>
                </Card>
                <Card className="card-premium p-6">
                  <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                  <p className="text-muted-foreground mb-2">General Support</p>
                  <p className="text-muted-foreground">support@abplaytv.com</p>
                </Card>
              </div>
              <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Button className="btn-hero text-lg px-8 py-4">
                  Contact Support Team
                </Button>
              </Link>
              <p className="text-muted-foreground mt-4">
                Available 24/7 • Average response time: 2 hours
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Refund;