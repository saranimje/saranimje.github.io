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
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLScV8Ddi79lOqv988ZAwBLNqvEhcOhoZ8wueG0rB_93K9NFrPg/formResponse";
      const formDataFormatted = new URLSearchParams();

      formDataFormatted.append("entry.1478434624", formData.name);
      formDataFormatted.append("entry.1189620785", formData.organization);
      formDataFormatted.append("entry.2413925", formData.email);
      formDataFormatted.append("entry.121333259", formData.message);

      const res = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", // Google Forms only accepts no-cors for public forms
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataFormatted.toString(),
      });

      // no-cors always gives opaque response; assume success if no error
      if (res) {
        toast({
          title: "Raven Dispatched!",
          description:
            "Your message has been sent successfully. Expect a response within 24 hours.",
        });
        setFormData({ name: "", organization: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "⚠ Message Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <section className="min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-7xl font-medieval text-purple-800 dark:text-[#e2a42c] text-center mb-8 drop-shadow-lg">
            Contact
          </h2>
          <h2 className="text-4xl font-medieval text-purple-700 dark:text-[#e2a42c] text-center mb-8 drop-shadow-lg">
            The Raven&apos;s Perch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-transparent rounded-lg pixel-art flex items-center justify-center mb-4 animate-pixel-float">
                    <img
                      src="assets/raven.png"
                      alt="Raven"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Send a raven to initiate contact for quests, collaborations,
                    or simply to exchange tales of adventure.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-purple-100 dark:bg-black/50 rounded-lg">
                    <div className="w-12 h-12 bg-emerald rounded pixel-art flex items-center justify-center">
                    ✆
                    </div>
                    <div>
                      <p className="font-cinzel text-purple-800 dark:text-yellow-300">
                        Magical Communication
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-100 dark:bg-black/50 rounded-lg">
                    <div className="w-12 h-12 bg-prussian rounded pixel-art flex items-center justify-center">
                    🖂
                    </div>
                    <div>
                      <p className="font-cinzel text-purple-800 dark:text-yellow-300">
                        Digital Scroll
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {personalInfo.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-100 dark:bg-black/50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-400 dark:bg-yellow-500 rounded pixel-art flex items-center justify-center">
                    ⚲
                    </div>
                    <div>
                      <p className="font-cinzel text-purple-800 dark:text-yellow-300">
                        Kingdom Location
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/40 dark:bg-black/40 rounded-lg pixel-border p-8">
                <h3 className="text-2xl font-cinzel text-purple-800 dark:text-[#e2a42c] mb-6 text-center">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-gray-700 dark:text-gray-300 font-cinzel"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="bg-white dark:bg-gray-800 border-purple-300 dark:border-yellow-400/30 text-gray-900 dark:text-gray-100 focus:border-purple-500 dark:focus:border-yellow-400 pixel-art"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="organization"
                      className="text-gray-700 dark:text-gray-300 font-cinzel"
                    >
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter name of your organization"
                      className="bg-white dark:bg-gray-800 border-purple-300 dark:border-yellow-400/30 text-gray-900 dark:text-gray-100 focus:border-purple-500 dark:focus:border-yellow-400 pixel-art"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-700 dark:text-gray-300 font-cinzel"
                    >
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="bg-white dark:bg-gray-800 border-purple-300 dark:border-yellow-400/30 text-gray-900 dark:text-gray-100 focus:border-purple-500 dark:focus:border-yellow-400 pixel-art"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-gray-700 dark:text-gray-300 font-cinzel"
                    >
                      Quest Details
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your quest or collaboration idea..."
                      className="bg-white dark:bg-gray-800 border-purple-300 dark:border-yellow-400/30 text-gray-900 dark:text-gray-100 focus:border-purple-500 dark:focus:border-yellow-400 pixel-art min-h-[100px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald hover:bg-deep-emerald font-cinzel text-lg transition-all transform hover:scale-105"
                  >
                    {loading ? "Sending..." : "Send Raven"}
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
