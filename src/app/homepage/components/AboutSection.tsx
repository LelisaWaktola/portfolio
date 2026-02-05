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
    id: 'achievement_udacity_android',
    icon: 'DevicePhoneMobileIcon',
    title: 'Android Developer Fundamentals',
    description:
      'Udacity certification (Jan 2026). Focused on Android app development fundamentals, UI components, activities, and application lifecycle.',
  },
  {
    id: 'achievement_udacity_programming',
    icon: 'CodeBracketIcon',
    title: 'Programming Fundamentals',
    description:
      'Udacity certification (Aug 2024). Covered core programming concepts with hands-on practice in JavaScript, HTML5, and CSS.',
  },
];


export default function AboutSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
            <div className="relative w-48 h-52 md:w-64 md:h-72 rounded-full overflow-hidden">
              <AppImage
                src="/assets/images/my_photo.png"
                alt="Professional headshot"
                className="w-full h-full object-cover animate-ken-burns"
              />
            </div>
          </div> {/* ✅ CLOSED Left Image */}

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-display-sm md:text-display-md text-foreground">
                About Me
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Full Stack Java Developer with 2 years of hands-on experience
                building scalable and reliable applications using Java and Spring Boot.
                I specialize in developing RESTful APIs, implementing business logic,
                and working across the full development lifecycle—from requirements
                analysis to deployment.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Core skills:</strong> Java, Spring Boot, REST APIs, SQL & MongoDB,
                Git, Problem Solving. I am passionate about writing clean, maintainable
                code and continuously improving my skills. I am currently seeking a
                remote Web Application Development role.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <Icon
                    name={achievement.icon as any}
                    size={24}
                    className="text-primary mb-3"
                  />

                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <a href="#resume" className="btn btn-primary">
                Download Resume
                <Icon name="ArrowDownTrayIcon" size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
