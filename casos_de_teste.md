# 🧪 Casos de Teste – Projeto de Automação QA

Documentação dos casos de teste funcionais que servem de base para automação com Playwright.

## CT01 – Pesquisa válida

**Objetivo:** Validar que a barra de pesquisa retorna resultados para um termo válido.

**Pré-condição:** navegador aberto na página de busca.

**Passos:**
1. Acessar a página inicial da pesquisa (Google).
2. Digitar “Python” na barra de busca.
3. Executar a busca (Enter ou clique).

**Resultado esperado:** A página de resultados é exibida e o título contém o termo pesquisado (“Python”).

## CT02 – Pesquisa vazia

**Objetivo:** Verificar o comportamento do sistema ao tentar pesquisar sem digitar nada.

**Passos:**
1. Acessar a página inicial de pesquisa.
2. Deixar o campo de busca vazio.
3. Clicar no botão “Buscar”.

**Resultado esperado:** O sistema exibe uma mensagem de erro, advertência ou bloqueia a ação.

## CT03 – Página carrega corretamente

**Objetivo:** Validar se a página principal é carregada com sucesso.

**Passos:**
1. Acessar a página inicial.

**Resultado esperado:** O título da página contém o texto esperado, indicando carregamento correto.

## CT04 – Login válido

**Objetivo:** Garantir que um login válido permite acesso ao sistema.

**Passos:** 
1. Acessar a página de login.
2. Preencher usuário e senha corretos.
3. Clicar em “Entrar”.

**Resultado esperado:** O sistema redireciona o usuário para a página principal.

## CT05 – Login inválido

**Objetivo:** Validar que o sistema apresenta mensagem de erro ao inserir credenciais inválidas.

**Passos:**
1. Acessar a página de login.
2. Preencher usuário incorreto.
3. Preencher senha incorreta.
4. Clicar em “Entrar”.

**Resultado esperado:** Mensagem de erro é exibida (“Usuário ou senha inválida”, ou equivalente).

## CT06 – Interação com botão

**Objetivo:** Verificar se um botão executa a ação esperada ao ser clicado.

**Passos:**
1. Acessar página exemplo com botão.
2. Clicar no botão.

**Resultado esperado:**
O texto, elemento ou mensagem esperada é alterado ou exibido.
