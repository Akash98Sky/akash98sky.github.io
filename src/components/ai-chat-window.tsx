
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
// Removed import of aiPersonaChat as it won't be called
// import { aiPersonaChat } from '@/ai/flows/ai-persona-chat'; 
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, SendHorizonal } from 'lucide-react';
import { Icons } from '@/components/icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { portfolioData } from '@/config/portfolio-data'; 
import type { AiChatWindowProps, Message } from '@/interfaces/components';


function ChatBoxContent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async () => {
    if (!inputQuery.trim()) return;

    const newUserMessage: Message = {
      id: `${Date.now()}-user`,
      sender: 'user',
      text: inputQuery,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    
    // const currentQuery = inputQuery; // No longer needed for AI call
    setInputQuery('');
    setLoading(true);

    // Simulate a short delay and then show a message that AI chat is disabled
    setTimeout(() => {
      const aiDisabledMessage: Message = {
        id: `${Date.now()}-ai-disabled`,
        sender: 'ai',
        text: "AI chat functionality is currently unavailable in this static version of the application.",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiDisabledMessage]);
      setLoading(false);
    }, 500);

    // Original AI call is removed for static deployment
    // try {
    //   const result = await aiPersonaChat({ query: currentQuery, portfolioData });
    //   const aiResponseMessage: Message = {
    //     id: `${Date.now()}-ai`,
    //     sender: 'ai',
    //     text: result.response,
    //     timestamp: new Date(),
    //   };
    //   setMessages((prevMessages) => [...prevMessages, aiResponseMessage]);
    // } catch (error) {
    //   console.error('AI Chat Error:', error);
    //   const errorMessage: Message = {
    //     id: `${Date.now()}-error`,
    //     sender: 'ai',
    //     text: 'Sorry, I encountered an error. Please try again.',
    //     timestamp: new Date(),
    //   };
    //   setMessages((prevMessages) => [...prevMessages, errorMessage]);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="flex flex-col flex-grow overflow-hidden">
      <ScrollArea className="flex-grow p-4 space-y-1">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex mb-3 ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <Avatar className="h-8 w-8 mr-2 self-end shrink-0">
                <AvatarFallback>{portfolioData.personalInfo.name.substring(0,1).toUpperCase() || 'P'}</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`max-w-[75%] p-3 rounded-lg shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none ml-2'
                  : 'bg-muted text-foreground rounded-bl-none mr-2'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              <p className="text-xs opacity-70 mt-1 text-right">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            {msg.sender === 'user' && (
              <Avatar className="h-8 w-8 ml-2 self-end shrink-0">
                <AvatarFallback>
                  <Icons.user className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex items-end space-x-2 mb-3 justify-start">
            <Avatar className="h-8 w-8 mr-2 self-end shrink-0">
               <AvatarFallback>{portfolioData.personalInfo.name.substring(0,1).toUpperCase() || 'P'}</AvatarFallback>
            </Avatar>
            <div className="p-3 rounded-lg bg-muted text-foreground shadow-sm rounded-bl-none">
              <p className="text-sm italic">Typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </ScrollArea>

      <div className="p-3 border-t bg-background">
        <div className="flex items-center space-x-2">
          <Textarea
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask me anything..."
            rows={1}
            className="flex-grow resize-none p-2.5 h-10 min-h-[40px] max-h-[100px]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={loading || !inputQuery.trim()} 
            size="icon" 
            className="h-10 w-10 shrink-0"
            aria-label="Send message"
          >
            <SendHorizonal className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export const AiChatWindow: React.FC<AiChatWindowProps> = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const chatWindowClasses = `fixed bottom-4 right-4 z-50 bg-background rounded-xl shadow-2xl border transition-all duration-300 ease-in-out overflow-hidden
    ${
      isChatVisible
        ? 'opacity-100 translate-y-0 w-[360px] h-[520px]'
        : 'opacity-0 translate-y-5 w-0 h-0 pointer-events-none'
    }`;
  
  const chatButtonClasses = `fixed bottom-4 right-4 z-[60] transition-all duration-300 ease-in-out rounded-full h-16 w-16 p-0 shadow-lg border
    ${isChatVisible ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'}`;

  return (
    <>
      <Button 
        onClick={toggleChatVisibility} 
        className={chatButtonClasses} 
        variant="outline"
        aria-label="Toggle chat window"
      >
        <Avatar className="h-14 w-14">
          <AvatarFallback className="bg-transparent">
            <MessageSquare className="h-7 w-7 text-primary" />
          </AvatarFallback>
        </Avatar>
      </Button>

      <div
        className={chatWindowClasses}
        style={{ transformOrigin: 'bottom right' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-chat-window-title"
        hidden={!isChatVisible}
      >
        {isChatVisible && (
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-3 border-b bg-muted/30">
              <div className="flex items-center space-x-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback>{portfolioData.personalInfo.name.substring(0,2).toUpperCase() || 'AI'}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 id="ai-chat-window-title" className="text-base font-semibold">{portfolioData.personalInfo.name}</h2>
                  <p className="text-xs text-green-600 dark:text-green-400 font-medium">Online</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleChatVisibility}
                className="h-8 w-8"
                aria-label="Close chat window"
              >
                <Icons.close className="h-4 w-4" />
              </Button>
            </div>
            <ChatBoxContent />
          </div>
        )}
      </div>
    </>
  );
};

