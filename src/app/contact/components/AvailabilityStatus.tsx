import Icon from '@/components/ui/AppIcon';

export default function AvailabilityStatus() {
  return (
    <div className="card bg-gradient-to-br from-primary to-secondary text-white">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
          <Icon name="CalendarIcon" size={24} />
        </div>
        <div>
          <h3 className="font-heading font-bold text-xl mb-2">
            Current Availability
          </h3>
          <p className="text-white/90">
            I'm currently available for new projects
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10">
          <Icon name="ClockIcon" size={20} />
          <div>
            <p className="font-semibold">Response Time</p>
            <p className="text-sm text-white/80">Within 24 hours</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10">
          <Icon name="GlobeAltIcon" size={20} />
          <div>
            <p className="font-semibold">Time Zone</p>
            <p className="text-sm text-white/80">PST (UTC-8)</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10">
          <Icon name="BriefcaseIcon" size={20} />
          <div>
            <p className="font-semibold">Project Type</p>
            <p className="text-sm text-white/80">Remote</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/20">
          <a
            href="assets/resume/MyResume.pdf"
            download
            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-white text-primary rounded-xl font-semibold hover:shadow-lg transition-all"
          >

          <Icon name="ArrowDownTrayIcon" size={18} />
          Download Resume
        </a>
      </div>
    </div>
  );
}