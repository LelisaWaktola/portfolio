import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';

export const metadata: Metadata = {
  title: 'Portfolio - Creative Developer & Designer',
  description: 'Professional portfolio showcasing web development and design projects. Specializing in React, Next.js, and modern web technologies.',
  keywords: ['portfolio', 'web developer', 'designer', 'React', 'Next.js', 'full-stack'],
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
      </main>
      <Footer />
    </>
  );
}