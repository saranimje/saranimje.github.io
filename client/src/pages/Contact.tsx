import { useState } from "react";
import { PageTransition } from "../components/PixelElements";
import { personalInfo } from "../data/resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "🕊️ Raven Dispatched!",
      description: "Your message has been sent successfully. Expect a response within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageTransition>
      <section className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-medieval text-royal-gold text-center mb-16 drop-shadow-lg">
            🕊️ The Raven's Perch
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-dark-purple rounded-lg pixel-art flex items-center justify-center text-4xl mb-4 animate-pixel-float">
                    🕊️
                  </div>
                  <p className="text-gray-300 mb-6">
                    Send a raven to initiate contact for quests, collaborations, or simply to exchange tales of adventure.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-dark-purple/50 rounded-lg">
                    <div className="w-12 h-12 bg-emerald rounded pixel-art flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <p className="text-royal-gold font-cinzel">Magical Communication</p>
                      <p className="text-gray-300">{personalInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-dark-purple/50 rounded-lg">
                    <div className="w-12 h-12 bg-prussian rounded pixel-art flex items-center justify-center">
                      ✉️
                    </div>
                    <div>
                      <p className="text-royal-gold font-cinzel">Digital Scroll</p>
                      <p className="text-gray-300">{personalInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-dark-purple/50 rounded-lg">
                    <div className="w-12 h-12 bg-royal-gold rounded pixel-art flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <p className="text-royal-gold font-cinzel">Kingdom Location</p>
                      <p className="text-gray-300">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="text-center">
                  <p className="text-gray-400 mb-4 font-cinzel">Connect Through The Digital Realm</p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href={personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-prussian rounded pixel-art flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      🔗
                    </a>
                    <a 
                      href={personalInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-emerald rounded pixel-art flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      💻
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-dark-purple/80 rounded-lg pixel-border p-8">
                <h3 className="text-2xl font-cinzel text-royal-gold mb-6 text-center">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-cinzel">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-gray-800 border-royal-gold/30 text-gray-100 focus:border-royal-gold pixel-art"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-cinzel">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-gray-800 border-royal-gold/30 text-gray-100 focus:border-royal-gold pixel-art"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300 font-cinzel">
                      Quest Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your quest or collaboration idea..."
                      className="bg-gray-800 border-royal-gold/30 text-gray-100 focus:border-royal-gold pixel-art min-h-[100px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-emerald hover:bg-deep-emerald font-cinzel text-lg transition-all transform hover:scale-105"
                  >
                    🕊️ Send Raven
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
