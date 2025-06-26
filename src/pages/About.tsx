
import { Header } from '../components/layout/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="transition-colors">Home</Link> / <span className="text-foreground">About</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6 font-space-grotesk">About TechReport</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We're dedicated to bringing you the most important technology news, privacy insights, and cybersecurity updates that matter.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 font-space-grotesk">Our Mission</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              In an era where technology shapes every aspect of our lives, staying informed about digital developments has never been more crucial. TechReport exists to cut through the noise and deliver the stories that truly impact how we live, work, and interact with technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that everyone deserves access to clear, accurate, and timely information about the digital world around them. From data breaches that affect millions to AI breakthroughs that could reshape industries, we're here to help you understand what it all means.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 font-space-grotesk">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in clear, honest reporting without hidden agendas. Our readers deserve to know the facts, sources, and context behind every story.
              </p>
            </div>
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Privacy First</h3>
              <p className="text-muted-foreground">
                Your digital rights matter. We're committed to covering privacy issues and helping readers understand how to protect themselves online.
              </p>
            </div>
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                Complex tech topics shouldn't be exclusive to experts. We make technology news accessible to everyone, regardless of technical background.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 font-space-grotesk">Our Team</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              TechReport is powered by a dedicated team of journalists, researchers, and technology experts who are passionate about keeping you informed. Our writers come from diverse backgrounds in cybersecurity, privacy advocacy, technology journalism, and digital rights.
            </p>
            <div className="cosmic-card p-8">
              <p className="text-muted-foreground italic">
                "We're not just reporting on technology – we're helping people navigate a digital world that's changing faster than ever before."
              </p>
              <p className="text-foreground font-medium mt-4">— The TechReport Team</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="cosmic-card p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4 font-space-grotesk">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have a story tip, feedback, or questions? We'd love to hear from you.
            </p>
            <Link to="/contact">
              <button className="cosmic-glass px-6 py-3 text-foreground font-medium rounded-lg transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-24 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground font-semibold text-lg mb-6 md:mb-0 tracking-tight">
              TechReport
            </div>
            <div className="flex space-x-8 text-muted-foreground text-sm">
              <Link to="/about" className="transition-colors">About</Link>
              <Link to="/contact" className="transition-colors">Contact</Link>
              <a href="#" className="transition-colors">Privacy</a>
              <a href="#" className="transition-colors">Terms</a>
            </div>
          </div>
          <div className="text-center text-muted-foreground/70 text-sm mt-8 pt-8 border-t border-border/30">
            © 2024 TechReport. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
