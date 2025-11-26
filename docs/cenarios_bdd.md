# Cenários BDD (Gherkin)

## Cenário 01 — Pesquisa válida
**Funcionalidade:** Busca
**Cenário:** Pesquisa válida retorna resultados
**Dado** que o usuário está na página inicial  
**Quando** digita "Python" no campo de busca  
**E** clica em "Buscar"  
**Então** deve exibir resultados relacionados a Python.

---

## Cenário 02 — Campo de busca vazio
**Funcionalidade:** Busca
**Cenário:** Usuário tenta pesquisar sem digitar nada
**Dado** que o usuário está na página inicial  
**Quando** clicar em "Buscar" sem digitar nada  
**Então** deve aparecer a mensagem "Digite um termo para pesquisar".

---

## Cenário 03 — Página carrega corretamente
**Funcionalidade:** Carregamento de página
**Cenário:** Página inicial carrega com título correto
**Dado** o usuário acessou a página inicial
**Então** o título exibido deve indicar carregamento concluído.

---

## Cenário 04 – Login válido
**Funcionalidade:** Login
**Cenário:** Login realizado com sucesso
**Dado** que o usuário está na página de login
**Quando** insere credenciais válidas
**E** clica em "Entrar"
**Então** deve ser redirecionado para a página principal

---

## Cenário 05 – Login inválido

**Funcionalidade:** Login
**Cenário:** Usuário insere credenciais inválidas
**Dado** que o usuário está na página de login
**Quando** insire usuário e senha incorretos
**E** clica em "Entrar"
**Então** o sistema deve exibir uma mensagem de erro

---

## Cenário 06 – Interação com botão

**Funcionalidade:** Botões
**Cenário:** Botão altera o texto ao ser clicado
**Dado** que o usuário está na página com botão de ação
**Quando** clica no botão
**Então** o texto esperado deve ser exibido
