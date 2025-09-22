import { 
  Tv, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Gamepad2, 
  Cast,
  Download,
  Wifi,
  Settings,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import devicesHero from "@/assets/devices-hero.jpg";

const Devices = () => {
  const deviceCategories = [
    {
      title: "Smart TVs",
      icon: Tv,
      description: "Watch directly on your smart TV with built-in apps",
      devices: [
        { name: "Samsung Smart TV", years: "2018-2024", available: true },
        { name: "LG webOS TV", years: "2018-2024", available: true },
        { name: "Sony Android TV", years: "2019-2024", available: true },
        { name: "TCL Roku TV", years: "2017-2024", available: true },
        { name: "Hisense VIDAA TV", years: "2020-2024", available: true },
        { name: "Vizio SmartCast", years: "2018-2024", available: true }
      ]
    },
    {
      title: "Streaming Devices",
      icon: Cast,
      description: "Connect any TV to the world of streaming",
      devices: [
        { name: "Roku Ultra/Express", years: "All models", available: true },
        { name: "Apple TV 4K/HD", years: "4th gen+", available: true },
        { name: "Amazon Fire TV Stick", years: "All models", available: true },
        { name: "Google Chromecast", years: "3rd gen+", available: true },
        { name: "NVIDIA Shield TV", years: "All models", available: true },
        { name: "Xiaomi Mi Box", years: "S/4K", available: true }
      ]
    },
    {
      title: "Mobile Devices",
      icon: Smartphone,
      description: "Stream on the go with our mobile apps",
      devices: [
        { name: "iPhone", years: "iOS 12+", available: true },
        { name: "iPad", years: "iOS 12+", available: true },
        { name: "Android Phone", years: "Android 7+", available: true },
        { name: "Android Tablet", years: "Android 7+", available: true },
        { name: "Windows Phone", years: "Discontinued", available: false },
        { name: "Amazon Fire Tablet", years: "7th gen+", available: true }
      ]
    },
    {
      title: "Computers",
      icon: Monitor,
      description: "Watch on any computer with a web browser",
      devices: [
        { name: "Windows PC", years: "Windows 10+", available: true },
        { name: "Mac", years: "macOS 10.14+", available: true },
        { name: "Chromebook", years: "ChromeOS 88+", available: true },
        { name: "Linux", years: "Ubuntu 18+", available: true },
        { name: "Web Browsers", years: "Chrome, Firefox, Safari, Edge", available: true }
      ]
    },
    {
      title: "Gaming Consoles",
      icon: Gamepad2,
      description: "Game and stream all in one place",
      devices: [
        { name: "PlayStation 5", years: "All models", available: true },
        { name: "PlayStation 4", years: "All models", available: true },
        { name: "Xbox Series X/S", years: "All models", available: true },
        { name: "Xbox One", years: "All models", available: true },
        { name: "Nintendo Switch", years: "Coming soon", available: false }
      ]
    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "Seamless Sync",
      description: "Start watching on one device and continue on another without missing a beat"
    },
    {
      icon: Download,
      title: "Offline Viewing",
      description: "Download content on mobile devices to watch without an internet connection"
    },
    {
      icon: Settings,
      title: "Quality Control",
      description: "Automatic quality adjustment based on your internet speed and device capabilities"
    },
    {
      icon: Cast,
      title: "Screen Casting",
      description: "Cast from your phone or tablet to any compatible TV or streaming device"
    }
  ];

  const specifications = [
    {
      category: "Internet Speed",
      requirements: [
        "Minimum: 5 Mbps for HD quality",
        "Recommended: 25 Mbps for 4K quality",
        "Multiple streams: +5 Mbps per additional stream"
      ]
    },
    {
      category: "Storage Space",
      requirements: [
        "Mobile app: 100 MB initial download",
        "Offline downloads: 500 MB - 2 GB per hour",
        "Smart TV apps: 50-200 MB depending on platform"
      ]
    },
    {
      category: "Operating Systems",
      requirements: [
        "iOS: Version 12.0 or higher",
        "Android: Version 7.0 (API level 24) or higher",
        "Windows: Windows 10 version 1903 or higher"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${devicesHero})` }}
        />
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Stream on Every
              <span className="text-gradient block">Device You Own</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Abplay TV works seamlessly across 100+ device types. Start watching on one device and continue on another.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Button className="btn-hero text-xl px-12 py-6">
              Download Apps
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Device Categories */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Supported <span className="text-gradient">Devices</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Watch Abplay TV on virtually any screen in your home
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {deviceCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 100}>
                <Card className="card-premium p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-6">
                      <category.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.devices.map((device, deviceIndex) => (
                      <div 
                        key={device.name}
                        className={`p-4 rounded-lg border transition-all duration-300 ${
                          device.available 
                            ? "border-border hover:border-primary bg-card" 
                            : "border-border/50 bg-muted/50 opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{device.name}</h4>
                          {device.available ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-muted-foreground/30" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{device.years}</p>
                        {!device.available && (
                          <p className="text-xs text-muted-foreground mt-1">Not available</p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Cross-Device <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Advanced capabilities that work across all your devices
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="card-premium p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                System <span className="text-gradient">Requirements</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Make sure your devices meet these minimum requirements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <AnimatedSection key={spec.category} delay={index * 150}>
                <Card className="card-premium p-8 h-full">
                  <h3 className="text-xl font-bold mb-6 text-center">{spec.category}</h3>
                  <ul className="space-y-4">
                    {spec.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-spacing bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Get Started on <span className="text-gradient">Any Device</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Download the Abplay TV app or visit our website to start streaming
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Button className="btn-hero p-6 h-auto flex-col space-y-2">
                  <Smartphone className="w-8 h-8" />
                  <span>Mobile Apps</span>
                </Button>
                <Button className="btn-hero p-6 h-auto flex-col space-y-2">
                  <Tv className="w-8 h-8" />
                  <span>Smart TV</span>
                </Button>
                <Button className="btn-hero p-6 h-auto flex-col space-y-2">
                  <Monitor className="w-8 h-8" />
                  <span>Web Browser</span>
                </Button>
                <Button className="btn-hero p-6 h-auto flex-col space-y-2">
                  <Cast className="w-8 h-8" />
                  <span>Streaming Box</span>
                </Button>
              </div>
              
              <p className="text-muted-foreground">
                Available on App Store, Google Play, and all major streaming platforms
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Devices;