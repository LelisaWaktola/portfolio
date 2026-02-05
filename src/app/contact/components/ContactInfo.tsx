import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  label: string;
  value: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    id: 'contact_email',
    icon: 'EnvelopeIcon',
    label: 'Email',
    value: 'lalisawaktola061@gmail.com',
    href: 'mailto:lalisawaktola061@gmail.com',
  },
  {
    id: 'contact_phone',
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '+251-924-647-074',
    href: 'tel:+251924647074',
  },
  {
    id: 'contact_location',
    icon: 'MapPinIcon',
    label: 'Location',
    value: 'Addis Abeba, Ethiopia',
    href: '#',
  },
];

const socialLinks = [
  {
    id: 'social_github',
    icon: 'CodeBracketIcon',
    label: 'GitHub',
    href: 'https://github.com/LelisaWaktola',
    username: '@LelisaWaktola',
  },
  {
    id: 'social_linkedin',
    icon: 'UserGroupIcon',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lelowakt',
    username: '/in/lelowakt',
  },
  {
    id: 'social_twitter',
    icon: 'AtSymbolIcon',
    label: 'Twitter',
    href: 'https://twitter.com/lelowakt',
    username: '@lelowakt',
  },
  {
    id: 'social_dribbble',
    icon: 'PaintBrushIcon',
    label: 'Dribbble',
    href: 'https://dribbble.com/lalisa-waktola',
    username: '@lalisa-waktola',
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-xl text-foreground mb-6">
          Get In Touch
        </h3>
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href}
            className="card card-hover flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all">
              <Icon
                name={method.icon as any}
                size={24}
                className="text-primary group-hover:text-primary-foreground transition-colors"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{method.label}</p>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {method.value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="card space-y-4">
        <h3 className="font-heading font-bold text-xl text-foreground">
          Connect on Social
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-muted hover:bg-primary hover:text-primary-foreground transition-all group"
            >
              <Icon name={social.icon as any} size={20} />
              <div className="text-left">
                <p className="text-xs font-medium">{social.label}</p>
                <p className="text-xs opacity-80">{social.username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}