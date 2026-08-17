export interface TechnologyGroup {
  title: string;
  technologies: string[];
}

export const stack: TechnologyGroup[] = [
  { title: 'Frontend', technologies: ['React', 'TypeScript', 'JavaScript', 'Astro', 'HTML', 'CSS', 'Tailwind'] },
  { title: 'Backend', technologies: ['Python', 'FastAPI', 'Node.js', 'APIs REST'] },
  { title: 'Banco e dados', technologies: ['PostgreSQL', 'SQL', 'Supabase'] },
  { title: 'Infra', technologies: ['Git', 'GitHub', 'Vercel', 'Railway'] },
];
