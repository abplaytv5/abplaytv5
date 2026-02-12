import { Link } from "react-router-dom";
import { Play, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Features", path: "/features" },
      { name: "Devices", path: "/devices" },
    ],
    support: [
      { name: "FAQ", path: "/faq" },
      { name: "Contact Us", path: "/contact" },
    ],
    legal: [
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Refund Policy", path: "/refund" },
      { name: "Disclaimer", path: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Independent Service Disclosure & Disclaimer - Above Footer Content */}
        <div className="mb-8 pb-8 border-b border-border space-y-4">
          <div className="bg-accent/30 border border-primary/20 rounded-lg p-6">
            <p className="text-sm text-center leading-relaxed text-foreground">
              <strong className="font-semibold">Important Disclosure:</strong> HorizonCast TV is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide educational guidance and support only. All trademarks belong to their respective owners.
            </p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <p className="text-xs text-center leading-relaxed text-foreground">
              <strong className="font-semibold">Disclaimer:</strong> The information provided on this website is for educational purposes only. We make no warranties regarding accuracy or completeness. Service availability, pricing, and features are determined by individual providers. Users are responsible for verifying all information independently. Our separate service fees do not include provider charges. For complete details, please review our <Link to="/disclaimer" className="text-primary hover:underline font-medium">full disclaimer</Link>.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6" onClick={handleNavigation}>
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-gradient">HorizonCast TV</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Independent service assistance platform helping users navigate cable, internet, and streaming options since 2025.
            </p>
            
            {/* Contact Info */}
            <div className="mb-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                📞 <a href="tel:+18338147663" className="text-primary hover:text-primary/80 transition-colors">(833) 814-7663</a>
              </p>
              <p className="text-sm text-muted-foreground">
                ✉️ <a href="mailto:abplaytv5@gmail.com" className="text-primary hover:text-primary/80 transition-colors">abplaytv5@gmail.com</a>
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-secondary hover:bg-accent rounded-lg flex items-center justify-center 
                           text-muted-foreground hover:text-primary transition-all duration-300 
                           hover:scale-110 hover:shadow-card"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={handleNavigation}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="text-center mb-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              HorizonCast TV is an independent third-party service assistance startup. All trademarks and service names referenced on this site belong to their respective owners. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} HorizonCast TV. Owned and operated by AB TEXTILES. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground text-sm">Nationwide Assistance Available</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 text-sm font-medium">Support Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;