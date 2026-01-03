import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Award, Users, Clock, MapPin, Mail, Phone } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';
import { STATISTICS } from '@/lib/constants';
import { SERVICES_DATA } from '@/lib/data/services';

/**
 * About page metadata
 */
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Design Vision Constructions & Interiors - our history, values, team, and commitment to creating exceptional spaces.',
};

/**
 * Team member data
 */
const TEAM_MEMBERS = [
  {
    name: 'Michael Roberts',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: '20+ years in interior design and construction, leading hundreds of successful projects.',
  },
  {
    name: 'Sarah Chen',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Award-winning designer specializing in luxury residential and commercial spaces.',
  },
  {
    name: 'James Wilson',
    role: 'Head of Construction',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Expert project manager with background in architecture and construction.',
  },
  {
    name: 'Emily Davis',
    role: 'Senior Interior Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Creative designer with passion for sustainable and biophilic design.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            About Us
          </h1>
          <nav className="flex items-center space-x-2 text-sm text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary-400">About Us</span>
          </nav>
        </div>
      </section>

      {/* Company Story */}
      <SectionWrapper background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?w=800&q=80"
                  alt="Our design studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary-400 p-8 text-white">
                <div className="text-4xl font-serif font-bold">20+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
            <div>
              <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
                Building Dreams Since 2004
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Founded in 2004, Design Vision Constructions & Interiors began with a simple yet powerful 
                vision: to transform ordinary spaces into extraordinary experiences. What started as a 
                small design studio has grown into a full-service interior design and construction company 
                serving clients across the region.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Over the past two decades, we have completed hundreds of projects, from intimate home 
                renovations to large-scale commercial developments. Our success stems from our unwavering 
                commitment to quality, our attention to detail, and our genuine passion for creating 
                spaces that inspire.
              </p>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                Today, our team of experienced designers, architects, and craftsmen continues to push 
                the boundaries of what's possible, blending timeless elegance with modern innovation to 
                create spaces that stand the test of time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Check, text: 'Licensed & Insured' },
                  { icon: Award, text: 'Award-Winning' },
                  { icon: Users, text: 'Expert Team' },
                  { icon: Clock, text: 'On-Time Delivery' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <span className="text-neutral-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper background="neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
              Principles That Guide Everything We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Without Compromise',
                description: 'We never cut corners. Every project receives our full attention and the highest quality materials and craftsmanship.',
              },
              {
                title: 'Client-Centered Approach',
                description: 'Your vision is our priority. We listen, collaborate, and work tirelessly to exceed your expectations.',
              },
              {
                title: 'Innovation & Excellence',
                description: 'We embrace new ideas and techniques while maintaining timeless design principles that endure.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 card text-center">
                <div className="w-14 h-14 bg-primary-50 flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-400 font-serif text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Statistics */}
      <div className="bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATISTICS.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <SectionWrapper background="white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
              Our Services
            </h2>
            <div className="w-16 h-0.5 bg-primary-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 5).map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group card p-6 card-hover"
              >
                <h3 className="font-serif text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">{service.shortDescription}</p>
                <div className="flex items-center text-primary-400 text-sm font-medium">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper background="neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Meet The Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900">
              Our Leadership
            </h2>
            <div className="w-16 h-0.5 bg-primary-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="192px"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-neutral-600 mb-8 text-lg">
            Let's discuss how we can bring your vision to life. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-white font-medium hover:bg-primary-500 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium hover:bg-neutral-900 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
