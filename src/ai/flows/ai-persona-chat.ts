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

const AIPersonaChatInputSchema = z.object({
  query: z.string().describe('The user query.'),
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
    schema: z.object({
      query: z.string().describe('The user query.'),
    }),
  },
  output: {
    schema: z.object({
      response: z.string().describe('The response from the AI persona.'),
    }),
  },
  prompt: `You are an AI chatbot embodying the persona of the portfolio owner.
Answer the following question about your experience, projects, and achievements:

Query: {{{query}}}`,
});

const aiPersonaChatFlow = ai.defineFlow<
  typeof AIPersonaChatInputSchema,
  typeof AIPersonaChatOutputSchema
>(
  {
    name: 'aiPersonaChatFlow',
    inputSchema: AIPersonaChatInputSchema,
    outputSchema: AIPersonaChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
