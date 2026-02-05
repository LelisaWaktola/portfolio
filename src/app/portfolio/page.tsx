import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PortfolioInteractive from './components/PortfolioInteractive';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Portfolio - My Work & Projects',
  description: 'Browse my portfolio of web development, mobile apps, and design projects. See case studies and technical implementations.',
  keywords: ['portfolio', 'projects', 'web development', 'case studies', 'UI/UX design'],
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="section bg-gradient-to-b from-muted/30 to-background">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Icon name="BriefcaseIcon" size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                10+ Completed Projects
              </span>
            </div>
            <h1 className="font-heading font-bold text-display-md md:text-display-lg text-foreground mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A curated collection of projects showcasing my expertise in Full Stack web development.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section">
          <div className="container-custom">
            <PortfolioInteractive />
          </div>
        </section>
        {/* CTA */}
        <section className="section bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="font-heading font-bold text-display-sm text-foreground mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how we can work together.
            </p>
            <a href="/contact" className="btn btn-primary">
              Start a Project
              <Icon name="ArrowRightIcon" size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}