import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link: string;
}

const featuredProjects: Project[] = [
{
  id: 'project_ecommerce',
  title: 'E-Commerce Platform',
  category: 'Web Development',
  description: 'Full-stack marketplace with real-time inventory and payment processing',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
  imageAlt: 'Modern e-commerce website interface showing product grid on laptop screen',
  tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  link: '/portfolio'
},
{
  id: 'project_dashboard',
  title: 'Analytics Dashboard',
  category: 'SaaS Product',
  description: 'Real-time data visualization platform for business intelligence',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1011e1b57-1768551941858.png",
  imageAlt: 'Analytics dashboard with colorful charts and graphs on computer monitor',
  tags: ['React', 'D3.js', 'Node.js'],
  link: '/portfolio'
},
{
  id: 'project_mobile',
  title: 'Fitness Tracking App',
  category: 'Mobile Design',
  description: 'Cross-platform mobile app with workout tracking and social features',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c29d13b2-1764639853707.png",
  imageAlt: 'Smartphone displaying fitness app interface with workout statistics',
  tags: ['React Native', 'Firebase', 'Figma'],
  link: '/portfolio'
}];


export default function FeaturedProjectsSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading font-bold text-display-sm md:text-display-md text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of recent work that showcases my skills and approach
            </p>
          </div>
          <Link
            href="/portfolio"
            className="btn btn-secondary">

            View All Projects
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) =>
          <Link
            key={project.id}
            href={project.link}
            className={`group animate-fade-in-up stagger-${index + 1}`}>

              <div className="card card-hover p-0 overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm font-semibold">View Project</span>
                      <Icon name="ArrowRightIcon" size={16} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-primary mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) =>
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-muted text-xs font-medium text-foreground">

                        {tag}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}