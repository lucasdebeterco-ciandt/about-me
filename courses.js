/**
 * Cursos e Capacitações - Lucas Debeterco
 * Arquivo de objetos contendo os cursos da CI&T e Cursos Pessoais.
 */

const citCourses = [
    {
        id: "certgenaiengineering",
        title: "[Certification] Gen AI Engineering",
        category: "AI Engineering",
        url: "https://university.ciandt.com/plus/my/training/477/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certgenaiengfastrack",
        title: "[Certification] Gen AI Engineering - Fast Track",
        category: "AI Engineering",
        url: "https://university.ciandt.com/plus/my/training/524/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certaifluencyanthrop",
        title: "[Certification] AI Fluency: Framework & Foundations - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/521/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certclaudecode101",
        title: "[Certification] Claude 101 - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/498/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certllmprompt",
        title: "[Certification Exam] 1. Fundamentals of LLMs and Prompt Engineering",
        category: "AI Engineering",
        url: "https://university.ciandt.com/plus/my/training/467/units/continue",
        platform: "CI&T University"
    },
    {
        id: "cert-devaitools",
        title: "[Certification Exam] 2. Practical Development with AI Tools",
        category: "AI & Automation",
        url: "https://university.ciandt.com/plus/my/training/470/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certaicodeautomation",
        title: "[Certification Exam] 3. AI Agents and Code Automation",
        category: "AI & Automation",
        url: "https://university.ciandt.com/plus/my/training/471/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certmultiagentcoll",
        title: "[Certification Exam] 4. Multi-Agent Systems and Collaboration",
        category: "AI & Automation",
        url: "https://university.ciandt.com/plus/my/training/472/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certmemoryevalagents",
        title: "[Certification Exam] 5. Evaluation and Memory in AI Agents",
        category: "AI & Automation",
        url: "https://university.ciandt.com/plus/my/training/473/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certadvragdspy",
        title: "[Certification Exam] 6. Advanced RAG and DSPy Applications",
        category: "AI Engineering",
        url: "https://university.ciandt.com/plus/my/training/474/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certadvllmtraining",
        title: "[Certification Exam] 7. Advanced LLM Training Methods",
        category: "AI Engineering",
        url: "https://university.ciandt.com/plus/my/training/475/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certagenticai",
        title: "[Certification Exam] 8. Agentic AI: Architectures and Applications",
        category: "AI & Automation",
        url: "https://university.ciandt.com/plus/my/training/476/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certbuildclaudeapi",
        title: "[Certification] Building with the Claude API - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/483/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certclaudecodeaction",
        title: "[Certification] Claude Code in Action - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/484/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certintroagentskill",
        title: "[Certification] Introduction to agent skills - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/482/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certintromcp",
        title: "[Certification] Introduction to Model Context Protocol - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/480/units/continue",
        platform: "CI&T University"
    },
    {
        id: "certclaudecodemcpadv",
        title: "[Certification] Model Context Protocol: Advanced Topics - Anthropic",
        category: "Anthropic & Claude",
        url: "https://university.ciandt.com/plus/my/training/499/units/continue",
        platform: "CI&T University"
    },
    {
        id: "agenticsddbmac",
        title: "Agentic Software Development - SDD & BMAD",
        category: "AI & Automation",
        url: "https://university.ciandt.com/plus/my/training/479/units/continue",
        platform: "CI&T University"
    },
    {
        id: "genaibasics",
        title: "Gen AI Basics - by CI&T",
        category: "GenAI",
        url: "https://university.ciandt.com/plus/my/training/455/units/continue",
        platform: "CI&T University"
    },
    {
        id: "flowPromptEng",
        title: "CI&T /FLOW - Prompt Engineering",
        category: "CI&T FLOW",
        url: "https://university.ciandt.com/plus/my/training/382/units/continue",
        platform: "CI&T University"
    },
    {
        id: "flowuser",
        title: "FLOW AI USER Exam",
        category: "CI&T FLOW",
        url: "https://university.ciandt.com/plus/my/training/376/units/continue",
        platform: "CI&T University"
    },
    {
        id: "flow-agents",
        title: "CI&T /FLOW - Agents",
        category: "CI&T FLOW",
        url: "https://university.ciandt.com/plus/my/training/373/units/continue",
        platform: "CI&T University"
    },
    {
        id: "flow-deep-dive",
        title: "CI&T /FLOW - Refiner Deep-Dive",
        category: "CI&T FLOW",
        url: "https://university.ciandt.com/plus/my/training/372/units/continue",
        platform: "CI&T University"
    },
    {
        id: "flow-chat",
        title: "CI&T /FLOW Engines: Chat",
        category: "CI&T FLOW",
        url: "https://university.ciandt.com/plus/my/training/377/units/continue",
        platform: "CI&T University"
    },
    {
        id: "genAIMindset",
        title: "CI&T /FLOW - GenAI Mindset",
        category: "CI&T FLOW",
        url: "https://university.ciandt.com/plus/my/training/378/units/continue",
        platform: "CI&T University"
    },
    {
        id: "ds-attacktech",
        title: "Desenvolvimento Seguro - Attack techniques",
        category: "Segurança & Compliance",
        url: "https://university.ciandt.com/plus/my/training/335/units/continue",
        platform: "CI&T University"
    },
    {
        id: "ds-foundations",
        title: "Desenvolvimento Seguro - Foundations",
        category: "Segurança & Compliance",
        url: "https://university.ciandt.com/plus/my/training/334/units/continue",
        platform: "CI&T University"
    },
    {
        id: "trein-etica26",
        title: "[2026] Treinamento de Ética, Privacidade de dados, Segurança da Informação e ESG",
        category: "ESG & Governança",
        url: "https://university.ciandt.com/plus/my/training/462/units/continue",
        platform: "CI&T University"
    }
];

const personalCourses = [
    {
        id: "node-fundamentos-rocketseat",
        title: "Fundamentos do Node.js",
        category: "Node.js & Back-end",
        credentialCode: "5c106c0c-e5da-4d27-a0ec-f09d4784edd0",
        url: "https://app.rocketseat.com.br/certificates/5c106c0c-e5da-4d27-a0ec-f09d4784edd0",
        platform: "Rocketseat"
    },
    {
        id: "api-node-solid",
        title: "API Node.js com SOLID",
        category: "Node.js & Back-end",
        credentialCode: "5c106c0c-e5da-4d27-a0ec-f09d4784edd0",
        url: "https://app.rocketseat.com.br/certificates/5c106c0c-e5da-4d27-a0ec-f09d4784edd0",
        platform: "Rocketseat"
    },
    {
        id: "api-test-nodejs",
        title: "Criando API Rest com Node.js",
        category: "Node.js & Back-end",
        credentialCode: "5c106c0c-e5da-4d27-a0ec-f09d4784edd0",
        url: "https://app.rocketseat.com.br/certificates/5c106c0c-e5da-4d27-a0ec-f09d4784edd0",
        platform: "Rocketseat"
    },
    {
        id: "react-2022-rocketseat",
        title: "React - 2022",
        category: "React.js",
        credentialCode: "7865e48d-2081-4405-94b8-a0a4a0c7f6a0",
        url: "https://app.rocketseat.com.br/certificates/7865e48d-2081-4405-94b8-a0a4a0c7f6a0",
        platform: "Rocketseat"
    },
    {
        id: "saas-nextjs-rbac-rocketseat",
        title: "Criando SaaS com Next.js e RBAC",
        category: "Next.js & SaaS",
        credentialCode: "48be1137-66fa-43db-be8f-c1fc30ab154a",
        url: "https://app.rocketseat.com.br/certificates/48be1137-66fa-43db-be8f-c1fc30ab154a",
        platform: "Rocketseat"
    },
    {
        id: "redux-zustand-rocketseat",
        title: "Redux Zustand",
        category: "Gerenciamento de Estado",
        credentialCode: "81801afb-f62f-41a3-8d75-7f0137b49f2b",
        url: "https://app.rocketseat.com.br/certificates/81801afb-f62f-41a3-8d75-7f0137b49f2b",
        platform: "Rocketseat"
    },
    {
        id: "codecon-summit-24",
        title: "Certificado de Participação - Codecon Summit 24",
        category: "Evento & Conferência",
        credentialCode: "18876251.84402347.6.8.887625184402",
        url: "https://eventos.codecon.dev/documentos/imprimir?i=18876251.84402347.6.8.88762518440234768&cc=883BFF46-131F-4C9C-9EBB-5986AC0AC845",
        platform: "Even3"
    },
    {
        id: "nextjs-approuter-testes-rocketseat",
        title: "Next.js App Router e Testes",
        category: "Next.js & Testes",
        credentialCode: "2161531c-c23d-4408-8d98-2068f55f4781",
        url: "https://app.rocketseat.com.br/certificates/2161531c-c23d-4408-8d98-2068f55f4781",
        platform: "Rocketseat"
    },
    {
        id: "integrando-frontend-backend-rocketseat",
        title: "Integrando Frontend e Backend",
        category: "Fullstack",
        credentialCode: "4528f397-abe1-42a3-88e7-499b3db3f30d",
        url: "https://app.rocketseat.com.br/certificates/4528f397-abe1-42a3-88e7-499b3db3f30d",
        platform: "Rocketseat"
    },
    {
        id: "react-arquivos-estaticos-2023-alura",
        title: "React com JavaScript: lidando com arquivos estáticos",
        category: "React.js",
        credentialCode: "b2e67636-551f-4870-b068-6ed855fbe998",
        url: "https://cursos.alura.com.br/certificate/b2e67636-551f-4870-b068-6ed855fbe998",
        platform: "Alura"
    },
    {
        id: "react-migrando-typescript-alura",
        title: "React: migrando para TypeScript",
        category: "React & TypeScript",
        credentialCode: "b43246ff-095a-4541-90e3-fad6caf5bccf",
        url: "https://cursos.alura.com.br/certificate/b43246ff-095a-4541-90e3-fad6caf5bccf",
        platform: "Alura"
    },
    {
        id: "react-como-componentes-funcionam-alura",
        title: "React: como os componentes funcionam",
        category: "React.js",
        credentialCode: "64fd8d1f-c04c-4cb5-a379-49afd20a29ed",
        url: "https://cursos.alura.com.br/certificate/64fd8d1f-c04c-4cb5-a379-49afd20a29ed",
        platform: "Alura"
    },
    {
        id: "react-desenvolvendo-router-js-alura",
        title: "React: desenvolvendo em React Router com JavaScript",
        category: "React Router",
        credentialCode: "45330da4-7937-4e32-a0e9-089f90eb72bf",
        url: "https://cursos.alura.com.br/certificate/45330da4-7937-4e32-a0e9-089f90eb72bf",
        platform: "Alura"
    },
    {
        id: "react-arquivos-estaticos-abr-alura",
        title: "React: lidando com arquivos estáticos",
        category: "React.js",
        credentialCode: "7cd2d4a7-4d6d-4541-964c-a6118809dd52",
        url: "https://cursos.alura.com.br/certificate/7cd2d4a7-4d6d-4541-964c-a6118809dd52",
        platform: "Alura"
    },
    {
        id: "react-contextapi-alura",
        title: "React: gerenciamento de estados globais com ContextAPI",
        category: "Context API",
        credentialCode: "cf2cc4bf-8e41-4de1-952a-070f0a17e689",
        url: "https://cursos.alura.com.br/certificate/cf2cc4bf-8e41-4de1-952a-070f0a17e689",
        platform: "Alura"
    },
    {
        id: "react-praticando-js-alura",
        title: "React: praticando React com Js",
        category: "React.js",
        credentialCode: "48eba446-0f30-4ad1-be62-3b92b625b6be",
        url: "https://cursos.alura.com.br/certificate/48eba446-0f30-4ad1-be62-3b92b625b6be",
        platform: "Alura"
    },
    {
        id: "react-escrevendo-typescript-alura",
        title: "React: escrevendo com Typescript",
        category: "React & TypeScript",
        credentialCode: "74ed4416-a8a2-4943-9dff-7d3e987b9bb4",
        url: "https://cursos.alura.com.br/certificate/74ed4416-a8a2-4943-9dff-7d3e987b9bb4",
        platform: "Alura"
    },
    {
        id: "react-desenvolvendo-js-alura",
        title: "React: desenvolvendo com JavaScript",
        category: "React.js",
        credentialCode: "a2184b19-d1d8-4582-a26f-3f44538fa1d0",
        url: "https://cursos.alura.com.br/certificate/a2184b19-d1d8-4582-a26f-3f44538fa1d0",
        platform: "Alura"
    }
];
