import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
}

const testimonials: Testimonial[] = [
{
  id: 'testimonial_1',
  name: 'Sarah Johnson',
  role: 'Product Manager',
  company: 'TechCorp',
  content: 'Exceptional work! Delivered a pixel-perfect design with clean, maintainable code. The attention to detail and communication throughout the project was outstanding.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18811c304-1763296452128.png",
  avatarAlt: 'Professional woman with blonde hair smiling at camera',
  rating: 5
},
{
  id: 'testimonial_2',
  name: 'Michael Chen',
  role: 'CTO',
  company: 'StartupXYZ',
  content: 'Working with this developer was a game-changer for our project. They brought innovative solutions and delivered ahead of schedule. Highly recommend!',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16f31588c-1763296831464.png",
  avatarAlt: 'Asian man in business casual attire with friendly expression',
  rating: 5
},
{
  id: 'testimonial_3',
  name: 'Emily Rodriguez',
  role: 'Design Lead',
  company: 'Creative Agency',
  content: 'A true professional who understands both design and development. The collaboration was seamless and the final product exceeded our expectations.',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1d11c76b3-1763294269112.png",
  avatarAlt: 'Hispanic woman with dark hair in professional setting',
  rating: 5
}];


export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it — here's what clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <div
            key={testimonial.id}
            className={`card card-hover space-y-6 animate-fade-in-up stagger-${index + 1}`}>

              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) =>
              <Icon
                key={i}
                name="StarIcon"
                variant="solid"
                size={20}
                className="text-warning" />

              )}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-border">
                  <AppImage
                  src={testimonial.avatar}
                  alt={testimonial.avatarAlt}
                  className="w-full h-full object-cover" />

                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to be my next success story?
          </p>
          <a href="/contact" className="btn btn-primary">
            Let's Work Together
            <Icon name="ArrowRightIcon" size={18} />
          </a>
        </div>
      </div>
    </section>);

}