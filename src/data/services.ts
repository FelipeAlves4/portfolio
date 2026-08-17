import { BarChart3, Bot, LayoutTemplate, MonitorSmartphone, RefreshCw, Workflow } from 'lucide-astro';

export interface Service {
  title: string;
  description: string;
  icon: typeof LayoutTemplate;
}

export const services: Service[] = [
  { title: 'Landing pages', description: 'Páginas comerciais focadas em gerar contatos, pedidos e oportunidades.', icon: LayoutTemplate },
  { title: 'Sites profissionais', description: 'Sites responsivos para apresentar empresas, serviços e marcas.', icon: MonitorSmartphone },
  { title: 'Sistemas personalizados', description: 'Sistemas web para organizar processos, atendimentos, dados e operações.', icon: Workflow },
  { title: 'Automação', description: 'Soluções para reduzir tarefas manuais e melhorar rotinas internas.', icon: Bot },
  { title: 'Dashboards', description: 'Painéis para acompanhar indicadores e informações importantes.', icon: BarChart3 },
  { title: 'Melhorias em sites', description: 'Responsividade, performance, layout e evolução de páginas já publicadas.', icon: RefreshCw },
];
