'use client';

import {useEffect, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {useState} from 'react';
import {aiPersonaChat} from '@/ai/flows/ai-persona-chat';

const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({behavior: 'smooth'});
};

export default function Home() {
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const achievementsRef = useRef<HTMLElement>(null);
  const aiChatRef = useRef<HTMLElement>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 bg-background z-50 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <span className="font-bold text-xl">My Portfolio</span>
            <div className="space-x-4">
              <Button variant="link" onClick={() => scrollToSection(experienceRef)}>
                Experience
              </Button>
              <Button variant="link" onClick={() => scrollToSection(projectsRef)}>
                Projects
              </Button>
              <Button variant="link" onClick={() => scrollToSection(achievementsRef)}>
                Achievements
              </Button>
              <Button variant="link" onClick={() => scrollToSection(aiChatRef)}>
                AI Chat
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="experience" ref={experienceRef} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>
            <p>Concise summary of professional experience...</p>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <p>Showcase personal projects with descriptions...</p>
          </div>
        </section>

        <section id="achievements" ref={achievementsRef} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
            <p>Highlight key achievements and skills...</p>
          </div>
        </section>

        <section id="ai-chat" ref={aiChatRef} className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-6">AI Persona Chat</h2>
            <AIChatInterface />
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        </div>
      </footer>
    </div>
  );
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
      const result = await aiPersonaChat({query: query});
      setResponse(result.response);
    } catch (error) {
      console.error('AI Chat Error:', error);
      setResponse('Error fetching response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
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
