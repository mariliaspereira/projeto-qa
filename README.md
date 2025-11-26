# Projeto QA — Automação & Testes

> Repositório de demonstração de habilidades em QA: testes manuais, BDD e automação com Playwright + Node.js.

## 🔎 Sobre

Este projeto contém:

- Casos de teste manuais documentados (`casos_de_teste.md`)  
- Cenários BDD iniciais (`cenarios_bdd.md`)  
- Automação de teste com Playwright + Node.js, executável 100% via navegador (GitHub Codespaces)  

O objetivo é demonstrar competências práticas de QA — tanto na escrita de testes quanto na automação.

---

## 🚀 Tecnologias usadas

- Node.js  
- Playwright  
- JavaScript  
- Markdown (documentação de testes manuais)  

---
## 📁 Estrutura do repositório projeto-qa/
├── README.md ← este arquivo
├── .gitignore ← arquivos/pastas ignoradas no Git
├── casos_de_teste.md ← especificações manuais de teste
├── cenarios_bdd.md ← cenários BDD escritos em texto
└── automacao/ ← testes automatizados
└── tests/
└── busca.spec.js ← teste de busca no Google como exemplo


---

## ✅ Como rodar os testes automatizados

Para executar os testes:

1. Clone o repositório:  
   ```bash
   git clone https://github.com/mariliaspereira/projeto-qa.git
   cd projeto-qa

2. Instale dependências:
   npm install

3. Instale os navegadores do Playwright (uma única vez):
   npx playwright install

4. Execute os testes:
   npx playwright test

Se tudo estiver correto, você verá: 
  1 passed ...
