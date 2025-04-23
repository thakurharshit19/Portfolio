import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0EA5E9]/5">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#000000]/80 max-w-2xl mx-auto">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>
          <form className="space-y-6 animate-fade-in bg-white p-8 rounded-lg shadow-lg">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-white/50 border-[#46A094]/20 focus:border-[#46A094] transition-colors" 
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/50 border-[#46A094]/20 focus:border-[#46A094] transition-colors" 
              />
            </div>
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="w-full min-h-[150px] bg-white/50 border-[#46A094]/20 focus:border-[#46A094] transition-colors" 
              />
            </div>
            <div className="text-center">
              <Button className="bg-gradient-to-r from-gray-200 to-gray-500 hover:bg-[#0EA5E9]/90 text-white px-8 transition-all duration-300 hover:shadow-lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
