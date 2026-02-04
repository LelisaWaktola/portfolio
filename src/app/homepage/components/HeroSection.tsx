import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FloatingCard {
  id: string;
  icon: string;
  label: string;
  value: string;
  position: string;
  delay: string;
}

const floatingCards: FloatingCard[] = [
{
  id: 'card_experience',
  icon: 'BriefcaseIcon',
  label: 'Experience',
  value: '5+ Years',
  position: 'top-20 left-10',
  delay: 'stagger-1'
},
{
  id: 'card_projects',
  icon: 'RocketLaunchIcon',
  label: 'Projects',
  value: '50+ Done',
  position: 'top-40 right-20',
  delay: 'stagger-2'
},
{
  id: 'card_clients',
  icon: 'UserGroupIcon',
  label: 'Happy Clients',
  value: '30+',
  position: 'bottom-32 left-16',
  delay: 'stagger-3'
},
{
  id: 'card_status',
  icon: 'CheckBadgeIcon',
  label: 'Status',
  value: 'Available',
  position: 'bottom-20 right-12',
  delay: 'stagger-4'
}];


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Section */}
          <div className="relative mb-12">
            {/* Floating Cards - Hidden on mobile */}
            <div className="hidden lg:block">
              {floatingCards.map((card) =>
              <div
                key={card.id}
                className={`absolute ${card.position} animate-float ${card.delay}`}>

                  <div className="glass rounded-2xl p-4 shadow-lg hover:shadow-glow transition-all cursor-default">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon name={card.icon as any} size={20} className="text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-medium text-muted-foreground">
                          {card.label}
                        </p>
                        <p className="text-sm font-bold text-foreground">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1ec5c059a-1763298163128.png"
                  alt="Professional headshot of a smiling person in business casual attire against neutral background"
                  className="w-full h-full object-cover animate-ken-burns" />

              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-4xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Available for new projects
              </span>
            </div>

            <h1 className="font-heading font-bold text-display-md md:text-display-lg text-foreground">
              Creative Developer
              <br />
              <span className="text-gradient">& Designer</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful digital experiences with clean code and thoughtful design.
              Specialized in modern web technologies and user-centric solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="/portfolio" className="btn btn-primary">
                View My Work
                <Icon name="ArrowRightIcon" size={18} />
              </a>
              <a href="/contact" className="btn btn-secondary">
                Get in Touch
              </a>
            </div>

            {/* Stats - Mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-4 pt-8 max-w-md mx-auto">
              {floatingCards.map((card) =>
              <div key={card.id} className="glass rounded-xl p-4 text-center">
                  <Icon name={card.icon as any} size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-xs font-medium text-muted-foreground mb-1">
                    {card.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">{card.value}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}