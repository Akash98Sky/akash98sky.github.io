
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import { portfolioData } from '@/config/portfolio-data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import type { PublicationsSectionProps } from '@/interfaces/components';
import type { PublicationItem } from '@/interfaces/portfolio';


const PublicationCard = ({ publication }: { publication: PublicationItem }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border rounded-xl">
      <CardHeader>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 mt-1">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold text-card-foreground">{publication.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {publication.authors.join(', ')}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Venue:</span> {publication.venue}
        </p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Year:</span> {publication.year}
        </p>
        {publication.doi && (
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">DOI:</span> {publication.doi}
          </p>
        )}
      </CardContent>
      {publication.link && (
        <CardFooter className="pt-0 flex justify-end">
          <Link href={publication.link} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Publication
            </Button>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export function PublicationsSection({ publicationsRef }: PublicationsSectionProps) {
  const publications = portfolioData.publications;

  return (
    <section id="publications" ref={publicationsRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-foreground text-center">Publications</h2>
        {publications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No publications listed yet.</p>
        )}
      </div>
    </section>
  );
}
