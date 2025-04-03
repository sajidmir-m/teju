
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Use the provided phone number with country code
  // For India numbers, prefix with +91
  const phoneNumber = "+919149559393";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
