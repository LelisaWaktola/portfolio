import Icon from '@/components/ui/AppIcon';

interface Skill {
  id: string;
  name: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { id: 'skill_java', name: 'Java', icon: 'CpuChipIcon', category: 'Language' },
  { id: 'skill_typescript', name: 'TypeScript', icon: 'CommandLineIcon', category: 'Language' },
  { id: 'skill_python', name: 'Python', icon: 'BeakerIcon', category: 'Language' },
  // Frameworks
  { id: 'skill_spring', name: 'Spring Boot', icon: 'RocketLaunchIcon', category: 'Framework' },
  // Frontend / Styling
  { id: 'skill_tailwind', name: 'Tailwind CSS', icon: 'PaintBrushIcon', category: 'Styling' },
  // Backend
  { id: 'skill_node', name: 'Node.js', icon: 'ServerStackIcon', category: 'Backend' },
  { id: 'skill_sql', name: 'SQL', icon: 'CircleStackIcon', category: 'Backend' },
  { id: 'skill_mongodb', name: 'MongoDB', icon: 'CircleStackIcon', category: 'Backend' },
  // Tools
  { id: 'skill_git', name: 'Git', icon: 'CodeBracketSquareIcon', category: 'Tools' },
 // Cloud
  { id: 'skill_aws', name: 'AWS', icon: 'CloudIcon', category: 'Cloud' },
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