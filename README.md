# HaV Project

Uma aplicação Next.js 14 escalável com TypeScript, Tailwind CSS e App Router.

## 🚀 Características

- **Next.js 14** com App Router para roteamento moderno
- **TypeScript** para tipagem estática
- **Tailwind CSS** para estilização eficiente
- **ESLint** para qualidade de código
- **Estrutura de pastas organizada** para escalabilidade

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── about/             # Página Sobre
│   ├── contact/           # Página Contato
│   ├── services/          # Página Serviços
│   ├── dashboard/         # Página Dashboard
│   ├── layout.tsx         # Layout raiz
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de interface
│   │   └── Button.tsx    # Componente de botão
│   └── layout/           # Componentes de layout
│       └── Navbar.tsx    # Barra de navegação
├── hooks/                # Custom hooks
│   └── index.ts          # Hooks utilitários
├── lib/                  # Utilitários e configurações
│   └── utils.ts          # Funções utilitárias
├── styles/               # Estilos globais
│   └── globals.css       # CSS global com Tailwind
└── types/                # Definições de tipos TypeScript
    └── index.ts          # Tipos compartilhados
```

## 🛠️ Configuração

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd HaV
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📖 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria o build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎨 Páginas Incluídas

- **Página Inicial (/)** - Landing page com links para outras seções
- **Sobre (/about)** - Informações sobre o projeto
- **Serviços (/services)** - Lista de serviços oferecidos
- **Contato (/contact)** - Formulário de contato
- **Dashboard (/dashboard)** - Painel administrativo com métricas

## 🧩 Componentes

### UI Components

- **Button** - Componente de botão customizável com variantes

### Layout Components

- **Navbar** - Barra de navegação responsiva

## 🔧 Utilitários

### Hooks

- **useScreenSize** - Hook para detectar tamanho da tela
- **useLocalStorage** - Hook para localStorage

### Funções Utilitárias

- **formatDate** - Formatação de datas
- **capitalize** - Capitalização de strings
- **truncateText** - Truncar texto
- **slugify** - Criar slugs de URLs

## 🎯 Próximos Passos

- [ ] Adicionar sistema de autenticação
- [ ] Implementar API routes
- [ ] Configurar banco de dados
- [ ] Adicionar testes unitários
- [ ] Configurar CI/CD
- [ ] Adicionar PWA support

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
   Implementação de uma SPA para Hofstatter Ashton & Venancio Advocacia
