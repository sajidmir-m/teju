
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, BotIcon } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  "intro": "Hello! I'm Sajid's AI assistant. I can tell you about his skills, projects, experience, or how to contact him. What would you like to know?",
  "skills": "Sajid is skilled in various technologies including HTML, CSS, JavaScript, React, TypeScript, Node.js, and more. He also has strong problem-solving abilities and excellent communication skills.",
  "projects": "Sajid has worked on several projects including an e-commerce website, task management app, and a weather dashboard. You can check them out in the portfolio section!",
  "experience": "Sajid is currently working as a Frontend Developer Intern and has previous experience as a freelance web developer and in technical support roles.",
  "contact": "You can contact Sajid via email at sajid@example.com, phone at +1 (555) 123-4567, or directly through the contact form on this website.",
  "education": "Sajid is pursuing a Diploma in Computer Science & Engineering and also holds a certification in Web Development.",
  "default": "I'm not sure about that. You might want to check the relevant section on the website or ask about Sajid's skills, projects, experience, or how to contact him."
};

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      // Add introduction message when chat is first opened
      setMessages([
        {
          id: 1,
          content: botResponses.intro,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate bot response with slight delay for realistic feel
    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 700);
  };
  
  const generateResponse = (userInput: string) => {
    if (userInput.includes('skill') || userInput.includes('know') || userInput.includes('can')) {
      return botResponses.skills;
    } else if (userInput.includes('project') || userInput.includes('work') || userInput.includes('portfolio')) {
      return botResponses.projects;
    } else if (userInput.includes('experience') || userInput.includes('job') || userInput.includes('career')) {
      return botResponses.experience;
    } else if (userInput.includes('contact') || userInput.includes('email') || userInput.includes('phone') || userInput.includes('reach')) {
      return botResponses.contact;
    } else if (userInput.includes('education') || userInput.includes('study') || userInput.includes('qualification')) {
      return botResponses.education;
    } else if (userInput.includes('hello') || userInput.includes('hi') || userInput.includes('hey')) {
      return botResponses.intro;
    } else {
      return botResponses.default;
    }
  };

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 bg-portfolio-accent text-portfolio-dark p-4 rounded-full shadow-lg hover:bg-portfolio-accent/90 transition-all z-50"
          aria-label="Open AI Chat"
        >
          <BotIcon size={24} />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 shadow-xl z-50 flex flex-col glass-panel border-slate-700">
          <CardHeader className="bg-portfolio-accent/90 text-portfolio-dark p-3 flex flex-row items-center justify-between rounded-t-lg">
            <div className="flex items-center">
              <BotIcon size={18} className="mr-2" />
              <h3 className="font-medium">AI Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)} 
              className="hover:bg-portfolio-accent/20"
            >
              <X size={16} />
            </Button>
          </CardHeader>
          
          <CardContent className="p-3 overflow-auto flex-grow">
            <div className="space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-portfolio-accent text-portfolio-dark' 
                        : 'bg-portfolio-light text-slate-300'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          <CardFooter className="p-3 pt-0 border-t border-slate-700">
            <form onSubmit={handleSendMessage} className="w-full flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-portfolio-dark border-slate-700 text-white focus:border-portfolio-accent"
              />
              <Button type="submit" className="bg-portfolio-accent text-portfolio-dark hover:bg-portfolio-accent/90">
                <Send size={16} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default AiChatbot;
