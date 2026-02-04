import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
{
  id: 'achievement_1',
  icon: 'TrophyIcon',
  title: 'Award Winner',
  description: 'Best UI/UX Design 2025'
},
{
  id: 'achievement_2',
  icon: 'AcademicCapIcon',
  title: 'Certified Expert',
  description: 'Google Cloud Professional'
},
{
  id: 'achievement_3',
  icon: 'SparklesIcon',
  title: 'Innovation Leader',
  description: 'Tech Conference Speaker'
}];


export default function AboutSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_14fef1498-1767698536258.png"
                alt="Person working on laptop with code on screen in modern office environment"
                className="w-full h-[500px] object-cover" />

            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl opacity-10" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-display-sm md:text-display-md text-foreground">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer and designer with over 5 years of experience
                creating digital products that make a difference. My expertise spans from building
                scalable web applications to crafting intuitive user interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or sharing knowledge with the developer community through
                talks and articles.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement) =>
              <div
                key={achievement.id}
                className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">

                  <Icon
                  name={achievement.icon as any}
                  size={24}
                  className="text-primary mb-3" />

                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a
                href="#resume"
                className="btn btn-primary">

                Download Resume
                <Icon name="ArrowDownTrayIcon" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}