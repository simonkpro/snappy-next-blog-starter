
import { Header } from '../components/layout/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearchQuery} />
      
      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="transition-colors">Home</Link> / <span className="text-foreground">Contact</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6 font-space-grotesk">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <div className="cosmic-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6 font-space-grotesk">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="mt-2 cosmic-glass"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="mt-2 cosmic-glass"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 cosmic-glass"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="mt-2 cosmic-glass"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more..."
                    rows={6}
                    className="mt-2 cosmic-glass resize-none"
                  />
                </div>

                <Button className="w-full cosmic-glass text-foreground font-medium">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            <div className="cosmic-card p-8">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-foreground mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Email Us</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                For general inquiries, story tips, or press releases.
              </p>
              <a href="mailto:hello@techreport.com" className="text-foreground font-medium">
                hello@techreport.com
              </a>
            </div>

            <div className="cosmic-card p-8">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-foreground mr-3" />
                <h3 className="text-xl font-semibold text-foreground">Story Tips</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Have a story idea or tip? We'd love to hear about it.
              </p>
              <a href="mailto:tips@techreport.com" className="text-foreground font-medium">
                tips@techreport.com
              </a>
            </div>

            <div className="cosmic-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Response Time</h3>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days. 
                For urgent matters, please mark your subject line with "URGENT" and we'll prioritize your message.
              </p>
            </div>

            <div className="cosmic-card p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">About TechReport</h3>
              <p className="text-muted-foreground mb-4">
                We're a team of technology journalists and privacy advocates committed to bringing you 
                the most important tech news and insights.
              </p>
              <Link to="/about" className="text-foreground font-medium">
                Learn more about us →
              </Link>
            </div>
          </section>
        </div>
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

export default Contact;
