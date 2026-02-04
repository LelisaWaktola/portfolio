'use client';

import { useState, useEffect } from 'react';


interface Category {
  id: string;
  label: string;
  value: string;
}

const categories: Category[] = [
  { id: 'filter_all', label: 'All Projects', value: 'all' },
  { id: 'filter_web', label: 'Web Development', value: 'web' },
  { id: 'filter_mobile', label: 'Mobile Apps', value: 'mobile' },
  { id: 'filter_design', label: 'UI/UX Design', value: 'design' },
];

interface ProjectFilterClientProps {
  onFilterChange: (category: string) => void;
}

export default function ProjectFilterClient({ onFilterChange }: ProjectFilterClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleCategoryChange = (value: string) => {
    if (!isHydrated) return;
    setActiveCategory(value);
    onFilterChange(value);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.value)}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${
            activeCategory === category.value
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-muted text-foreground hover:bg-primary/10'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}