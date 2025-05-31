
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/config/portfolio-data';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { PublicationsSectionProps } from '@/interfaces/components';
import type { PublicationItem } from '@/interfaces/portfolio';

const PublicationItemDisplay = ({ publication, isLast }: { publication: PublicationItem, isLast: boolean }) => {
  const monthStr = publication.month ? publication.month.toUpperCase() : '';
  const yearStr = publication.year.toString();

  return (
    <div className="flex flex-row">
      {/* Date Column - fixed width, text-right */}
      <div className="w-28 flex-shrink-0 text-right pr-5 pt-px">
        <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-2.5 py-1.5 rounded-md shadow">
          {monthStr}, {yearStr}
        </span>
      </div>

      {/* Timeline Gutter (Dot and Line) - fixed width, centered */}
      <div className="w-10 flex-shrink-0 relative">
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border 
                      ${isLast ? 'h-3.5' : 'h-full'}`}
        ></div>
        <div className="absolute left-1/2 top-1.5 transform -translate-x-1/2 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background shadow"></div>
      </div>

      {/* Content Column - flexible width */}
      <div className="flex-grow pl-5 pb-10">
        <h3 className="text-lg font-semibold text-foreground">{publication.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {publication.authors.join(', ')}
        </p>
        <p className="text-sm text-muted-foreground mt-1 italic">
          {publication.venue}
        </p>
        {publication.doi && (
          <p className="text-sm text-muted-foreground mt-1">
            DOI: {publication.doi}
          </p>
        )}
        {publication.link && (
          <div className="mt-3">
            <Link href={publication.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="shadow-sm hover:shadow-md transition-shadow">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Publication
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export function PublicationsSection({ publicationsRef }: PublicationsSectionProps) {
  const publications = portfolioData.publications;

  return (
    <section id="publications" ref={publicationsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-16 text-foreground text-center">Publications</h2>
        {publications.length > 0 ? (
          <div className="max-w-5xl mx-auto">
            {publications.map((publication, index) => (
              <PublicationItemDisplay 
                key={index} 
                publication={publication} 
                isLast={index === publications.length - 1} 
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No publications listed yet.</p>
        )}
      </div>
    </section>
  );
}
