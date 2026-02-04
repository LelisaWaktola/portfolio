import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactFormClient from './components/ContactFormClient';
import ContactInfo from './components/ContactInfo';
import AvailabilityStatus from './components/AvailabilityStatus';
import Icon from '@/components/ui/AppIcon';

export const metadata: Metadata = {
  title: 'Contact - Let\'s Work Together',
  description: 'Get in touch to discuss your project. Available for web development, mobile apps, and design work. Response within 24 hours.',
  keywords: ['contact', 'hire developer', 'freelance', 'project inquiry', 'web development'],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="section bg-gradient-to-b from-muted/30 to-background">
          <div className="container-custom text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full border border-success/20 mb-6">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-success">
                Available for New Projects
              </span>
            </div>
            <h1 className="font-heading font-bold text-display-md md:text-display-lg text-foreground mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and I'll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left: Form (2 columns) */}
              <div className="lg:col-span-2">
                <ContactFormClient />
              </div>

              {/* Right: Info (1 column) */}
              <div className="space-y-8">
                <ContactInfo />
                <AvailabilityStatus />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-muted/30">
          <div className="container-custom max-w-4xl">
            <h2 className="font-heading font-bold text-display-sm text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Project timelines vary based on scope and complexity. A typical website takes 4-6 weeks, while larger applications can take 2-3 months. I provide detailed timelines during our initial consultation.',
                },
                {
                  question: 'Do you work with clients remotely?',
                  answer: 'Yes! I work with clients worldwide through video calls, project management tools, and regular updates. Time zone differences are never an issue.',
                },
                {
                  question: 'What is your pricing structure?',
                  answer: 'I offer both project-based and hourly rates depending on your needs. After understanding your requirements, I provide a detailed proposal with transparent pricing and deliverables.',
                },
                {
                  question: 'Do you provide ongoing support?',
                  answer: 'Absolutely! I offer maintenance packages and ongoing support to ensure your project continues to perform optimally after launch.',
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="card group"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <Icon
                      name="ChevronDownIcon"
                      size={20}
                      className="text-muted-foreground group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary mx-auto mb-6" />
              <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
                Prefer a Quick Chat?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sometimes it's easier to talk things through. Schedule a free 30-minute
                consultation to discuss your project.
              </p>
              <a
                href="#schedule"
                className="btn btn-primary"
              >
                Schedule a Call
                <Icon name="CalendarIcon" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}