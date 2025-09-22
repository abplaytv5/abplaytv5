import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, HeadphonesIcon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", category: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help within 24 hours",
      contact: "support@abplaytv.com",
      action: "mailto:support@abplaytv.com"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      description: "Mon-Fri 9AM-6PM EST",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Available 24/7",
      contact: "Start Live Chat",
      action: "#"
    },
    {
      icon: Globe,
      title: "Help Center",
      description: "Browse FAQs & guides",
      contact: "Visit Help Center",
      action: "#"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Streaming Ave, Suite 100",
      zipcode: "New York, NY 10001",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "Los Angeles", 
      address: "456 Media Blvd, Floor 15",
      zipcode: "Los Angeles, CA 90210",
      phone: "+1 (555) 987-6543"
    },
    {
      city: "London",
      address: "789 Tech Street, Level 8",
      zipcode: "London, UK SW1A 1AA",
      phone: "+44 20 7123 4567"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-background via-card/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Need help with your Abplay TV experience? Our support team is here to assist you 24/7.
                Reach out to us and we'll get back to you as soon as possible.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact Methods */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <Card key={item.title} className="card-premium p-6 text-center hover:shadow-glow transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <a 
                    href={item.action}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {item.contact}
                  </a>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing & Subscription</SelectItem>
                          <SelectItem value="content">Content & Channels</SelectItem>
                          <SelectItem value="account">Account Management</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide detailed information about your inquiry..."
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="btn-hero w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Company Info */}
            <AnimatedSection delay={300}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <p className="text-muted-foreground mb-8">
                  Visit us at one of our locations worldwide or reach out digitally.
                </p>

                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <Card key={office.city} className="card-premium p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">{office.city}</h4>
                          <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                          <p className="text-muted-foreground text-sm mb-2">{office.zipcode}</p>
                          <p className="text-primary font-medium text-sm">{office.phone}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Business Hours */}
                <Card className="card-premium p-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                        <p>Sunday: Closed</p>
                        <p className="text-primary font-medium mt-2">
                          <HeadphonesIcon className="w-4 h-4 inline mr-1" />
                          24/7 Live Chat Available
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Need Quick Help?</h2>
              <p className="text-muted-foreground">
                Check out these common questions before reaching out
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Account Issues", description: "Login problems, password reset, account settings" },
                { title: "Billing Support", description: "Payment issues, subscription changes, refunds" },
                { title: "Technical Help", description: "Streaming problems, app issues, device setup" }
              ].map((item, index) => (
                <Card key={item.title} className="card-premium p-6 text-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;