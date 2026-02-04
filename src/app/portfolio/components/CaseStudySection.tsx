import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudyData {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  techStack: string[];
  images: {
    src: string;
    alt: string;
  }[];
}

const caseStudy: CaseStudyData = {
  title: 'E-Commerce Platform Redesign',
  subtitle: 'Transforming a legacy system into a modern, scalable marketplace',
  problem: 'The client had an outdated e-commerce platform with poor user experience, slow load times, and limited payment options. Customer drop-off rate was 68% at checkout, and mobile sales were nearly impossible.',
  solution: 'Rebuilt the entire platform from scratch using Next.js for optimal performance, implemented a headless CMS for content management, integrated Stripe for seamless payments, and designed a mobile-first interface with intuitive navigation.',
  results: [
  { metric: 'Conversion Rate', value: '+156%' },
  { metric: 'Page Load Time', value: '-73%' },
  { metric: 'Mobile Sales', value: '+340%' },
  { metric: 'Customer Satisfaction', value: '4.8/5' }],

  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Vercel'],
  images: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1663ba35d-1766477560298.png",
    alt: 'E-commerce platform dashboard showing analytics and sales data'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4452cb7-1766983501065.png",
    alt: 'Product page interface with add to cart functionality'
  }]

};

export default function CaseStudySection() {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-foreground mb-4">
            {caseStudy.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {caseStudy.subtitle}
          </p>
        </div>

        {/* Main Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <AppImage
            src={caseStudy.images[0].src}
            alt={caseStudy.images[0].alt}
            className="w-full h-[500px] object-cover" />

        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Problem */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center">
                <Icon name="ExclamationTriangleIcon" size={24} className="text-error" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground">
                The Problem
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                <Icon name="LightBulbIcon" size={24} className="text-success" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground">
                The Solution
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 mb-16">
          <h3 className="font-heading font-bold text-3xl text-white text-center mb-12">
            Results That Matter
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) =>
            <div key={index} className="text-center">
                <p className="text-5xl font-bold text-white mb-2">
                  {result.value}
                </p>
                <p className="text-white/80">
                  {result.metric}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-16">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-8">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.techStack.map((tech) =>
            <span
              key={tech}
              className="px-6 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors">

                {tech}
              </span>
            )}
          </div>
        </div>

        {/* Additional Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <AppImage
            src={caseStudy.images[1].src}
            alt={caseStudy.images[1].alt}
            className="w-full h-[400px] object-cover" />

        </div>
      </div>
    </section>);

}