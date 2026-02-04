'use client';

import { useState, useEffect, FormEvent } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export default function ContactFormClient() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!isHydrated) return;
  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    let data: any = null;

    // ✅ SAFE JSON parsing
    try {
      data = await response.json();
    } catch {
      throw new Error('Server returned an invalid response');
    }

    if (!response.ok) {
      throw new Error(data?.error || 'Failed to send message');
    }

    // ✅ SUCCESS
    setSubmitStatus('success');
    setFormData({ name: '', email: '', projectType: '', message: '' });
    setErrors({});

    setTimeout(() => setSubmitStatus('idle'), 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    setSubmitStatus('error');
    setTimeout(() => setSubmitStatus('idle'), 5000);
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (field: keyof FormData, value: string) => {
    if (!isHydrated) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const projectTypes = [
    { value: '', label: 'Select project type' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="card max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Your Name *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon name="UserIcon" size={20} />
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`input pl-12 ${errors.name ? 'border-error ring-error/20' : ''}`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-error flex items-center gap-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon name="EnvelopeIcon" size={20} />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`input pl-12 ${errors.email ? 'border-error ring-error/20' : ''}`}
              placeholder="john@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-error flex items-center gap-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              {errors.email}
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-foreground mb-2">
            Project Type *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              <Icon name="BriefcaseIcon" size={20} />
            </div>
            <select
              id="projectType"
              value={formData.projectType}
              onChange={(e) => handleChange('projectType', e.target.value)}
              className={`input pl-12 appearance-none cursor-pointer ${
                errors.projectType ? 'border-error ring-error/20' : ''
              }`}
            >
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              <Icon name="ChevronDownIcon" size={20} />
            </div>
          </div>
          {errors.projectType && (
            <p className="mt-2 text-sm text-error flex items-center gap-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              {errors.projectType}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            rows={6}
            className={`input resize-none ${errors.message ? 'border-error ring-error/20' : ''}`}
            placeholder="Tell me about your project, goals, timeline, and budget..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-error flex items-center gap-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !isHydrated}
          className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Icon name="PaperAirplaneIcon" size={18} />
            </>
          )}
        </button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="p-4 rounded-xl bg-success/10 border border-success/20 flex items-center gap-3">
            <Icon name="CheckCircleIcon" size={24} className="text-success" />
            <div>
              <p className="font-semibold text-success">Message sent successfully!</p>
              <p className="text-sm text-foreground">I'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="p-4 rounded-xl bg-error/10 border border-error/20 flex items-center gap-3">
            <Icon name="ExclamationCircleIcon" size={24} className="text-error" />
            <div>
              <p className="font-semibold text-error">Failed to send message</p>
              <p className="text-sm text-foreground">Please try again or contact me directly.</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}