
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Minimize2, Maximize2, Sparkles, Zap, RefreshCw, Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Badge } from '@/components/ui/badge';
import ChatMessage from './ChatMessage';
import { chatbotResponses } from '@/utils/chatbotData';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const [isScrollHidden, setIsScrollHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);

  const defaultQuestions = [
    "What are your main skills?",
    "Tell me about your experience",
    "What frameworks do you know?",
    "How can I contact you?",
    "What tools do you use?",
    "Tell me about SOX compliance",
    "What is ITGC testing?",
    "Explain your audit experience",
    "What certifications do you have?",
    "Tell me about your education",
    "What languages do you speak?",
    "What are your career goals?",
    "How old are you?",
    "Where are you located?",
    "Tell me about access management",
    "What is risk assessment?",
    "Explain change management",
    "What is ServiceNow GRC?"
  ];

  // Enhanced scroll behavior for hiding/showing chatbot
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      
      // Hide when scrolling down more than 5px, show when scrolling up
      if (scrollDelta > 5 && currentScrollY > 100) {
        setIsScrollHidden(true);
      } else if (scrollDelta < -5 || currentScrollY < 50) {
        setIsScrollHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hello! 👋 I'm Thangella's AI assistant. I'm here to help you learn about my background, experience, and expertise in IT Risk & Compliance. Feel free to ask me anything using the quick questions below or type your own question!",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const findBestResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    for (const [keywords, response] of Object.entries(chatbotResponses)) {
      const keywordArray = keywords.split(',').map(k => k.trim().toLowerCase());
      if (keywordArray.some(keyword => input.includes(keyword))) {
        return response;
      }
    }
    
    return "I'm sorry, I don't have specific information about that. Please try asking about my skills, experience, education, tools, frameworks, or contact information. You can also use the quick questions for suggestions! 😊";
  };

  const handleSendMessage = (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setShowQuestions(false);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findBestResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowQuestions(true);
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Chat cleared! 🧹 How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const exportChat = () => {
    const chatContent = messages.map(msg => 
      `${msg.sender === 'user' ? 'You' : 'Assistant'} (${msg.timestamp.toLocaleTimeString()}): ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat-conversation.txt';
    a.click();
  };

  const copyLastResponse = () => {
    const lastBotMessage = [...messages].reverse().find(msg => msg.sender === 'bot');
    if (lastBotMessage) {
      navigator.clipboard.writeText(lastBotMessage.text);
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transform transition-all duration-700 ease-in-out ${
        isScrollHidden ? 'translate-y-20 opacity-0 scale-75' : 'translate-y-0 opacity-100 scale-100'
      }`}>
        <Button
          onClick={() => {
            setIsOpen(true);
            setIsScrollHidden(false);
          }}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary via-purple-600 to-blue-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-blue-600/90 shadow-2xl border-2 border-white/20 group overflow-hidden hover:scale-110 transform transition-all duration-300 animate-pulse-soft"
          aria-label="Open AI Assistant"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 animate-spin-slow opacity-30">
            <div className="w-full h-full rounded-full border-2 border-transparent bg-gradient-to-r from-white/40 via-transparent to-white/40 bg-clip-border"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <Zap className="h-5 w-5 md:h-6 md:w-6 text-white group-hover:scale-110 transition-transform duration-300 animate-bounce-in" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent animate-ping"></div>
        </Button>
        
        {/* Enhanced tooltip */}
        <div className={`absolute -top-14 right-0 px-3 py-2 rounded-lg text-xs font-medium ${
          theme === 'dark' ? 'bg-gray-900/95 text-white border border-gray-700' : 'bg-white/95 text-gray-900 border border-gray-200'
        } shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap backdrop-blur-sm transform group-hover:scale-105`}>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-primary animate-pulse" />
            Chat with AI Assistant
          </div>
          <div className={`absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
            theme === 'dark' ? 'border-t-gray-900/95' : 'border-t-white/95'
          }`}></div>
        </div>
      </div>
    );
  }

  return (
    <Card className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-72 md:w-80 lg:w-96 transition-all duration-500 shadow-2xl border-2 transform ${
      isMinimized ? 'h-16 scale-95' : 'h-[28rem] md:h-[32rem] scale-100'
    } ${theme === 'dark' 
      ? 'bg-gradient-to-br from-gray-900/98 via-gray-800/98 to-gray-900/98 border-gray-700 backdrop-blur-xl' 
      : 'bg-gradient-to-br from-white/98 via-gray-50/98 to-white/98 border-gray-200 backdrop-blur-xl'
    } animate-scale-in`}>
      {/* Enhanced Header with premium animations */}
      <div className={`flex items-center justify-between p-3 md:p-4 border-b ${
        theme === 'dark' ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50/50'
      } relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 animate-shimmer"></div>
        <div className="flex items-center gap-3 relative z-10">
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center animate-floating shadow-lg">
            <Bot className="h-4 w-4 text-white animate-pulse-soft" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-bounce shadow-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-spin-slow"></div>
          </div>
          <div>
            <h3 className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
              AI Assistant
            </h3>
            <Badge variant="secondary" className="text-xs px-2 py-0 animate-scale-in">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></div>
              Online
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-1 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={clearChat}
            className="w-8 h-8 p-0 hover:scale-110 transition-transform duration-200"
            title="Clear Chat"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={exportChat}
            className="w-8 h-8 p-0 hover:scale-110 transition-transform duration-200"
            title="Export Chat"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-8 h-8 p-0 hover:scale-110 transition-transform duration-200"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 p-0 hover:scale-110 transition-transform duration-200 hover:bg-red-500/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Enhanced Messages with premium scrollbar */}
          <div className="h-48 md:h-64 overflow-y-auto p-3 md:p-4 space-y-4 scrollbar-thin relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 pointer-events-none"></div>
            {messages.map((message, index) => (
              <div key={message.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ChatMessage message={message} />
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 animate-scale-in">
                <Bot className="h-5 w-5 text-primary animate-pulse" />
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Quick Actions */}
          <div className={`px-3 md:px-4 py-2 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between mb-2">
              <p className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-fade-in`}>
                Quick Actions:
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyLastResponse}
                className="text-xs px-2 py-1 h-auto hover:scale-105 transition-transform duration-200"
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </Button>
            </div>
          </div>

          {/* Enhanced Default Questions with premium scrolling */}
          {showQuestions && (
            <div className={`px-3 md:px-4 py-2 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <p className={`text-xs font-medium mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-fade-in`}>
                Ask me about:
              </p>
              <div 
                ref={questionsRef}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin animate-slide-in-right"
              >
                {defaultQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendMessage(question)}
                    className={`text-xs py-1 px-3 h-auto whitespace-nowrap flex-shrink-0 hover:scale-105 transition-all duration-200 animate-fade-in ${
                      theme === 'dark' 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-primary' 
                        : 'border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:border-primary'
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Input with premium animations */}
          <div className={`p-3 md:p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 animate-shimmer"></div>
            <div className="flex gap-2 relative z-10">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className={`flex-1 px-3 py-2 rounded-lg border text-sm transition-all duration-200 focus:scale-[1.02] ${
                  theme === 'dark' 
                    ? 'bg-gray-800/90 border-gray-600 text-white placeholder-gray-400 focus:border-primary focus:bg-gray-800' 
                    : 'bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary focus:bg-white'
                } focus:outline-none focus:ring-2 focus:ring-primary/20 backdrop-blur-sm`}
              />
              <Button
                onClick={() => handleSendMessage()}
                size="sm"
                className="px-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default Chatbot;
