# Casos de Teste - Projeto QA Links

## CT01 - Pesquisa válida
**Objetivo:** verificar se a barra de pesquisa retorna resultados.  
**Passos:**  
1. Acessar a página de buscas.  
2. Digitar "Python".  
3. Clicar em "Buscar".  
**Resultado esperado:** lista de resultados com links sobre Python.

---

## CT02 - Pesquisa vazia
**Objetivo:** verificar o comportamento ao buscar sem digitar nada.  
**Passos:**  
1. Campo de busca vazio.  
2. Clicar em "Buscar".  
**Resultado esperado:** mensagem “Digite um termo para pesquisar”.

---

## CT03 - Link abrindo corretamente
**Objetivo:** validar se os links da pesquisa abrem.  
**Passos:**  
1. Buscar por "JavaScript".  
2. Clicar no primeiro link.  
**Resultado esperado:** nova aba abre com o site correto.

---

## CT04 - Caracteres especiais
**Objetivo:** garantir estabilidade com entradas inválidas.  
**Passos:**  
1. Buscar por "&&&&&".  
**Resultado esperado:** “Nenhum resultado encontrado”.

---

## CT05 - Tecla Enter
**Objetivo:** verificar se Enter executa busca.  
**Passos:**  
1. Digitar "Data Science".  
2. Pressionar Enter.  
**Resultado esperado:** pesquisa é realizada.
