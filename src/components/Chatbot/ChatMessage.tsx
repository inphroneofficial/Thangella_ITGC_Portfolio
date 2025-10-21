
import React from 'react';
import { User, Bot } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
        message.sender === 'user' 
          ? 'bg-gradient-to-r from-primary to-purple-600' 
          : theme === 'dark' ? 'bg-zinc-700' : 'bg-gray-100'
      }`}>
        {message.sender === 'user' ? (
          <User className="h-3 w-3 text-white" />
        ) : (
          <Bot className={`h-3 w-3 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`} />
        )}
      </div>
      <div className={`max-w-[75%] rounded-2xl px-3 py-2 ${
        message.sender === 'user'
          ? 'bg-gradient-to-r from-primary to-purple-600 text-white'
          : theme === 'dark'
          ? 'bg-zinc-700 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}>
        <p className="text-xs leading-relaxed whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
