import { Link } from "react-router-dom";
import { Play, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

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
      { name: "Help Center", path: "#" },
      { name: "Contact Us", path: "/contact" },
      { name: "System Status", path: "#" },
      { name: "Accessibility", path: "#" },
    ],
    legal: [
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Refund Policy", path: "/refund" },
      { name: "Cookie Policy", path: "#" },
    ],
    resources: [
      { name: "Download Apps", path: "#" },
      { name: "Gift Cards", path: "#" },
      { name: "Media Center", path: "#" },
      { name: "Investor Relations", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6" onClick={handleNavigation}>
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-gradient">Abplay TV</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium streaming entertainment platform owned and operated by AB Textiles. 
              Experience unlimited movies, shows, and live TV anywhere, anytime.
            </p>
            
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
        <div className="border-t border-border mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Abplay TV. A product of AB Textiles. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-muted-foreground text-sm">Available worldwide</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-500 text-sm font-medium">Service Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;