import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    imageAlt: string;
    tags: string[];
    metrics?: {
      label: string;
      value: string;
    }[];
  };
  size?: 'small' | 'medium' | 'large';
}

export default function ProjectCard({ project, size = 'medium' }: ProjectCardProps) {
  const sizeClasses = {
    small: 'md:col-span-1',
    medium: 'md:col-span-2',
    large: 'md:col-span-3',
  };

  const heightClasses = {
    small: 'h-80',
    medium: 'h-96',
    large: 'h-[500px]',
  };

  return (
    // 👇 OUTER WRAPPER ADDS GAP
    <div className={`${sizeClasses[size]} p-3 group cursor-pointer`}>
      <div className="card card-hover p-0 overflow-hidden h-full flex flex-col rounded-2xl">
        
        {/* Image */}
        <div className={`relative ${heightClasses[size]} overflow-hidden bg-muted`}>
          <AppImage
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="text-white space-y-4">
                {project.metrics && (
                  <div className="flex gap-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-2xl font-bold">{metric.value}</p>
                        <p className="text-sm opacity-80">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>View Case Study</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-auto">
            <p className="text-sm font-medium text-primary mb-2">
              {project.category}
            </p>
            <h3 className="font-heading font-bold text-xl mb-2 transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-muted text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-3 py-1 rounded-lg bg-muted text-xs text-muted-foreground">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
