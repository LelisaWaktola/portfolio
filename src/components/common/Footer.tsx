import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = [
    { id: 'footer_portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'footer_contact', label: 'Contact', href: '/contact' },
    { id: 'footer_resume', label: 'Resume', href: '#resume' },
  ];

  const socialLinks = [
    { id: 'social_github', icon: 'CodeBracketIcon', href: 'https://github.com', label: 'GitHub' },
    { id: 'social_linkedin', icon: 'UserGroupIcon', href: 'https://linkedin.com', label: 'LinkedIn' },
    { id: 'social_twitter', icon: 'AtSymbolIcon', href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo/Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">P</span>
            </div>
            <span className="font-heading font-bold text-foreground">Portfolio</span>
          </div>

          {/* Center: Links */}
          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social + Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
            <span className="text-sm text-muted-foreground hidden md:block">
              © {currentYear}
            </span>
          </div>
        </div>

        {/* Mobile Copyright */}
        <div className="md:hidden text-center mt-6">
          <span className="text-sm text-muted-foreground">© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}