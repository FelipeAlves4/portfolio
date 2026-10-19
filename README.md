# Portfólio V4 — Felipe Alves

Portfólio comercial construído com Astro 5, TypeScript e Tailwind CSS, focado em conversão e evidências concretas de projetos web.

## Desenvolvimento

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Como o conteúdo está organizado

- `src/components/Hero.astro`: proposta principal e prévias reais de projetos.
- `src/sections/SocialProof.astro`: avaliação pública de **um** serviço concluído no 99Freelas, atribuída ao serviço correto (planilha).
- `src/sections/Services.astro`: dois caminhos (sites e sistemas).
- `src/data/projects.ts`: dados, tipo, resultados demonstráveis e links de cada case.
- `src/pages/projetos/[slug].astro`: desafio, solução, evidência e tecnologias do projeto.
- `src/styles/global.css`: base e estilos da V4.

## Fotos e privacidade

Os retratos anteriores eram imagens geradas por IA. A V4 **não os exibe**. Ao disponibilizar uma foto real aprovada pelo Felipe, é possível recolocá-la no Hero ou Sobre mim. Até lá, a apresentação visual utiliza somente capturas de projetos.

Os arquivos antigos não foram apagados para evitar perda irreversível de material; podem ser removidos após aprovação das novas fotos.

## Uso com 99Freelas

As informações e links de contato deste domínio independente **não devem ser copiados para campos do 99Freelas** que proíbem contato ou links externos. Negociações iniciadas na plataforma devem continuar nela, respeitando os termos vigentes.

## Cuidados de conteúdo

Não declarar vendas, aumento percentual de receita, métricas de performance ou clientes sem comprovação. Atualizar o campo `evidence` de cada case somente com resultados verificáveis.

## Antes de publicar

- Testar `npm ci && npm run build`.
- Revisar capturas de tela para excluir dados sensíveis.
- Conferir links ao vivo e textos dos cases.
- Conferir a versão desktop e mobile.
- Verificar eventos de clique antes de ativar rastreamento analítico (não há trackers adicionados nesta versão).
