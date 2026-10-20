export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image?: string;
  website?: string;
  github?: string;
  technologies: string[];
  featured: boolean;
  segment?: 'sites' | 'sistemas';
  role?: string;
  evidence?: string;
  status?: string;
  problem?: string;
  solution?: string;
  highlights?: string[];
  audience?: string;
}

export const projects: Project[] = [
  {
    slug: 'vertice',
    name: 'VÉRTICE',
    category: 'E-commerce conceitual',
    shortDescription: 'Loja de moda masculina com catálogo, busca, favoritos, sacola persistente e checkout demonstrativo.',
    description: 'Experiência de e-commerce premium criada como projeto conceitual de portfólio. Une direção visual editorial, catálogo navegável, páginas de produtos e uma jornada de compra demonstrativa, sem cobranças reais.',
    image: '/images/projects/vertice.webp',
    website: 'https://vertice-eight-omega.vercel.app/',
    github: 'https://github.com/FelipeAlves4/VERTICE',
    technologies: ['Next.js', 'React', 'TypeScript', 'CSS', 'Vercel'],
    featured: true,
    segment: 'sites',
    role: 'Desenvolvimento front-end e direção visual',
    status: 'Demonstração publicada',
    evidence: 'O projeto pode ser explorado ao vivo: catálogo com oito peças fictícias, filtros, busca, seleção de tamanho, favoritos, sacola salva no navegador e simulação de checkout. Não há pagamentos, estoque real ou resultados comerciais a reivindicar.',
    problem: 'Mostrar como uma marca de moda pode apresentar produtos com identidade própria e transformar a navegação em uma experiência de compra intuitiva.',
    solution: 'Loja conceito responsiva com campanha fotográfica gerada por IA, catálogo padronizado, páginas individuais de produto, interações de compra e fluxo demonstrativo completo.',
    highlights: [
      'Identidade editorial premium, com fotografias conceituais e interface responsiva',
      'Catálogo pesquisável, filtros de categoria e ordenação por preço',
      'Páginas de produto com galeria, detalhes e escolha de tamanho',
      'Favoritos e sacola persistentes no navegador',
      'Checkout demonstrativo com resumo do pedido, sem transações reais',
    ],
    audience: 'varejo de moda',
  },
  { slug: 'psigestao', name: 'PsiGestão', category: 'SaaS para psicólogos', shortDescription: 'Gestão de pacientes, agenda, atendimentos, documentos e financeiro.', description: 'Plataforma completa para centralizar a rotina profissional de psicólogos com cuidado especial a informações sensíveis.', image: '/images/projects/psigestao.png', technologies: ['React', 'FastAPI', 'PostgreSQL', 'Supabase', 'Railway', 'Vercel'], featured: true, segment: 'sistemas', role: 'Desenvolvimento Full Stack', evidence: 'A arquitetura reúne frontend, API, banco de dados, autenticação e fluxos clínico-administrativos. A plataforma continua em desenvolvimento; este case demonstra o escopo técnico implementado, não resultados comerciais de uso.', status: 'Produto em desenvolvimento', problem: 'Concentrar a operação clínica em uma experiência segura, organizada e acessível.', solution: 'Uma plataforma unificada para acompanhar pacientes, agenda, registros e a operação financeira.', highlights: ['Gestão de pacientes e agenda', 'Prontuários e documentos', 'Financeiro e portal do paciente', 'Autenticação e controle de acesso'] },
  { slug: 'doria-cucina-italiana', name: 'Doria Cucina Italiana', category: 'Restaurante', shortDescription: 'Landing page para destacar a identidade, o cardápio e o contato de um restaurante italiano.', description: 'Uma presença digital criada para valorizar a experiência do restaurante e tornar o caminho até o contato mais direto.', image: '/images/projects/doria-cucina-italiana.png', website: 'https://doria-cucina-italiana.vercel.app/', github: 'https://github.com/FelipeAlves4/Doria.cucina.italiana', technologies: ['HTML', 'CSS', 'JavaScript'], featured: true, segment: 'sites', role: 'Desenvolvimento da landing page', evidence: 'Demonstra uma apresentação visual voltada ao segmento gastronômico, navegação responsiva e caminhos para consulta das informações e contato. Não foram divulgadas métricas de conversão.', problem: 'Apresentar uma marca gastronômica com personalidade e facilitar o primeiro contato com clientes.', solution: 'Uma landing page visual, responsiva e direcionada para cardápio, marca e contato.', highlights: ['Identidade visual gastronômica', 'Informações do cardápio', 'Experiência responsiva', 'Contato facilitado'], audience: 'restaurante' },
  { slug: 'cafe-caramello', name: 'Café Caramello', category: 'Comercial', shortDescription: 'Site para apresentar produtos, sabores, receitas, revenda e gerar pedidos pelo WhatsApp.', description: 'Projeto comercial para dar visibilidade aos produtos e criar pontos claros de conversão para pedidos.', image: '/images/projects/cafe-caramello.png', website: 'https://cafe-caramelo-marilia.vercel.app/', github: 'https://github.com/FelipeAlves4/Cafe-caramelo-marilia', technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'], featured: true, segment: 'sites', role: 'Desenvolvimento do site comercial', evidence: 'O site permite conhecer o catálogo, explorar conteúdos e seguir para pedidos ou contato. É uma demonstração de experiência comercial, sem alegar resultados de vendas.', problem: 'Reunir o catálogo e as possibilidades de compra em uma presença digital clara.', solution: 'Uma experiência comercial voltada a produtos, revenda, receitas e pedidos via WhatsApp.', highlights: ['Apresentação de produtos', 'Receitas e revenda', 'CTAs para pedidos', 'Layout responsivo'] },
  { slug: 'master-food', name: 'Master Food', category: 'Alimentação', shortDescription: 'Landing page para lanchonete com produtos, cardápio, localização e pedidos.', description: 'Projeto focado no segmento de alimentação, com uma navegação rápida para produtos, localização e contato.', image: '/images/projects/master-food.png', website: 'https://master-foods.vercel.app/', github: 'https://github.com/FelipeAlves4/Master-foods', technologies: ['HTML', 'CSS', 'JavaScript'], featured: false, segment: 'sites', problem: 'Organizar informações essenciais para que clientes encontrem e peçam com facilidade.', solution: 'Uma página comercial com foco em cardápio, localização e conversão por WhatsApp.', highlights: ['Cardápio em destaque', 'Informações de localização', 'CTAs de pedido', 'Layout para celular'], audience: 'restaurante' },
  { slug: 'techlearn', name: 'TechLearn', category: 'Educação', shortDescription: 'Plataforma educacional para tornar o aprendizado de programação mais guiado e interativo.', description: 'Uma plataforma voltada para organizar o aprendizado de programação em uma experiência mais guiada.', image: '/images/projects/techlearn.png', website: 'https://tech-learn-unimar.vercel.app/', technologies: ['HTML', 'CSS', 'JavaScript'], featured: true, segment: 'sistemas', role: 'Desenvolvimento de plataforma educacional', evidence: 'Permite avaliar a organização dos conteúdos, a interface e os recursos de aprendizagem guiada. É um projeto educacional; não há resultados de aprendizagem mensurados divulgados.', problem: 'Apoiar o estudo de programação com uma estrutura mais acessível.', solution: 'Uma plataforma que reúne conteúdos em uma experiência de aprendizagem guiada.', highlights: ['Jornada de aprendizagem', 'Interface interativa', 'Conteúdo organizado'] },
  { slug: 'rogeiro-construtor', name: 'Rogério Construtor', category: 'Serviços', shortDescription: 'Site de apresentação para serviços de construção.', description: 'Site institucional para apresentar serviços e facilitar o contato.', image: '/images/projects/construtor.png', website: 'https://constru-o.vercel.app/', github: 'https://github.com/FelipeAlves4/Constru-o', technologies: ['HTML', 'CSS', 'JavaScript'], featured: false },
  { slug: 'nutricionista', name: 'Nutricionista', category: 'Saúde', shortDescription: 'Presença digital para apresentação profissional e atendimento.', description: 'Projeto de apresentação para uma profissional de nutrição.', image: '/images/projects/nutricionista.png', website: 'https://felipealves4.github.io/Nutricionista/', github: 'https://github.com/FelipeAlves4/Nutricionista', technologies: ['HTML', 'CSS', 'JavaScript'], featured: false },
  { slug: 'ocean', name: 'Ocean', category: 'Institucional', shortDescription: 'Projeto visual para apresentação de marca e serviços.', description: 'Projeto institucional com foco em identidade e apresentação.', image: '/images/projects/ocean.png', website: 'https://ocean-projeto.vercel.app/', github: 'https://github.com/FelipeAlves4/Projeto-Ocean', technologies: ['HTML', 'CSS', 'JavaScript'], featured: false },
  { slug: 'casa-de-oracao', name: 'Casa de Oração', category: 'Institucional', shortDescription: 'Site para apresentação de comunidade, informações e contato.', description: 'Presença digital institucional com informações e canais de contato.', image: '/images/projects/casa-de-oracao.png', website: 'https://casa-de-ora-o.vercel.app/', github: 'https://github.com/FelipeAlves4/casa-de-ora-o', technologies: ['HTML', 'CSS', 'JavaScript'], featured: false },
  { slug: 'observamarilia', name: 'ObservaMarília', category: 'Gestão de demandas', shortDescription: 'Aplicação para acompanhar demandas da cidade e organizar o trabalho por etapas.', description: 'Projeto de sistema web com telas para diferentes perfis e organização do fluxo de demandas com quadro Kanban.', github: 'https://github.com/FelipeAlves4/ObservaMarilia', technologies: ['JavaScript', 'Web', 'GitHub'], featured: false, segment: 'sistemas', status: 'Projeto em evolução', role: 'Desenvolvimento de aplicação web', problem: 'Organizar demandas, acompanhamento e atualização de tarefas por diferentes perfis de usuário.', solution: 'Interface para registro e acompanhamento de solicitações, com organização visual do trabalho.', highlights: ['Fluxo de demandas', 'Visualização em Kanban', 'Telas para diferentes perfis'], evidence: 'O repositório demonstra a estrutura e a evolução do sistema. Uma captura visual atualizada ainda será adicionada a este case.' },
];
