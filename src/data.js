// Todo o conteúdo do site em um só lugar — edite aqui sem mexer nos componentes.

export const contact = {
  whatsapp: '5500000000000', // TODO: seu número com DDI + DDD, só dígitos
  email: 'contato@argus.dev', // TODO
  instagram: 'https://instagram.com/', // TODO
  linkedin: 'https://linkedin.com/', // TODO
  github: 'https://github.com/', // TODO
}

export const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

export const stats = [
  { value: 50, suffix: '+', label: 'Projetos entregues' },
  { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
  { value: 95, suffix: '+', label: 'Nota média no Lighthouse' },
  { value: 24, suffix: 'h', label: 'Tempo de resposta' },
]

export const services = [
  {
    icon: 'landing',
    title: 'Landing Pages',
    text: 'Páginas de alta conversão, pensadas para campanhas, lançamentos e captação de leads — com copy, design e performance alinhados ao objetivo.',
    tags: ['Conversão', 'A/B ready', 'Pixel & tags'],
  },
  {
    icon: 'site',
    title: 'Sites Institucionais',
    text: 'Presença digital sólida para empresas e profissionais. Estrutura clara, identidade forte e conteúdo fácil de atualizar.',
    tags: ['Multi-páginas', 'CMS', 'Blog'],
  },
  {
    icon: 'shop',
    title: 'E-commerce',
    text: 'Lojas virtuais rápidas e seguras, com checkout otimizado, integração de pagamentos, frete e gestão de estoque.',
    tags: ['Pix & cartão', 'Frete', 'Catálogo'],
  },
  {
    icon: 'app',
    title: 'Sistemas & Web Apps',
    text: 'Painéis, áreas de membros, agendamentos e ferramentas sob medida para automatizar processos do seu negócio.',
    tags: ['Dashboards', 'Login', 'APIs'],
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    text: 'Interfaces autorais, prototipadas no Figma antes de qualquer linha de código. Você aprova cada tela antes do desenvolvimento.',
    tags: ['Protótipo', 'Design system', 'Mobile first'],
  },
  {
    icon: 'seo',
    title: 'SEO & Performance',
    text: 'Sites que carregam em segundos e aparecem no Google. Otimização técnica, Core Web Vitals e estrutura semântica.',
    tags: ['Core Web Vitals', 'Schema', 'Analytics'],
  },
]

export const steps = [
  {
    n: '01',
    title: 'Imersão',
    text: 'Uma conversa para entender seu negócio, público, concorrentes e objetivos. Saio dela com um briefing claro e uma proposta sob medida.',
    time: '1–2 dias',
  },
  {
    n: '02',
    title: 'Design',
    text: 'Wireframes e layout de alta fidelidade no Figma. Você acompanha, comenta e aprova cada tela antes do código.',
    time: '3–7 dias',
  },
  {
    n: '03',
    title: 'Desenvolvimento',
    text: 'Código limpo, responsivo e animado, com foco em velocidade e SEO. Ambiente de teste online para você navegar em tempo real.',
    time: '5–15 dias',
  },
  {
    n: '04',
    title: 'Lançamento',
    text: 'Publicação no seu domínio, configuração de analytics, testes finais e treinamento. E eu continuo por perto no suporte.',
    time: '1–2 dias',
  },
]

// TODO: troque pelos seus projetos reais (imagem opcional em /public)
export const projects = [
  { title: 'Nébula Clinic', category: 'Site institucional', year: '2026', result: '+180% agendamentos', hue: 268 },
  { title: 'Volt Store', category: 'E-commerce', year: '2026', result: '1.2s de carregamento', hue: 285 },
  { title: 'Orbit Finance', category: 'Web app', year: '2025', result: 'Dashboard em tempo real', hue: 250 },
  { title: 'Lumen Studio', category: 'Landing page', year: '2025', result: '12% de conversão', hue: 300 },
]

export const differentials = [
  { title: 'Visão de 360°', text: 'Como o gigante de cem olhos da mitologia, enxergo cada detalhe: design, código, SEO, conversão e experiência.' },
  { title: 'Feito do zero', text: 'Nada de templates genéricos. Cada projeto nasce da identidade e dos objetivos do seu negócio.' },
  { title: 'Performance real', text: 'Sites leves, otimizados e com notas altas no Lighthouse — porque cada segundo de carregamento custa clientes.' },
  { title: 'Comunicação direta', text: 'Você fala com quem projeta e programa. Sem intermediários, sem ruído, com atualizações constantes.' },
  { title: 'Prazo cumprido', text: 'Cronograma definido na proposta e acompanhado etapa por etapa. Você sabe exatamente onde o projeto está.' },
  { title: 'Suporte contínuo', text: 'Depois do lançamento, sigo disponível para ajustes, evoluções e manutenção do seu site.' },
]

// TODO: ajuste os valores conforme sua tabela
export const plans = [
  {
    name: 'Start',
    price: 'R$ 1.490',
    note: 'pagamento único',
    desc: 'Para quem precisa de presença online rápida e profissional.',
    features: ['Landing page de 1 página', 'Design exclusivo e responsivo', 'Animações de entrada', 'Formulário + WhatsApp', 'SEO básico', '30 dias de suporte'],
    cta: 'Começar agora',
  },
  {
    name: 'Pro',
    price: 'R$ 3.490',
    note: 'pagamento único',
    desc: 'O site completo para empresas que querem se destacar.',
    features: ['Até 6 páginas', 'Protótipo no Figma', 'Animações avançadas', 'Blog / painel editável', 'SEO técnico + Analytics', 'Hospedagem configurada', '90 dias de suporte'],
    cta: 'Quero o Pro',
    featured: true,
  },
  {
    name: 'Custom',
    price: 'Sob consulta',
    note: 'projeto sob medida',
    desc: 'E-commerce, sistemas e experiências 3D ou interativas.',
    features: ['Escopo personalizado', 'E-commerce ou web app', 'Integrações e APIs', 'Área de login / membros', 'Experiências 3D (WebGL)', 'Suporte dedicado'],
    cta: 'Solicitar orçamento',
  },
]

// TODO: substitua por depoimentos reais
export const testimonials = [
  { name: 'Mariana Costa', role: 'Fundadora, Nébula Clinic', text: 'O site ficou exatamente com a cara da clínica — moderno e muito rápido. Os agendamentos online quase triplicaram no primeiro mês.' },
  { name: 'Rafael Lima', role: 'CEO, Volt Store', text: 'Profissionalismo do início ao fim. Entendeu o que eu queria melhor do que eu mesmo, e entregou antes do prazo.' },
  { name: 'Juliana Alves', role: 'Diretora criativa, Lumen Studio', text: 'As animações e os detalhes fazem toda a diferença. Nossos clientes comentam do site em toda reunião.' },
]

export const faq = [
  { q: 'Quanto tempo leva para meu site ficar pronto?', a: 'Landing pages ficam prontas em cerca de 7 a 10 dias úteis. Sites institucionais levam de 2 a 4 semanas, e projetos sob medida têm prazo definido na proposta.' },
  { q: 'Preciso ter domínio e hospedagem?', a: 'Não. Eu cuido de tudo: ajudo a registrar o domínio, configuro a hospedagem e deixo o site no ar. Se você já tiver, uso o que existe.' },
  { q: 'Vou conseguir editar o site depois?', a: 'Sim. Nos planos com painel editável você altera textos, imagens e posts sem precisar de código. Também ofereço planos de manutenção.' },
  { q: 'O site funciona bem no celular?', a: 'Todos os projetos são mobile first: pensados primeiro para o celular e adaptados para tablets e desktops, com testes em vários dispositivos.' },
  { q: 'Como funciona o pagamento?', a: 'Normalmente 50% na aprovação da proposta e 50% na entrega. Aceito Pix, transferência e cartão (com possibilidade de parcelamento).' },
  { q: 'E se eu não gostar do design?', a: 'O design é aprovado por você antes de começar o desenvolvimento, com rodadas de ajuste incluídas. Você só segue quando estiver satisfeito.' },
]
