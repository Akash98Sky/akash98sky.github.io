import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { aiPersonaChat } from '@/ai/flows/ai-persona-chat';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';

interface AiChatWindowProps {
  
}

function AIChatInterface() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const result = await aiPersonaChat({ query: query });
      setResponse(result.response);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setResponse('Error fetching response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 bg-background bg-opacity-90 p-4 rounded-md" style={{ width: '300px' }}>
      <Textarea
        value={query}
        onChange={handleQueryChange}
        placeholder="Ask me anything about my experience, projects, and achievements..."
        rows={4}
        className="w-full"
      />
      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Get Response'}
      </Button>
      {response && (
        <div className="rounded-md p-4 bg-muted">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export const AiChatWindow: React.FC<AiChatWindowProps> = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const chatWindowClasses = `bg-background bg-opacity-70 rounded-md shadow-lg  max-w-sm transition-all duration-300 ${
    isChatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
  }`;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button onClick={toggleChatVisibility} className='mb-2 transition-none rounded-full h-14 w-14 p-0' variant="outline">
        <Avatar className="h-12 w-12">
          <AvatarFallback>
            <MessageSquare className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      </Button>
        <div
        className={chatWindowClasses}
        style={{
          transformOrigin: 'bottom right',
        }}
      >
          
        {isChatVisible && (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">AI Persona Chat</h2>
            <AIChatInterface />
          </div>
        )}
      </div>
    </div>
  );
};
