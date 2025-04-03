
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'Thanks for reaching out. I\'ll get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h3 className="section-subtitle">Get In Touch</h3>
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <div className="mb-8">
              <p className="text-slate-300 mb-6">
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have any other requests or questions, feel free to reach out using the form.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center mr-4">
                  <Mail className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-slate-400">sajid@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center mr-4">
                  <Phone className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-portfolio-accent/10 flex items-center justify-center mr-4">
                  <MapPin className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-400">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="glass-panel border-slate-700">
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="bg-portfolio-dark border-slate-700 focus:border-portfolio-accent text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="bg-portfolio-dark border-slate-700 focus:border-portfolio-accent text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-portfolio-dark border-slate-700 focus:border-portfolio-accent text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="bg-portfolio-dark border-slate-700 focus:border-portfolio-accent text-white h-32"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-portfolio-accent text-portfolio-dark hover:bg-portfolio-accent/90 w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} {!isSubmitting && <Send size={16} className="ml-2" />}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
