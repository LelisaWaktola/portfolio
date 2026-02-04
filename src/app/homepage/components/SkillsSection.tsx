import Icon from '@/components/ui/AppIcon';

interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { id: 'skill_react', name: 'React', icon: 'CodeBracketIcon', level: 95, category: 'Frontend' },
  { id: 'skill_typescript', name: 'TypeScript', icon: 'CommandLineIcon', level: 90, category: 'Language' },
  { id: 'skill_nextjs', name: 'Next.js', icon: 'RocketLaunchIcon', level: 92, category: 'Framework' },
  { id: 'skill_tailwind', name: 'Tailwind CSS', icon: 'PaintBrushIcon', level: 95, category: 'Styling' },
  { id: 'skill_node', name: 'Node.js', icon: 'ServerIcon', level: 88, category: 'Backend' },
  { id: 'skill_figma', name: 'Figma', icon: 'SwatchIcon', level: 90, category: 'Design' },
  { id: 'skill_git', name: 'Git', icon: 'DocumentTextIcon', level: 92, category: 'Tools' },
  { id: 'skill_aws', name: 'AWS', icon: 'CloudIcon', level: 85, category: 'Cloud' },
];

export default function SkillsSection() {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit honed through years of hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`card card-hover group animate-fade-in-up stagger-${(index % 5) + 1}`}
            >
              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all">
                  <Icon
                    name={skill.icon as any}
                    size={24}
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{skill.category}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="text-sm font-semibold text-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'Docker', 'PostgreSQL', 'Redis', 'Jest', 'Cypress'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}