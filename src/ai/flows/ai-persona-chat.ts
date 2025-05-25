
'use server';
/**
 * @fileOverview An AI persona chat flow.
 *
 * - aiPersonaChat - A function that handles the AI persona chat process.
 * - AIPersonaChatInput - The input type for the aiPersonaChat function.
 * - AIPersonaChatOutput - The return type for the aiPersonaChat function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
// Assuming PortfolioData structure is similar to what's in portfolio-data.ts
// For simplicity, using z.any(). In a real app, you might want to define Zod schemas for PortfolioData.
import type { PortfolioData } from '@/config/portfolio-data';


const AIPersonaChatInputSchema = z.object({
  query: z.string().describe('The user query.'),
  portfolioData: z.any().describe('The portfolio data object containing personal info, experience, projects, and achievements.'),
});
export type AIPersonaChatInput = z.infer<typeof AIPersonaChatInputSchema>;

const AIPersonaChatOutputSchema = z.object({
  response: z.string().describe('The response from the AI persona.'),
});
export type AIPersonaChatOutput = z.infer<typeof AIPersonaChatOutputSchema>;

export async function aiPersonaChat(input: AIPersonaChatInput): Promise<AIPersonaChatOutput> {
  return aiPersonaChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPersonaChatPrompt',
  input: {
    schema: AIPersonaChatInputSchema,
  },
  output: {
    schema: AIPersonaChatOutputSchema,
  },
  prompt: `You are an AI chatbot embodying the persona of {{portfolioData.personalInfo.name}}.
My professional title is {{portfolioData.personalInfo.title}}.

My experience includes:
{{portfolioData.experience.summary}}
{{#if portfolioData.experience.items}}
Some highlights from my roles:
{{#each portfolioData.experience.items}}
- As {{this.role}} at {{this.company}} ({{this.duration}}):
  {{#each this.descriptionPoints}}
  * {{this}}
  {{/each}}
{{/each}}
{{/if}}

My skills include:
{{#each portfolioData.skills}}
- {{this.name}}
{{/each}}

Some of my projects are:
{{#each portfolioData.projects}}
- {{this.title}}: {{this.description}}. Technologies used include: {{#each this.tags}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}. {{#if this.githubLink}}You can find it on GitHub: {{this.githubLink}}.{{/if}} {{#if this.liveDemoLink}}There's also a live demo: {{this.liveDemoLink}}.{{/if}}
{{/each}}

My key achievements include:
{{#each portfolioData.achievements}}
- {{this.title}}: {{this.description}}
{{/each}}

Based on this information, answer the following question:

Query: {{{query}}}`,
});

const aiPersonaChatFlow = ai.defineFlow<
  AIPersonaChatInput, // Use the inferred type directly
  AIPersonaChatOutput
>(
  {
    name: 'aiPersonaChatFlow',
    inputSchema: AIPersonaChatInputSchema,
    outputSchema: AIPersonaChatOutputSchema,
  },
  async (input: AIPersonaChatInput) => { // Explicitly type input here for clarity
    const {output} = await prompt(input);
    if (!output) {
      // Handle the case where output might be null or undefined if the prompt fails or returns nothing
      return { response: "I'm sorry, I couldn't generate a response at this moment." };
    }
    return output;
  }
);
