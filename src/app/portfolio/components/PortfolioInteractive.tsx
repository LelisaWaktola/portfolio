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
    id: 'project_lms',
    title: 'Loan Management System',
    category: 'Web Development',
    categoryValue: 'web',
    description:
      'A full-stack web application designed to manage loans, users, and repayment schedules with secure authentication and an admin dashboard.',
    image: '/assets/images/loan.jpg',
    imageAlt:
      'Loan management system admin dashboard showing financial analytics and loan data on a laptop screen',
    tags: ['Spring Boot', 'React', 'PostgreSQL'],
    size: 'large',
    metrics: [
      { label: 'Loans Managed', value: '10K+' },
      { label: 'System Accuracy', value: '99%' },
    ],
  },
  {
    id: 'project_2',
    title: 'Smart PC Tracker App',
    category: 'Web Development',
    categoryValue: 'web',
    description:
      'A web-based security application that verifies and tracks PCs through device scanning at library entry points using a centralized dashboard.',
    image: '/assets/images/smartpc.jpg',
    imageAlt:
      'Security monitoring dashboard on a laptop showing system status, alerts, and device tracking information',
    tags: ['React', 'Express.js', 'REST API', 'MongoDB'],
    size: 'large',
    metrics: [
      { label: 'Devices Tracked', value: '1K+' },
      { label: 'Response Time', value: '<100ms' },
    ],
  },
  {
    id: 'project_3',
    title: 'Developer Portfolio Website',
    category: 'Web Development',
    categoryValue: 'web',
    description:
      'A responsive personal portfolio website created to present projects, technical skills, and professional information in a clean layout.',
    image: '/assets/images/portfolio.jpg',
    imageAlt:
      'Developer portfolio website displayed on a laptop showing projects and skills sections',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    size: 'large',
    metrics: [
      { label: 'Active Users', value: '50K+' },
      { label: 'App Rating', value: '4.8★' },
    ],
  },
  {
    id: 'project_4',
    title: 'Calculator App',
    category: 'Web Development',
    categoryValue: 'web',
    description:
      'A simple and responsive calculator web application that performs basic arithmetic operations with a clean user interface.',
    image: '/assets/images/calculator.jpg',
    imageAlt:
      'Calculator web application interface displayed on a laptop screen',
    tags: ['HTML', 'CSS', 'JavaScript'],
    size: 'large',
    metrics: [
      { label: 'Operations Supported', value: '10+' },
      { label: 'Load Time', value: '<1s' },
    ],
  },
];



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