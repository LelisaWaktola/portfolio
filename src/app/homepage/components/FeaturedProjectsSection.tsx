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
    id: 'project_lms',
    title: 'Loan Management System',
    category: 'Web Development',
    description:
      'A full-stack web application designed to manage loans, users, and repayment schedules with secure authentication and an admin dashboard.',
    image: '/assets/images/loan.jpg',
    imageAlt:
      'Loan management system admin dashboard showing financial analytics and loan data on a laptop screen',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    link: 'https://github.com/LelisaWaktola/Loan_Managment',
  },
  {
    id: 'project_stolen_pc_detector',
    title: 'Smart PC Tracker App',
    category: 'Web Development',
    description:
      'A web-based security application that verifies and tracks PCs through device scanning at library entry points using a centralized dashboard.',
    image: '/assets/images/smartpc.jpg',
    imageAlt:
      'Security monitoring dashboard on a laptop showing system status, alerts, and device tracking information',
    tags: ['React', 'Express.js', 'REST API', 'MongoDB'],
    link: 'https://github.com/Ibnunezif/device-ownership-detector/tree/frontend_ui',
  },
  {
    id: 'project_portfolio',
    title: 'Developer Portfolio Website',
    category: 'Web Development',
    description:
      'A responsive personal portfolio website created to present projects, technical skills, and professional information in a clean layout.',
    image: '/assets/images/portfolio.jpg',
    imageAlt:
      'Developer portfolio website displayed on a laptop screen with projects and skills sections',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com/LelisaWaktola/portfolio',
  },
];



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