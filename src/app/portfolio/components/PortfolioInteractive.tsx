'use client';

import { useState } from 'react';
import ProjectFilterClient from './ProjectFilterClient';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  category: string;
  categoryValue: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  size: 'small' | 'medium' | 'large';
  metrics?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
{
  id: 'project_1',
  title: 'E-Commerce Platform',
  category: 'Web Development',
  categoryValue: 'web',
  description: 'Full-stack marketplace with real-time inventory, payment processing, and advanced analytics dashboard',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
  imageAlt: 'Modern e-commerce website interface showing product grid on laptop screen',
  tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
  size: 'large',
  metrics: [
  { label: 'Revenue Growth', value: '+45%' },
  { label: 'User Retention', value: '89%' }]

},
{
  id: 'project_2',
  title: 'Analytics Dashboard',
  category: 'SaaS Product',
  categoryValue: 'web',
  description: 'Real-time data visualization platform for business intelligence with custom reporting',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1011e1b57-1768551941858.png",
  imageAlt: 'Analytics dashboard with colorful charts and graphs on computer monitor',
  tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
  size: 'medium',
  metrics: [
  { label: 'Data Points', value: '1M+' },
  { label: 'Response Time', value: '<100ms' }]

},
{
  id: 'project_3',
  title: 'Fitness Tracking App',
  category: 'Mobile Design',
  categoryValue: 'mobile',
  description: 'Cross-platform mobile app with workout tracking, social features, and personalized plans',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c29d13b2-1764639853707.png",
  imageAlt: 'Smartphone displaying fitness app interface with workout statistics',
  tags: ['React Native', 'Firebase', 'Figma', 'Redux'],
  size: 'medium',
  metrics: [
  { label: 'Active Users', value: '50K+' },
  { label: 'App Rating', value: '4.8★' }]

},
{
  id: 'project_4',
  title: 'Restaurant Booking System',
  category: 'Web Development',
  categoryValue: 'web',
  description: 'Reservation management system with table optimization and customer CRM',
  image: "https://images.unsplash.com/photo-1588239338623-a6eb3d5a439e",
  imageAlt: 'Restaurant interior with modern booking tablet on counter',
  tags: ['Vue.js', 'Express', 'MySQL'],
  size: 'small'
},
{
  id: 'project_5',
  title: 'Brand Identity System',
  category: 'UI/UX Design',
  categoryValue: 'design',
  description: 'Complete brand identity including logo, color system, and design guidelines',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5d87104-1764656054680.png",
  imageAlt: 'Brand identity mockup showing logo variations and color palette',
  tags: ['Figma', 'Illustrator', 'Brand Strategy'],
  size: 'small'
},
{
  id: 'project_6',
  title: 'Social Media App',
  category: 'Mobile Development',
  categoryValue: 'mobile',
  description: 'Social networking platform with real-time messaging and content sharing',
  image: "https://images.unsplash.com/photo-1661358787891-629ec934fcc9",
  imageAlt: 'Multiple smartphones showing social media app interface',
  tags: ['Flutter', 'GraphQL', 'AWS'],
  size: 'medium',
  metrics: [
  { label: 'Daily Messages', value: '100K+' },
  { label: 'Engagement', value: '92%' }]

},
{
  id: 'project_7',
  title: 'Portfolio Website',
  category: 'Web Design',
  categoryValue: 'design',
  description: 'Creative portfolio with animated interactions and smooth transitions',
  image: "https://images.unsplash.com/photo-1619209629065-e9a2b225b24b",
  imageAlt: 'Laptop displaying creative portfolio website with modern design',
  tags: ['Webflow', 'GSAP', 'Three.js'],
  size: 'small'
},
{
  id: 'project_8',
  title: 'Project Management Tool',
  category: 'SaaS Product',
  categoryValue: 'web',
  description: 'Collaborative workspace for teams with task management and time tracking',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1330025ac-1770097351668.png",
  imageAlt: 'Project management interface showing kanban board and task lists',
  tags: ['Next.js', 'Prisma', 'tRPC', 'Vercel'],
  size: 'large',
  metrics: [
  { label: 'Teams', value: '500+' },
  { label: 'Tasks Completed', value: '1M+' }]

}];


export default function PortfolioInteractive() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' ?
  projects :
  projects.filter((p) => p.categoryValue === activeFilter);

  return (
    <div className="space-y-12">
      {/* Filter */}
      <ProjectFilterClient onFilterChange={setActiveFilter} />

      {/* Projects Grid */}
      <div className="grid md:grid-cols-6 gap-6 auto-rows-auto">
        {filteredProjects.map((project) =>
        <ProjectCard key={project.id} project={project} size={project.size} />
        )}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 &&
      <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No projects found in this category
          </p>
        </div>
      }
    </div>);

}