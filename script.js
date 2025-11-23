// --- 1. DADOS EXPANDIDOS (Objeto JSON com Níveis) ---
// Adicionando a tag 'preferencia_ferramenta' para cada roadmap.

const ALL_ROADMAP_DATA = {
  // --- FRONTEND ---
  "Frontend_Básico": {
    "preferencia_foco": "Programação",
    "preferencia_nivel": "Básico",
    "preferencia_ferramenta": ["HTML", "CSS", "JavaScript"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "Frontend Básico (HTML, CSS, JS)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["html_fund"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Começando com os pilares da web: HTML para estrutura, CSS para estilo e JavaScript para interatividade básica.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "html_fund", "titulo": "HTML5 Estrutural", "tipo": "Fundamento", "depende_de": ["roadmap_area"], "proximos_passos": ["css_fund"], "detalhes": { "data_sugerida": "1 Semana", "documentacao_link": "https://developer.mozilla.org/pt-BR/docs/Web/HTML", "data_lancamento": "1993", "descricao_completa": "Estrutura e sintaxe básica do HTML.", "criador": "Tim Berners-Lee", "referencias_adicionais": [] } },
      { "id": "css_fund", "titulo": "CSS Fundamentos", "tipo": "Fundamento", "depende_de": ["html_fund"], "proximos_passos": ["responsividade_int"], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "https://developer.mozilla.org/pt-BR/docs/Web/CSS", "data_lancamento": "1996", "descricao_completa": "Box Model, seletores e fontes.", "criador": "Håkon Wium Lie", "referencias_adicionais": [] } },
      { "id": "responsividade_int", "titulo": "Responsividade (Mobile First)", "tipo": "Conceito", "depende_de": ["css_fund"], "proximos_passos": ["js_introducao"], "detalhes": { "data_sugerida": "1 Semana", "documentacao_link": "#", "data_lancamento": "2010", "descricao_completa": "Media Queries e design adaptativo.", "criador": "Ethan Marcotte", "referencias_adicionais": [] } },
      { "id": "js_introducao", "titulo": "JS: Variáveis, Condicionais e DOM", "tipo": "Fundamento", "depende_de": ["responsividade_int"], "proximos_passos": [], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", "data_lancamento": "1995", "descricao_completa": "Introdução à lógica e manipulação simples do Document Object Model.", "criador": "Brendan Eich", "referencias_adicionais": [] } }
    ]
  },
  "Frontend_Intermediário": {
    "preferencia_foco": "Programação",
    "preferencia_nivel": "Intermediário",
    "preferencia_ferramenta": ["JavaScript", "TypeScript", "React"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "Frontend Intermediário (Frameworks)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["layout_avancado"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Foco em layouts profissionais, performance e introdução a um framework moderno.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "layout_avancado", "titulo": "Flexbox e Grid Domínio", "tipo": "Técnica", "depende_de": ["roadmap_area"], "proximos_passos": ["assincronismo"], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "#", "data_lancamento": "2017", "descricao_completa": "Domínio de layouts complexos e alinhamento, como Holy Grail Layout.", "criador": "W3C", "referencias_adicionais": [] } },
      { "id": "assincronismo", "titulo": "JS Assincronismo", "tipo": "Fundamento", "depende_de": ["layout_avancado"], "proximos_passos": ["fetch_api", "orientacao_obj"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Promises, `async/await` e manipulação de estado.", "criador": "W3C", "referencias_adicionais": [] } },
      { "id": "fetch_api", "titulo": "Requisições HTTP (Fetch API)", "tipo": "Conceito", "depende_de": ["assincronismo"], "proximos_passos": ["react_intro"], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Consumo de APIs REST e tratamento de erros.", "criador": "W3C", "referencias_adicionais": [] } },
      { "id": "orientacao_obj", "titulo": "JS Orientação a Objetos (POO)", "tipo": "Conceito", "depende_de": ["assincronismo"], "proximos_passos": ["react_intro"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Classes, herança e encapsulamento em JavaScript ES6.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "react_intro", "titulo": "Introdução ao React/Vue/Angular", "tipo": "Framework", "depende_de": ["fetch_api", "orientacao_obj"], "proximos_passos": [], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "https://react.dev/", "data_lancamento": "2013", "descricao_completa": "Componentes, Props, State e roteamento básico.", "criador": "Meta", "referencias_adicionais": [] } }
    ]
  },
  "Frontend_Avançado": {
    "preferencia_foco": "Programação",
    "preferencia_nivel": "Avançado",
    "preferencia_ferramenta": ["TypeScript", "React", "Redux"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "Frontend Avançado (Arquitetura e Testes)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["gerenciamento_estado"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Foco em arquitetura de larga escala, performance (Web Vitals) e testes unitários/E2E.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "gerenciamento_estado", "titulo": "Gerenciamento de Estado (Redux/Zustand)", "tipo": "Arquitetura", "depende_de": ["roadmap_area"], "proximos_passos": ["typescript"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "2015", "descricao_completa": "Padrões de estado global para aplicações complexas.", "criador": "Dan Abramov", "referencias_adicionais": [] } },
      { "id": "typescript", "titulo": "TypeScript", "tipo": "Linguagem", "depende_de": ["gerenciamento_estado"], "proximos_passos": ["testes_frontend"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "https://www.typescriptlang.org/", "data_lancamento": "2012", "descricao_completa": "Tipagem estática para código escalável e seguro.", "criador": "Microsoft", "referencias_adicionais": [] } },
      { "id": "testes_frontend", "titulo": "Testes Unitários (Jest/Vitest)", "tipo": "Qualidade", "depende_de": ["typescript"], "proximos_passos": ["performance_web"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Criação de testes para garantir a funcionalidade e estabilidade dos componentes.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "performance_web", "titulo": "Web Vitals e Otimização", "tipo": "Otimização", "depende_de": ["testes_frontend"], "proximos_passos": [], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "#", "data_lancamento": "2020", "descricao_completa": "Otimização de carregamento, pintura e interatividade (LCP, FID, CLS).", "criador": "Google", "referencias_adicionais": [] } }
    ]
  },

  // --- BACKEND ---
  "Backend_Básico": {
    "preferencia_foco": "Programação",
    "preferencia_nivel": "Básico",
    "preferencia_ferramenta": ["Python", "NodeJS", "SQL"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "Backend Básico (Lógica e DB)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["logica_prog"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Foco em lógica de programação e primeiros passos com banco de dados e servidor local.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "logica_prog", "titulo": "Lógica de Programação", "tipo": "Fundamento", "depende_de": ["roadmap_area"], "proximos_passos": ["linguagem_base"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Entendimento de algoritmos e estruturas de dados básicas (arrays, loops).", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "linguagem_base", "titulo": "Linguagem de Escolha (Ex: Python)", "tipo": "Tecnologia", "depende_de": ["logica_prog"], "proximos_passos": ["sql_introducao"], "detalhes": { "data_sugerida": "5 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Sintaxe da linguagem, funções e módulos básicos.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "sql_introducao", "titulo": "Introdução ao SQL", "tipo": "Fundamento", "depende_de": ["linguagem_base"], "proximos_passos": ["http_req"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "1970s", "descricao_completa": "Conceitos de DB relacional, comandos SELECT, INSERT e UPDATE.", "criador": "Edgar Codd", "referencias_adicionais": [] } },
      { "id": "http_req", "titulo": "Protocolo HTTP", "tipo": "Conceito", "depende_de": ["sql_introducao"], "proximos_passos": [], "detalhes": { "data_sugerida": "1 Semana", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Verbos (GET, POST), códigos de status e cabeçalhos.", "criador": "W3C", "referencias_adicionais": [] } }
    ]
  },
  "Backend_Intermediário": {
    "preferencia_foco": "Programação",
    "preferencia_nivel": "Intermediário",
    "preferencia_ferramenta": ["NodeJS", "Python", "Express"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "Backend Intermediário (APIs e Segurança)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["framework_api"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Construção de APIs RESTful, ORMs e conceitos básicos de segurança.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "framework_api", "titulo": "Framework API (Ex: Express/Django)", "tipo": "Ferramenta", "depende_de": ["roadmap_area"], "proximos_passos": ["orm"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Criação de rotas, middlewares e estrutura de projeto.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "orm", "titulo": "ORM/ODM (Object Relational Mapping)", "tipo": "Conceito", "depende_de": ["framework_api"], "proximos_passos": ["autenticacao"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Utilização de ferramentas como Sequelize, Prisma ou Mongoose para interagir com o DB.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "autenticacao", "titulo": "Autenticação (JWT, Sessões)", "tipo": "Segurança", "depende_de": ["orm"], "proximos_passos": ["deploy_cont"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Implementação de sistemas de login e autorização.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "deploy_cont", "titulo": "Deploy e Containers (Docker Intro)", "tipo": "DevOps", "depende_de": ["autenticacao"], "proximos_passos": [], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "https://www.docker.com/", "data_lancamento": "2013", "descricao_completa": "Conceitos de virtualização, criação de imagens Docker e deploy básico.", "criador": "Solomon Hykes", "referencias_adicionais": [] } }
    ]
  },
  "Backend_Avançado": {
    "preferencia_foco": "Programação",
    "preferencia_nivel": "Avançado",
    "preferencia_ferramenta": ["NodeJS", "Kafka", "MongoDB"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "Backend Avançado (Microserviços e Escalabilidade)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["arquitetura_api"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Foco em arquiteturas distribuídas, filas de mensagem, caching e performance.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "arquitetura_api", "titulo": "Arquitetura RESTful vs GraphQL", "tipo": "Arquitetura", "depende_de": ["roadmap_area"], "proximos_passos": ["bancos_nao_sql"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Padrões de design de API, versionamento e otimização de endpoints.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "bancos_nao_sql", "titulo": "Bancos Não-SQL (MongoDB/Redis)", "tipo": "Tecnologia", "depende_de": ["arquitetura_api"], "proximos_passos": ["messaging_queues"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Modelagem de dados não relacionais e uso de cache para alta performance.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "messaging_queues", "titulo": "Filas de Mensagem (RabbitMQ/Kafka)", "tipo": "Arquitetura", "depende_de": ["bancos_nao_sql"], "proximos_passos": ["microservicos"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Comunicação assíncrona, event-driven architecture e desacoplamento de serviços.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "microservicos", "titulo": "Design de Microserviços", "tipo": "Padrão", "depende_de": ["messaging_queues"], "proximos_passos": [], "detalhes": { "data_sugerida": "5 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Decomposição monolítica, comunicação entre serviços e padrões como API Gateway.", "criador": "Vários", "referencias_adicionais": [] } }
    ]
  },

  // --- WEBDESIGN ---
  "WebDesign_Básico": {
    "preferencia_foco": "Design",
    "preferencia_nivel": "Básico",
    "preferencia_ferramenta": ["Figma", "Sketch", "Adobe XD"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "WebDesign Básico (Conceitos Visuais e Ferramenta)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["principios_design"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Foco na teoria fundamental do design, usabilidade e prototipagem de baixa fidelidade.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "principios_design", "titulo": "Princípios de Design (Teoria)", "tipo": "Fundamento", "depende_de": ["roadmap_area"], "proximos_passos": ["tipografia", "ferramenta_design"], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Estudo de hierarquia visual, alinhamento e contraste.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "tipografia", "titulo": "Tipografia e Teoria da Cor", "tipo": "Conceito", "depende_de": ["principios_design"], "proximos_passos": ["ferramenta_design"], "detalhes": { "data_sugerida": "1 Semana", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Seleção de fontes, legibilidade e criação de paletas de cores acessíveis.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "ferramenta_design", "titulo": "Figma/XD Básico", "tipo": "Ferramenta", "depende_de": ["principios_design", "tipografia"], "proximos_passos": ["wireframe"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "https://www.figma.com/", "data_lancamento": "2016", "descricao_completa": "Introdução à interface, frames e criação de wireframes de baixa fidelidade.", "criador": "Dylan Field", "referencias_adicionais": [] } },
      { "id": "wireframe", "titulo": "Wireframing e User Flow", "tipo": "Técnica", "depende_de": ["ferramenta_design"], "proximos_passos": [], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Criação de fluxos de usuário e esboços de tela para garantir a usabilidade.", "criador": "Vários", "referencias_adicionais": [] } }
    ]
  },
  "WebDesign_Intermediário": {
    "preferencia_foco": "Design",
    "preferencia_nivel": "Intermediário",
    "preferencia_ferramenta": ["Figma", "Sketch", "Prototipagem"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "WebDesign Intermediário (UX e Prototipagem)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["ux_research"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Aprofundamento em Experiência do Usuário, pesquisas, testes e prototipagem de alta fidelidade.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "ux_research", "titulo": "UX Research (Pesquisa e Personas)", "tipo": "UX", "depende_de": ["roadmap_area"], "proximos_passos": ["prototipagem"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Criação de personas, mapas de empatia e condução de entrevistas.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "prototipagem", "titulo": "Prototipagem de Alta Fidelidade", "tipo": "Técnica", "depende_de": ["ux_research"], "proximos_passos": ["testes_usabilidade"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Criação de interfaces detalhadas e interativas que simulam o produto final.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "testes_usabilidade", "titulo": "Testes de Usabilidade", "tipo": "UX", "depende_de": ["prototipagem"], "proximos_passos": ["design_system_intro"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Planejamento e execução de testes com usuários reais para identificar problemas de interação.", "criador": "Jakob Nielsen", "referencias_adicionais": [] } },
      { "id": "design_system_intro", "titulo": "Introdução a Design Systems", "tipo": "Padrão", "depende_de": ["testes_usabilidade"], "proximos_passos": [], "detalhes": { "data_sugerida": "2 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Conceitos de atomic design, tokens e bibliotecas de componentes.", "criador": "Brad Frost", "referencias_adicionais": [] } }
    ]
  },
  "WebDesign_Avançado": {
    "preferencia_foco": "Design",
    "preferencia_nivel": "Avançado",
    "preferencia_ferramenta": ["Figma", "Design System", "WCAG"],
    "roadmap": [
      { "id": "roadmap_area", "titulo": "WebDesign Avançado (Acessibilidade e Sistemas)", "tipo": "Área Principal", "depende_de": ["nenhum"], "proximos_passos": ["acessibilidade_wcag"], "detalhes": { "data_sugerida": "N/A", "documentacao_link": "#", "data_lancamento": "2024", "descricao_completa": "Domínio de acessibilidade, manutenção de Design Systems e otimização para performance e conversão.", "criador": "AI System", "referencias_adicionais": [] } },
      { "id": "acessibilidade_wcag", "titulo": "Acessibilidade WCAG e ARIA", "tipo": "Padrão", "depende_de": ["roadmap_area"], "proximos_passos": ["advanced_systems"], "detalhes": { "data_sugerida": "3 Semanas", "documentacao_link": "https://www.w3.org/WAI/WCAG22/quickref/", "data_lancamento": "1999", "descricao_completa": "Implementação de padrões de acessibilidade web para garantir inclusão.", "criador": "W3C", "referencias_adicionais": [] } },
      { "id": "advanced_systems", "titulo": "Manutenção de Design Systems", "tipo": "Arquitetura", "depende_de": ["acessibilidade_wcag"], "proximos_passos": ["design_strategy"], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Versionamento, documentação e governança de sistemas de design em larga escala.", "criador": "Vários", "referencias_adicionais": [] } },
      { "id": "design_strategy", "titulo": "Estratégia de Design e Métricas", "tipo": "Gestão", "depende_de": ["advanced_systems"], "proximos_passos": [], "detalhes": { "data_sugerida": "4 Semanas", "documentacao_link": "#", "data_lancamento": "N/A", "descricao_completa": "Alinhamento do design com metas de negócio, análise de dados de UX e CRO (Conversion Rate Optimization).", "criador": "Vários", "referencias_adicionais": [] } }
    ]
  }
};

let CURRENT_ROADMAP_NODES = [];

// --- 2. Elementos do DOM e Configurações de Ferramentas ---
const roadmapContainer = document.getElementById('roadmap-container');
const svg = document.getElementById('roadmap-svg');
const initialMessage = document.getElementById('initial-message');

const filterButton = document.getElementById('filter-button');
const focoSelect = document.getElementById('foco-select');
const ferramentaSelect = document.getElementById('ferramenta-select'); // Novo Select
const levelSelect = document.getElementById('level-select');

// Mapeamento das opções de ferramentas por Foco
const FERRAMENTAS_POR_FOCO = {
    "Programação": [
        { value: "JavaScript", text: "JavaScript" },
        { value: "HTML", text: "HTML/CSS" },
        { value: "Typescript", text: "Typescript" },
        { value: "NodeJS", text: "NodeJS" },
        { value: "Python", text: "Python" },
        { value: "SQL", text: "SQL/Banco de Dados" }
    ],
    "Design": [
        { value: "Figma", text: "Figma" },
        { value: "Sketch", text: "Sketch/Adobe XD" },
        { value: "Prototipagem", text: "Prototipagem/UX" },
        { value: "Design System", text: "Design System/Acessibilidade" }
    ]
};

// Mapa de posicionamento (Mantido da versão anterior)
const positionMap = {
    // Linha 1
    "roadmap_area": { row: 1, col: 3 }, 
    
    // Linha 2
    "html_fund": { row: 2, col: 3 }, 
    "layout_avancado": { row: 2, col: 3 }, 
    "gerenciamento_estado": { row: 2, col: 3 }, 
    "logica_prog": { row: 2, col: 3 }, 
    "framework_api": { row: 2, col: 3 }, 
    "arquitetura_api": { row: 2, col: 3 }, 
    "principios_design": { row: 2, col: 3 }, 
    "ux_research": { row: 2, col: 3 }, 
    "acessibilidade_wcag": { row: 2, col: 3 }, 

    // Linha 3
    "css_fund": { row: 3, col: 2 }, 
    "assincronismo": { row: 3, col: 3 }, 
    "typescript": { row: 3, col: 3 }, 
    "linguagem_base": { row: 3, col: 3 }, 
    "orm": { row: 3, col: 3 }, 
    "bancos_nao_sql": { row: 3, col: 3 }, 
    "tipografia": { row: 3, col: 2 }, 
    "ferramenta_design": { row: 3, col: 4 }, 
    "prototipagem": { row: 3, col: 3 }, 
    "advanced_systems": { row: 3, col: 3 }, 

    // Linha 4
    "responsividade_int": { row: 4, col: 3 }, 
    "fetch_api": { row: 4, col: 2 }, 
    "orientacao_obj": { row: 4, col: 4 }, 
    "testes_frontend": { row: 4, col: 3 }, 
    "sql_introducao": { row: 4, col: 3 }, 
    "autenticacao": { row: 4, col: 3 }, 
    "messaging_queues": { row: 4, col: 3 }, 
    "wireframe": { row: 4, col: 3 }, 
    "testes_usabilidade": { row: 4, col: 3 }, 
    "design_strategy": { row: 4, col: 3 }, 

    // Linha 5
    "js_introducao": { row: 5, col: 3 }, 
    "react_intro": { row: 5, col: 3 }, 
    "performance_web": { row: 5, col: 3 }, 
    "http_req": { row: 5, col: 3 }, 
    "deploy_cont": { row: 5, col: 3 }, 
    "microservicos": { row: 5, col: 3 }, 
    "design_system_intro": { row: 5, col: 3 }
};


// --- 3. Lógica de Habilitação e Carregamento de Inputs ---

function resetInputs(exceptFoco = false) {
    if (!exceptFoco) focoSelect.value = "";
    ferramentaSelect.innerHTML = '<option value="">Selecione a Ferramenta</option>';
    ferramentaSelect.disabled = true;
    levelSelect.value = "";
    levelSelect.disabled = true;
    filterButton.disabled = true;
}

focoSelect.addEventListener('change', () => {
    resetInputs(true);
    const selectedFoco = focoSelect.value;
    
    if (selectedFoco && FERRAMENTAS_POR_FOCO[selectedFoco]) {
        ferramentaSelect.disabled = false;
        
        FERRAMENTAS_POR_FOCO[selectedFoco].forEach(item => {
            const option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.text;
            ferramentaSelect.appendChild(option);
        });
    }
});

ferramentaSelect.addEventListener('change', () => {
    // Habilita o nível ao selecionar a ferramenta
    levelSelect.disabled = !ferramentaSelect.value;
    levelSelect.value = ""; // Reseta o nível
    filterButton.disabled = true;
});

levelSelect.addEventListener('change', () => {
    // Habilita o botão 'Gerar Roadmap' se Foco, Ferramenta E Nível estiverem preenchidos
    const selectedFoco = focoSelect.value;
    const selectedFerramenta = ferramentaSelect.value;
    const selectedLevel = levelSelect.value;
    filterButton.disabled = !(selectedFoco && selectedFerramenta && selectedLevel);
});

filterButton.addEventListener('click', generateRoadmap);

// --- 4. Lógica de Filtragem (CRUCIAL) ---

function determineArea(foco, ferramenta) {
    // Foco em Programação
    if (foco === 'Programação') {
        if (["HTML", "CSS", "JavaScript", "Typescript", "React"].includes(ferramenta)) {
            return 'Frontend';
        }
        if (["NodeJS", "Python", "SQL"].includes(ferramenta)) {
            return 'Backend';
        }
    } 
    // Foco em Design
    else if (foco === 'Design') {
        if (["Figma", "Sketch", "Prototipagem", "Design System"].includes(ferramenta)) {
            return 'WebDesign';
        }
    }
    return null; // Caso não encontre correspondência
}

function generateRoadmap() {
    const selectedFoco = focoSelect.value;
    const selectedFerramenta = ferramentaSelect.value;
    const selectedLevel = levelSelect.value;

    const areaBase = determineArea(selectedFoco, selectedFerramenta);

    if (!areaBase) {
        alert("Combinação de Foco e Ferramenta não corresponde a um Roadmap definido.");
        return;
    }

    // 2. Constrói a chave e busca o Roadmap
    const primaryKey = `${areaBase}_${selectedLevel}`;
    let roadmapData = ALL_ROADMAP_DATA[primaryKey];

    if (!roadmapData) {
        alert(`Roadmap para ${areaBase} no nível ${selectedLevel} não encontrado. Verifique a estrutura de dados.`);
        return;
    }
    
    CURRENT_ROADMAP_NODES = roadmapData.roadmap;

    initialMessage.style.display = 'none';
    renderNodes();
}


// --- 5. Lógica de Renderização e Correção SVG ---

function renderNodes() {
    roadmapContainer.innerHTML = ''; 
    roadmapContainer.appendChild(svg); 

    CURRENT_ROADMAP_NODES.forEach(node => {
        const nodeEl = document.createElement('div');
        nodeEl.id = node.id;
        nodeEl.classList.add('roadmap-node');

        if (node.id === "roadmap_area") {
            nodeEl.classList.add('roadmap-node--title');
        } else {
            nodeEl.addEventListener('click', () => updateSidebar(node.id));
        }

        nodeEl.innerHTML = `<h4>${node.titulo}</h4><small>${node.tipo}</small>`;
        
        const pos = positionMap[node.id];
        if (pos) {
            nodeEl.style.gridRow = pos.row;
            nodeEl.style.gridColumn = pos.col;
        }

        roadmapContainer.appendChild(nodeEl);
    });

    setTimeout(drawConnections, 100); 
}

function getNodeCenter(nodeId, isBottom = false) {
    const nodeElement = document.getElementById(nodeId);
    if (!nodeElement) return null;

    const rect = nodeElement.getBoundingClientRect();
    const containerRect = roadmapContainer.getBoundingClientRect();
    
    const yCoord = isBottom ? rect.bottom : rect.top;
    
    return {
        x: rect.left - containerRect.left + (rect.width / 2),
        y: yCoord - containerRect.top                        
    };
}

function drawConnections() {
    svg.innerHTML = ''; 
    // defineArrowhead(); // REMOVIDO: Não precisamos mais da definição da ponta de seta

    const currentNodesMap = new Map(CURRENT_ROADMAP_NODES.map(node => [node.id, node]));

    currentNodesMap.forEach(parentNode => {
        if (parentNode.proximos_passos && parentNode.proximos_passos.length > 0) {
            
            const parentBasePos = getNodeCenter(parentNode.id, true);
            if (!parentBasePos) return;

            const childPositions = parentNode.proximos_passos
                .filter(childId => currentNodesMap.has(childId) && document.getElementById(childId) !== null)
                .map(childId => getNodeCenter(childId, false)) 
                .filter(Boolean);

            if (childPositions.length === 0) return;

            const branchY = parentBasePos.y + 30;
            
            // 1. Linha Vertical: Pai (BASE) -> Ponto de Ramificação (agora sem o argumento 'arrow')
            drawLine(parentBasePos.x, parentBasePos.y, parentBasePos.x, branchY); 

            const allXCoords = [parentBasePos.x, ...childPositions.map(p => p.x)];
            const minX = Math.min(...allXCoords);
            const maxX = Math.max(...allXCoords);

            // 2. Linha Horizontal: (agora sem o argumento 'arrow')
            if (childPositions.length > 0) {
                drawLine(minX, branchY, maxX, branchY); 
            } 

            // 3. Linhas Verticais: Ponto de Ramificação -> Filhos (TOPO) (agora sem o argumento 'arrow')
            childPositions.forEach(childPos => {
                drawLine(childPos.x, branchY, childPos.x, childPos.y); 
            });
        }
    });
}

// drawLine com o parâmetro 'arrow' removido, pois não é mais necessário
function drawLine(x1, y1, x2, y2) { // Parâmetro 'arrow' removido
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "#E3E3E3");
    line.setAttribute("stroke-width", "3");
    // line.setAttribute("marker-end", "url(#arrowhead)"); // REMOVIDO: Não queremos mais a seta
    svg.appendChild(line);
}

// REMOVIDO: A função defineArrowhead não é mais necessária
// function defineArrowhead() { /* ... */ }

// ... (código restante) ...

// Na inicialização, a chamada a defineArrowhead será removida ou comentada
window.addEventListener('load', () => {
    // defineArrowhead(); // REMOVIDO ou COMENTADO
});
window.addEventListener('resize', () => {
    if (CURRENT_ROADMAP_NODES.length > 0) {
        setTimeout(drawConnections, 100); 
    }
});

// Definição da ponta de seta (arrowhead)
function defineArrowhead() {
    if (document.getElementById('arrowhead')) return;

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    
    // markerWidth e markerHeight definem o viewport do marker
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    // refX e refY definem o ponto de referência (onde a linha termina)
    marker.setAttribute("refX", "5"); // Ajustado para o centro da ponta (dentro do 10x7)
    marker.setAttribute("refY", "3.5"); // Centro vertical
    marker.setAttribute("orient", "auto");
    
    // O polígono que forma a seta, desenhada da esquerda para a direita (0 0 até 10 3.5)
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "0 0, 10 3.5, 0 7");
    polygon.setAttribute("fill", "#E3E3E3");

    marker.appendChild(polygon);
    defs.appendChild(marker);
    svg.appendChild(defs);
}

// --- 6. Lógica da Interatividade (Sidebar) ---

function updateSidebar(topicId) {
    const topic = CURRENT_ROADMAP_NODES.find(t => t.id === topicId);

    if (topic && topic.detalhes) {
        document.getElementById('sidebar-title').textContent = topic.titulo;
        document.getElementById('sidebar-tipo').textContent = topic.tipo;
        document.getElementById('sidebar-data-sugerida').textContent = topic.detalhes.data_sugerida;
        document.getElementById('sidebar-lancamento').textContent = topic.detalhes.data_lancamento;
        document.getElementById('sidebar-criador').textContent = topic.detalhes.criador;
        document.getElementById('sidebar-descricao').textContent = topic.detalhes.descricao_completa;
        
        const linkEl = document.getElementById('sidebar-link');
        linkEl.href = topic.detalhes.documentacao_link;
        linkEl.textContent = topic.detalhes.documentacao_link.replace(/(^\w+:|^)\/\//, '').split('/')[0];
    }
}

// Inicialização: Configura a ponta de seta e o listener de redimensionamento
window.addEventListener('load', defineArrowhead);
window.addEventListener('resize', () => {
    if (CURRENT_ROADMAP_NODES.length > 0) {
        setTimeout(drawConnections, 100); 
    }
});